import React, { useState, useEffect } from 'react'
import { Copy, ExternalLink, Wallet, RefreshCw, LogOut } from 'lucide-react'
import { useNavigate } from 'react-router-dom'

const JobPage = () => {
  const [account, setAccount] = useState(null)
  const [network, setNetwork] = useState(null)
  const [loading, setLoading] = useState(true)
  const [copied, setCopied] = useState('')
  const navigate = useNavigate()

  // Check if Petra wallet is connected
  useEffect(() => {
    checkWalletConnection()
  }, [])

  const checkWalletConnection = async () => {
    try {
      if (window.aptos) {
        // Check if already connected
        const isConnected = await window.aptos.isConnected()
        
        if (isConnected) {
          const accountInfo = await window.aptos.account()
          const networkInfo = await window.aptos.network()
          
          setAccount(accountInfo)
          setNetwork(networkInfo)
        } else {
          // Redirect back to home if not connected
          navigate('/')
        }
      } else {
        // Petra not installed, redirect to home
        navigate('/')
      }
    } catch (error) {
      console.error('Error checking wallet connection:', error)
      navigate('/')
    } finally {
      setLoading(false)
    }
  }

  // Copy to clipboard function
  const copyToClipboard = async (text, type) => {
    try {
      await navigator.clipboard.writeText(text)
      setCopied(type)
      setTimeout(() => setCopied(''), 2000)
    } catch (error) {
      console.error('Failed to copy:', error)
    }
  }

  // Disconnect wallet
  const handleDisconnect = async () => {
    try {
      await window.aptos.disconnect()
      navigate('/')
    } catch (error) {
      console.error('Error disconnecting:', error)
    }
  }

  // Refresh account data
  const refreshData = async () => {
    setLoading(true)
    await checkWalletConnection()
  }

  // Format address for display
  const formatAddress = (address, length = 16) => {
    if (!address) return ''
    return `${address.slice(0, length)}...${address.slice(-8)}`
  }

  if (loading) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="bg-white p-8 rounded-lg shadow-md">
          <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-blue-600 mx-auto"></div>
          <p className="mt-4 text-gray-600">Loading wallet data...</p>
        </div>
      </div>
    )
  }

  if (!account) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="bg-white p-8 rounded-lg shadow-md text-center">
          <Wallet className="mx-auto h-12 w-12 text-gray-400 mb-4" />
          <h2 className="text-xl font-semibold text-gray-900 mb-2">No Wallet Connected</h2>
          <p className="text-gray-600 mb-4">Please connect your wallet to continue</p>
          <button
            onClick={() => navigate('/')}
            className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition-colors"
          >
            Go Back Home
          </button>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-gray-50 py-8 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <div className="bg-white shadow-md rounded-lg mb-6">
          <div className="px-6 py-4 border-b border-gray-200 flex justify-between items-center">
            <div className="flex items-center space-x-3">
              <Wallet className="h-6 w-6 text-blue-600" />
              <h1 className="text-2xl font-bold text-gray-900">Petra Wallet Dashboard</h1>
            </div>
            <div className="flex space-x-2">
              <button
                onClick={refreshData}
                className="p-2 text-gray-500 hover:text-gray-700 hover:bg-gray-100 rounded-full transition-colors"
                title="Refresh Data"
              >
                <RefreshCw className="h-5 w-5" />
              </button>
              <button
                onClick={handleDisconnect}
                className="flex items-center space-x-2 px-4 py-2 bg-red-100 text-red-700 rounded-lg hover:bg-red-200 transition-colors"
              >
                <LogOut className="h-4 w-4" />
                <span>Disconnect</span>
              </button>
            </div>
          </div>
        </div>

        {/* Account Information */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-6">
          {/* Account Details */}
          <div className="bg-white shadow-md rounded-lg">
            <div className="px-6 py-4 border-b border-gray-200">
              <h2 className="text-lg font-semibold text-gray-900">Account Information</h2>
            </div>
            <div className="p-6 space-y-4">
              {/* Address */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Public Address
                </label>
                <div className="flex items-center space-x-2 p-3 bg-gray-50 rounded-lg">
                  <code className="flex-1 text-sm font-mono text-gray-800 break-all">
                    {account.address}
                  </code>
                  <button
                    onClick={() => copyToClipboard(account.address, 'address')}
                    className="p-1 text-gray-500 hover:text-gray-700 transition-colors"
                    title="Copy Address"
                  >
                    <Copy className="h-4 w-4" />
                  </button>
                  {copied === 'address' && (
                    <span className="text-xs text-green-600 font-medium">Copied!</span>
                  )}
                </div>
              </div>

              {/* Public Key */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Public Key
                </label>
                <div className="flex items-center space-x-2 p-3 bg-gray-50 rounded-lg">
                  <code className="flex-1 text-sm font-mono text-gray-800 break-all">
                    {account.publicKey}
                  </code>
                  <button
                    onClick={() => copyToClipboard(account.publicKey, 'publicKey')}
                    className="p-1 text-gray-500 hover:text-gray-700 transition-colors"
                    title="Copy Public Key"
                  >
                    <Copy className="h-4 w-4" />
                  </button>
                  {copied === 'publicKey' && (
                    <span className="text-xs text-green-600 font-medium">Copied!</span>
                  )}
                </div>
              </div>

              {/* Authentication Key */}
              {account.authKey && (
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Authentication Key
                  </label>
                  <div className="flex items-center space-x-2 p-3 bg-gray-50 rounded-lg">
                    <code className="flex-1 text-sm font-mono text-gray-800 break-all">
                      {account.authKey}
                    </code>
                    <button
                      onClick={() => copyToClipboard(account.authKey, 'authKey')}
                      className="p-1 text-gray-500 hover:text-gray-700 transition-colors"
                      title="Copy Auth Key"
                    >
                      <Copy className="h-4 w-4" />
                    </button>
                    {copied === 'authKey' && (
                      <span className="text-xs text-green-600 font-medium">Copied!</span>
                    )}
                  </div>
                </div>
              )}
            </div>
          </div>

          {/* Network Information */}
          <div className="bg-white shadow-md rounded-lg">
            <div className="px-6 py-4 border-b border-gray-200">
              <h2 className="text-lg font-semibold text-gray-900">Network Information</h2>
            </div>
            <div className="p-6 space-y-4">
              {network && (
                <>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      Network Name
                    </label>
                    <div className="p-3 bg-gray-50 rounded-lg">
                      <span className="text-sm font-medium text-gray-800 capitalize">
                        {network.name || 'Unknown'}
                      </span>
                    </div>
                  </div>

                  {network.url && (
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">
                        Network URL
                      </label>
                      <div className="flex items-center space-x-2 p-3 bg-gray-50 rounded-lg">
                        <code className="flex-1 text-sm font-mono text-gray-800">
                          {network.url}
                        </code>
                        <button
                          onClick={() => window.open(network.url, '_blank')}
                          className="p-1 text-gray-500 hover:text-gray-700 transition-colors"
                          title="Open Network URL"
                        >
                          <ExternalLink className="h-4 w-4" />
                        </button>
                      </div>
                    </div>
                  )}

                  {network.chainId && (
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">
                        Chain ID
                      </label>
                      <div className="p-3 bg-gray-50 rounded-lg">
                        <span className="text-sm font-medium text-gray-800">
                          {network.chainId}
                        </span>
                      </div>
                    </div>
                  )}
                </>
              )}
            </div>
          </div>
        </div>

        {/* Wallet Status */}
        <div className="bg-white shadow-md rounded-lg">
          <div className="px-6 py-4 border-b border-gray-200">
            <h2 className="text-lg font-semibold text-gray-900">Wallet Status</h2>
          </div>
          <div className="p-6">
            <div className="flex items-center space-x-3 p-4 bg-green-50 rounded-lg">
              <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse"></div>
              <span className="text-sm font-medium text-green-800">
                Wallet Connected Successfully
              </span>
            </div>
            
            <div className="mt-4 p-4 bg-blue-50 rounded-lg">
              <h3 className="text-sm font-medium text-blue-800 mb-2">Quick Actions</h3>
              <div className="flex flex-wrap gap-2">
                <button
                  onClick={() => window.open(`https://explorer.aptoslabs.com/account/${account.address}`, '_blank')}
                  className="px-3 py-1 bg-blue-100 text-blue-700 text-sm rounded-lg hover:bg-blue-200 transition-colors"
                >
                  View on Explorer
                </button>
                <button
                  onClick={() => copyToClipboard(account.address, 'quickCopy')}
                  className="px-3 py-1 bg-gray-100 text-gray-700 text-sm rounded-lg hover:bg-gray-200 transition-colors"
                >
                  {copied === 'quickCopy' ? 'Copied!' : 'Copy Address'}
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Debug Information (Optional) */}
        <div className="bg-white shadow-md rounded-lg mt-6">
          <div className="px-6 py-4 border-b border-gray-200">
            <h2 className="text-lg font-semibold text-gray-900">Debug Information</h2>
          </div>
          <div className="p-6">
            <pre className="bg-gray-50 p-4 rounded-lg text-xs overflow-x-auto">
              {JSON.stringify({ account, network }, null, 2)}
            </pre>
          </div>
        </div>
      </div>
    </div>
  )
}

export default JobPage