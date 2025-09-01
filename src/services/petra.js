// services/petra.js
import { WALLET_TYPES, STORAGE_KEYS } from '../utils/walletUtils';

class PetraWalletService {
  constructor() {
    this.walletType = WALLET_TYPES.PETRA;
  }

  // Check if Petra wallet is installed
  isInstalled() {
    return typeof window !== 'undefined' && 'aptos' in window;
  }

  // Check if wallet is connected
  async isConnected() {
    try {
      if (!this.isInstalled()) return false;
      return await window.aptos.isConnected();
    } catch (error) {
      console.error('Error checking Petra connection:', error);
      return false;
    }
  }

  // Connect to Petra wallet
  async connect() {
    if (!this.isInstalled()) {
      throw new Error('Petra wallet is not installed. Please install it from Chrome Web Store.');
    }

    try {
      const response = await window.aptos.connect();
      
      if (response) {
        // Store wallet info (if you want to persist, uncomment below)
        // localStorage.setItem(STORAGE_KEYS.WALLET_ACCOUNT, JSON.stringify(response));
        // localStorage.setItem(STORAGE_KEYS.WALLET_TYPE, this.walletType);
        
        return {
          success: true,
          data: response,
          walletType: this.walletType
        };
      }
      
      throw new Error('Failed to connect to Petra wallet');
    } catch (error) {
      console.error('Petra connection error:', error);
      
      let errorMessage = 'Failed to connect to Petra wallet';
      if (error.code === 4001) {
        errorMessage = 'Connection rejected by user';
      }
      
      return {
        success: false,
        error: errorMessage,
        code: error.code
      };
    }
  }

  // Disconnect from wallet
  async disconnect() {
    try {
      if (this.isInstalled() && await this.isConnected()) {
        await window.aptos.disconnect();
      }
      
      // Clear stored data
      // localStorage.removeItem(STORAGE_KEYS.WALLET_ACCOUNT);
      // localStorage.removeItem(STORAGE_KEYS.WALLET_TYPE);
      // localStorage.removeItem(STORAGE_KEYS.WALLET_NETWORK);
      
      return { success: true };
    } catch (error) {
      console.error('Error disconnecting Petra wallet:', error);
      return { 
        success: false, 
        error: 'Failed to disconnect wallet' 
      };
    }
  }

  // Get account information
  async getAccount() {
    try {
      if (!await this.isConnected()) {
        throw new Error('Wallet not connected');
      }
      
      const account = await window.aptos.account();
      return { success: true, data: account };
    } catch (error) {
      console.error('Error getting Petra account:', error);
      return { 
        success: false, 
        error: 'Failed to get account information' 
      };
    }
  }

  // Get network information
  async getNetwork() {
    try {
      if (!await this.isConnected()) {
        throw new Error('Wallet not connected');
      }
      
      const network = await window.aptos.network();
      return { success: true, data: network };
    } catch (error) {
      console.error('Error getting Petra network:', error);
      return { 
        success: false, 
        error: 'Failed to get network information' 
      };
    }
  }

  // Get wallet info (account + network)
  async getWalletInfo() {
    try {
      const [accountResult, networkResult] = await Promise.all([
        this.getAccount(),
        this.getNetwork()
      ]);

      if (!accountResult.success || !networkResult.success) {
        throw new Error('Failed to get wallet information');
      }

      return {
        success: true,
        data: {
          account: accountResult.data,
          network: networkResult.data,
          walletType: this.walletType
        }
      };
    } catch (error) {
      console.error('Error getting Petra wallet info:', error);
      return {
        success: false,
        error: 'Failed to get wallet information'
      };
    }
  }

  // Get installation URL
  getInstallUrl() {
    return 'https://petra.app/';
  }

  // Get wallet name
  getName() {
    return 'Petra Wallet';
  }
}

// Export singleton instance
export const petraWallet = new PetraWalletService();
export default petraWallet;