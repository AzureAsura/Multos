import React, { useEffect, useState } from "react";
import { useWallet } from "@aptos-labs/wallet-adapter-react";
import { fetchBalance, formatBalance } from "../utils/walletUtils";

const HeroBalance = () => {
  const { connected, account } = useWallet();
  const [balance, setBalance] = useState("0");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  useEffect(() => {
    let interval;

    const loadBalance = async () => {
      if (!connected || !account?.address) return;
      setLoading(true);
      setError("");
      try {
        const bal = await fetchBalance(account.address);
        setBalance(bal);
      } catch {
        setError("Failed to fetch balance");
      } finally {
        setLoading(false);
      }
    };

    if (connected && account?.address) {
      loadBalance();
      interval = setInterval(loadBalance, 20000); // refresh 10 detik
    }

    return () => clearInterval(interval);
  }, [connected, account?.address]);

  return (
    <div>
      {loading ? (
        <div className="bg-red-50 text-black text-center rounded-full px-4 py-2 w-fit mx-auto">
          <p>Loading balance...</p>
        </div>
      ) : error ? (
        <div className="bg-red-200 text-red-700 text-center rounded-full px-4 py-2 w-fit mx-auto">
          <p>{error}</p>
        </div>
      ) : (
        <div className="bg-red-200 text-center rounded-full px-4 py-2 w-fit mx-auto">
          <p>
            send APT or token you have{" "}
            <strong>{formatBalance(balance)} Aptos</strong>
          </p>
        </div>
      )}
    </div>

  );
};

export default HeroBalance;
