import React, { useEffect } from "react";
import { useWallet } from "@aptos-labs/wallet-adapter-react";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";

const JobPage = () => {
  const { connected, account, disconnect } = useWallet();
  const navigate = useNavigate();

  // Kalau user disconnect, auto redirect ke "/"
  useEffect(() => {
    if (!connected) {
      navigate("/");
    }
  }, [connected, navigate]);

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 p-6">
      <div className="w-full max-w-lg bg-white shadow-lg rounded-2xl p-8">
        <h1 className="text-2xl font-bold text-gray-900 mb-6">Jobs Page</h1>

        {connected ? (
          <div className="space-y-5">
            {/* Address Wallet */}
            <div className="bg-gray-100 p-4 rounded-xl">
              <p className="text-sm font-medium text-gray-500">Connected Wallet:</p>
              <p className="font-mono text-gray-800 break-all">
                {account?.address?.toString()}
              </p>
            </div>

            {/* Disconnect Button */}
            <motion.button
              onClick={disconnect}
              className="w-full bg-red-500 text-white font-semibold py-2 px-6 rounded-2xl hover:bg-red-600 shadow-md"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              Disconnect
            </motion.button>
          </div>
        ) : (
          <div className="text-center">
            <p className="text-gray-600">🚫 You are not connected to any wallet.</p>
            <p className="text-sm text-gray-500 mt-2">
              Redirecting to Home...
            </p>
          </div>
        )}
      </div>
    </div>
  );
};

export default JobPage;
