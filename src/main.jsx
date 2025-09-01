import './index.css'
import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { AptosWalletAdapterProvider } from "@aptos-labs/wallet-adapter-react";
import { Network } from "@aptos-labs/ts-sdk";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <AptosWalletAdapterProvider
      autoConnect={true}
      optInWallets={[
        "Petra",
        "AptosConnect",
        "Bitget",    // ✅ Tambah Bitget
        "OKX",
        "Trust",
      ]}
      dappConfig={{ network: Network.TESTNET }}
      onError={(error) => console.error("Wallet Adapter Error:", error)}
    >
      <App />
    </AptosWalletAdapterProvider>
  </React.StrictMode>
);
