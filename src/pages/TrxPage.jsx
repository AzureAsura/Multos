import React from "react";
import { useWallet } from "@aptos-labs/wallet-adapter-react";
import { motion } from "framer-motion";

const TrxPage = () => {
  const { connected, account, disconnect } = useWallet();

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 p-6">
      <div className="w-full max-w-lg bg-white shadow-lg rounded-2xl p-8">
        <h1 className="text-2xl font-bold text-gray-900 mb-6">TEST</h1>

        {connected ? (
          <div className="space-y-5">
            <div className="bg-gray-100 p-4 rounded-xl">
              <p className="text-sm font-medium text-gray-500">Connected Wallet:</p>
              <p className="font-mono text-gray-800 break-all">
                {account?.address?.toString()}
              </p>
            </div>

            <motion.button
              onClick={disconnect} // otomatis update connected → App.jsx rerender
              className="w-full bg-red-500 text-white font-semibold py-2 px-6 rounded-2xl hover:bg-red-600 shadow-md"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              Disconnect
            </motion.button>
          </div>
        ) : null /* gak perlu navigate */}
      </div>
    </div>
  );
};

export default TrxPage;
