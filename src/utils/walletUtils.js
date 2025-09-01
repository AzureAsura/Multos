// utils/walletUtils.js
export const formatAddress = (address, startLength = 6, endLength = 4) => {
  if (!address) return '';
  return `${address.slice(0, startLength)}...${address.slice(-endLength)}`;
};

export const copyToClipboard = async (text) => {
  try {
    await navigator.clipboard.writeText(text);
    return true;
  } catch (error) {
    console.error('Failed to copy:', error);
    return false;
  }
};

export const openInExplorer = (address, network = 'mainnet') => {
  const explorerUrls = {
    mainnet: 'https://explorer.aptoslabs.com',
    testnet: 'https://explorer.aptoslabs.com',
    devnet: 'https://explorer.aptoslabs.com'
  };
  
  const baseUrl = explorerUrls[network] || explorerUrls.mainnet;
  window.open(`${baseUrl}/account/${address}`, '_blank');
};

// Wallet types enum
export const WALLET_TYPES = {
  PETRA: 'petra',
  MARTIAN: 'martian',
  PONTEM: 'pontem',
  FEWCHA: 'fewcha',
  // Add more wallet types here
};

// Storage keys
export const STORAGE_KEYS = {
  WALLET_ACCOUNT: 'walletAccount',
  WALLET_TYPE: 'walletType',
  WALLET_NETWORK: 'walletNetwork'
};