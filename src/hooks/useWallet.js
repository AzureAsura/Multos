// hooks/useWallet.js
import { useState, useEffect, useCallback } from 'react';
import { walletManager } from '../services/walletManager';
import { WALLET_TYPES } from '../utils/walletUtils';

export const useWallet = () => {
  const [account, setAccount] = useState(null);
  const [network, setNetwork] = useState(null);
  const [walletType, setWalletType] = useState(null);
  const [isConnected, setIsConnected] = useState(false);
  const [isConnecting, setIsConnecting] = useState(false);
  const [error, setError] = useState(null);

  // Check wallet connection on mount
  useEffect(() => {
    checkConnection();
  }, []);

  const checkConnection = useCallback(async () => {
    try {
      const result = await walletManager.autoDetectConnection();
      
      if (result.success && result.data) {
        setAccount(result.data.account);
        setNetwork(result.data.network);
        setWalletType(result.walletType);
        setIsConnected(true);
        setError(null);
      } else {
        setIsConnected(false);
      }
    } catch (error) {
      console.error('Error checking wallet connection:', error);
      setError('Failed to check wallet connection');
      setIsConnected(false);
    }
  }, []);

  const connect = useCallback(async (selectedWalletType = WALLET_TYPES.PETRA) => {
    setIsConnecting(true);
    setError(null);

    try {
      const result = await walletManager.connect(selectedWalletType);
      
      if (result.success && result.data) {
        setAccount(result.data);
        setWalletType(selectedWalletType);
        setIsConnected(true);
        
        // Get network info
        const walletInfo = await walletManager.getCurrentWalletInfo();
        if (walletInfo.success) {
          setNetwork(walletInfo.data.network);
        }
        
        return result;
      } else {
        setError(result.error);
        return result;
      }
    } catch (error) {
      const errorMessage = error.message || 'Failed to connect wallet';
      setError(errorMessage);
      return {
        success: false,
        error: errorMessage
      };
    } finally {
      setIsConnecting(false);
    }
  }, []);

  const disconnect = useCallback(async () => {
    try {
      const result = await walletManager.disconnect();
      
      if (result.success) {
        setAccount(null);
        setNetwork(null);
        setWalletType(null);
        setIsConnected(false);
        setError(null);
      }
      
      return result;
    } catch (error) {
      console.error('Error disconnecting wallet:', error);
      setError('Failed to disconnect wallet');
      return {
        success: false,
        error: 'Failed to disconnect wallet'
      };
    }
  }, []);

  const refreshWalletInfo = useCallback(async () => {
    if (!isConnected) return;

    try {
      const walletInfo = await walletManager.getCurrentWalletInfo();
      
      if (walletInfo.success && walletInfo.data) {
        setAccount(walletInfo.data.account);
        setNetwork(walletInfo.data.network);
        setError(null);
      } else {
        setError(walletInfo.error);
      }
    } catch (error) {
      console.error('Error refreshing wallet info:', error);
      setError('Failed to refresh wallet information');
    }
  }, [isConnected]);

  const getAvailableWallets = useCallback(() => {
    return walletManager.getAvailableWallets();
  }, []);

  return {
    // State
    account,
    network,
    walletType,
    isConnected,
    isConnecting,
    error,
    
    // Actions
    connect,
    disconnect,
    refreshWalletInfo,
    checkConnection,
    getAvailableWallets,
    
    // Utilities
    walletManager
  };
};