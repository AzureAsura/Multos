// utils/walletUtils.js
import { Aptos, AptosConfig, Network } from "@aptos-labs/ts-sdk";

// === Inisialisasi Aptos Client ===
const aptosConfig = new AptosConfig({ network: Network.TESTNET });
const aptos = new Aptos(aptosConfig);

/**
 * Format balance dari octas (1 APT = 10^8 octas) ke APT
 */
export function formatBalance(balanceInOctas, decimals = 8) {
  if (!balanceInOctas) return "0.00000000";
  const balanceInAPT = Number(balanceInOctas) / 100000000;
  return balanceInAPT.toFixed(decimals);
}

/**
 * Ambil balance APT dari sebuah account address
 */
export async function fetchBalance(address) {
  try {
    // Method utama
    const balance = await aptos.getAccountAPTAmount({
      accountAddress: address,
    });
    return balance.toString();
  } catch (err) {
    console.error("❌ getAccountAPTAmount gagal:", err);

    // Fallback method pakai resources
    try {
      const resources = await aptos.getAccountResources({
        accountAddress: address,
      });

      const coinResource = resources.find(
        (resource) =>
          resource.type ===
          "0x1::coin::CoinStore<0x1::aptos_coin::AptosCoin>"
      );

      if (coinResource && coinResource.data) {
        return coinResource.data.coin.value.toString();
      } else {
        return "0";
      }
    } catch (fallbackErr) {
      console.error("❌ Fallback method juga gagal:", fallbackErr);
      throw new Error("Unable to fetch balance");
    }
  }
}
