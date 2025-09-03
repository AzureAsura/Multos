import React from "react";
import HomePage from "./pages/HomePage";
import TrxPage from "./pages/TrxPage";
import { useWallet } from "@aptos-labs/wallet-adapter-react";

const App = () => {
  const { connected } = useWallet(); // <-- panggil di dalam component

  return (
    <>
      {connected ? (
        <TrxPage />   
      ) : (
        <HomePage /> 
      )}
    </>
  );
};

export default App;
