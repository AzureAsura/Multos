import React, { useMemo, useState, useEffect } from "react";
import { useWallet } from "@aptos-labs/wallet-adapter-react";
import { formatBalance, fetchBalance } from "../utils/walletUtils"; // ✅ utils
import NavbarTrx from "../sections/NavbarTrx";
import HeroBalance from "../components/HeroBalance";
import logo from '/multos.svg';

const TrxPage = () => {
  const [textInput, setTextInput] = useState('');
  const [amountInput, setAmountInput] = useState('');
  const { account } = useWallet();
  const [balance, setBalance] = useState("0"); // ✅ balance asli dari wallet
  const [showAll, setShowAll] = useState(false);

  // 🔹 Ambil balance langsung dari utils
  useEffect(() => {
    const loadBalance = async () => {
      if (account?.address) {
        try {
          const bal = await fetchBalance(account.address);
          setBalance(bal);
        } catch (err) {
          console.error("❌ Gagal fetch balance:", err);
          setBalance("0");
        }
      }
    };
    loadBalance();
  }, [account?.address]);

  // 🔹 Parse input addresses + amounts
  const parsedData = useMemo(() => {
    const addresses = textInput.trim().split('\n').filter(line => line.trim());
    const amounts = amountInput.trim().split('\n').filter(line => line.trim()).map(amount => parseFloat(amount) || 0);

    const parsed = [];
    const maxLength = Math.max(addresses.length, amounts.length);

    for (let i = 0; i < maxLength; i++) {
      const address = addresses[i] || '';
      const amount = amounts[i] || 0;
      if (address.trim()) {
        parsed.push({ address: address.trim(), amount });
      }
    }

    return parsed;
  }, [textInput, amountInput]);

  // 🔹 Hitung total, fee, dan sisa balance
  const totalAmount = parsedData.reduce((sum, item) => sum + item.amount, 0);
  const fee = Math.ceil(totalAmount * 0.01);
  const remaining = (Number(balance) / 100000000) - totalAmount - fee; // ✅ balance dari octas → APT

  return (
    <>
      <NavbarTrx />
      <section className='w-full min-h-screen flex items-center px-4 md:px-2 lg:px-0 justify-center pt-[8rem] sm:pt-[9rem] '>
        <div className='w-full max-w-[60rem] mx-auto lg:px-[10rem] px-[1rem] py-[2rem] bg-white rounded-3xl shadow-[0_10px_60px_rgba(0,0,0,0.15)]'>

          {/* Logo + Judul */}
          <div className="flex justify-center items-center text-center">
            <div className="flex flex-col md:flex-row items-center justify-center lg:justify-start space-y-2 lg:space-y-0 lg:space-x-2">
              <img src={logo} alt="" className="h-16 sm:h-20 md:h-24" />
              <div className="flex flex-col justify-start text-center lg:text-left">
                <h1 className="text-2xl sm:text-3xl md:text-4xl font-black text-gray-900">
                  Multos
                </h1>
                <div className="flex items-center justify-center mt-1 lg:justify-start space-x-2">
                  <div className="w-2 h-2 bg-red-500 rounded-full animate-pulse"></div>
                  <span className="text-xs sm:text-sm md:text-base text-gray-600 font-medium">
                    Multi Transaction Token On Aptos
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* Deskripsi */}
          <div className="px-8 py-6 space-y-4">
      

            <p className="text-sm sm:text-base md:text-lg text-center text-gray-600 max-w-2xl mx-auto">
              verb distribute aptos or tokens to multiple addresses
            </p>

            <HeroBalance />

          </div>


          {/* Input */}
          <div className="px-8 py-6">
            <h3 className="font-medium mb-2 text-center">recipients and amounts</h3>
            <p className="text-md text-gray-600 mb-4 text-center">enter one address and amount in APT on each line. supports any format.</p>

            <div className="grid grid-cols-[80%_20%] gap-4 mt-14">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Addresses</label>
                <textarea
                  value={textInput}
                  onChange={(e) => setTextInput(e.target.value)}
                  className="w-full h-32 p-3 border border-gray-300 rounded-lg resize-none focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  placeholder="0x314a...&#10;0x271b...&#10;0x141c..."
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Amounts</label>
                <textarea
                  value={amountInput}
                  onChange={(e) => setAmountInput(e.target.value)}
                  className="w-full h-32 p-3 border border-gray-300 rounded-lg resize-none focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  placeholder="80&#10;10&#10;10"
                />
              </div>
            </div>

            {/* Confirmation */}
            {parsedData.length > 0 && (
              <div className="mb-6 mt-10">
                <h3 className="font-medium mb-4">Confirm</h3>

                <div className="bg-gray-50 rounded-lg p-4 mb-4">
                  <div className="grid grid-cols-2 gap-4 mb-2">
                    <div className="font-medium text-gray-700">Address</div>
                    <div className="font-medium text-gray-700 text-right">Amount</div>
                  </div>

                  {(showAll ? parsedData : parsedData.slice(0, 5)).map((item, index) => (
                    <div key={index} className="grid grid-cols-2 gap-4 py-2 text-sm">
                      <div className="font-mono text-gray-800 truncate">{item.address}</div>
                      <div className="text-right text-gray-800">
                        {item.amount > 0 ? `${item.amount} APT` : '-- APT'}
                      </div>
                    </div>
                  ))}
                </div>

                {parsedData.length > 5 && (
                  <button
                    onClick={() => setShowAll(!showAll)}
                    className="text-blue-500 hover:underline text-sm font-medium mb-4"
                  >
                    {showAll ? "Show Less" : `Show All (${parsedData.length})`}
                  </button>
                )}

                {/* Summary */}
                <div className="space-y-2 text-sm">
                  <div className="flex justify-between">
                    <span className="text-gray-700">total</span>
                    <span className="font-medium">{totalAmount} APT</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-700">fee 1%</span>
                    <span className="font-medium">{fee} APT</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-700">your balance</span>
                    <span className="font-medium">{formatBalance(balance)} APT</span>
                  </div>
                  <div className="flex justify-between border-t pt-2">
                    <span className="text-gray-700">remaining</span>
                    <span className="font-medium">
                      {remaining > 0 ? remaining.toFixed(8) : 0} APT
                    </span>
                  </div>
                </div>
              </div>
            )}

            {/* Send Button */}
            <button
              className={`w-full py-3 rounded-lg font-medium ${parsedData.length > 0 && totalAmount > 0
                ? 'bg-green-500 text-white hover:bg-green-600'
                : 'bg-gray-300 text-gray-500 cursor-not-allowed'
                }`}
              disabled={parsedData.length === 0 || totalAmount === 0}
            >
              Send
            </button>
          </div>
        </div>
      </section>
    </>
  );
};

export default TrxPage;
