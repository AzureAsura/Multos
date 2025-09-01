// services/walletManager.js
import { WALLET_TYPES } from '../utils/walletUtils';
import { petraWallet } from './petra';
// import { martianWallet } from './martian';
// import { pontemWallet } from './pontem';

class WalletManager {
  constructor() {
    this.wallets = {
      [WALLET_TYPES.PETRA]: petraWallet,
      // [WALLET_TYPES.MARTIAN]: martianWallet,
      // [WALLET_TYPES.PONTEM]: pontemWallet,
    };
    
    this.currentWallet = null;
    this.currentWalletType = null;
  }

  // Get available wallets
  getAvailableWallets() {
    return Object.keys(this.wallets).map(type => ({
      type,
      wallet: this.wallets[type],
      isInstalled: this.wallets[type].isInstalled(),
      name: this.wallets[type].getName()
    }));
  }

  // Get wallet service by type
  getWallet(walletType) {
    return this.wallets[walletType];
  }

  // Connect to specific wallet
  async connect(walletType) {
    const wallet = this.getWallet(walletType);
    
    if (!wallet) {
      return {
        success: false,
        error: `Wallet type ${walletType} not supported`
      };
    }

    const result = await wallet.connect();
    
    if (result.success) {
      this.currentWallet = wallet;
      this.currentWalletType = walletType;
    }
    
    return result;
  }

  // Disconnect current wallet
  async disconnect() {
    if (this.currentWallet) {
      const result = await this.currentWallet.disconnect();
      
      if (result.success) {
        this.currentWallet = null;
        this.currentWalletType = null;
      }
      
      return result;
    }
    
    return { success: true };
  }

  // Check if any wallet is connected
  async isConnected() {
    if (!this.currentWallet) return false;
    return await this.currentWallet.isConnected();
  }

  // Get current wallet info
  async getCurrentWalletInfo() {
    if (!this.currentWallet) {
      return {
        success: false,
        error: 'No wallet connected'
      };
    }
    
    return await this.currentWallet.getWalletInfo();
  }

  // Auto-detect connected wallet
  async autoDetectConnection() {
    for (const [type, wallet] of Object.entries(this.wallets)) {
      try {
        if (await wallet.isConnected()) {
          this.currentWallet = wallet;
          this.currentWalletType = type;
          
          const walletInfo = await wallet.getWalletInfo();
          return {
            success: true,
            data: walletInfo.data,
            walletType: type
          };
        }
      } catch (error) {
        console.error(`Error checking ${type} connection:`, error);
      }
    }
    
    return {
      success: false,
      error: 'No connected wallet found'
    };
  }

  // Get current wallet type
  getCurrentWalletType() {
    return this.currentWalletType;
  }
}

// Export singleton instance
export const walletManager = new WalletManager();
export default walletManager;