"use client"
import Image from "next/image"
import { useState, useEffect } from "react"
import { connect, disconnect } from "get-starknet"
import type { AccountInterface } from "starknet"

export default function Home() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [wallet, setWallet] = useState<AccountInterface | null>(null)
  const [walletAddress, setWalletAddress] = useState<string | null>(null)
  const [isConnecting, setIsConnecting] = useState(false)
  const [error, setError] = useState<string | null>(null)

  // Check if wallet is already connected on page load
  useEffect(() => {
    const checkConnection = async () => {
      try {
        const starknet = await connect({
          modalOptions: { theme: "light" },
        })

        if (starknet && starknet.isConnected && starknet.account) {
          setWallet(starknet.account)
          setWalletAddress(starknet.account.address)
        }
      } catch (error) {
        console.error("Error checking wallet connection:", error)
      }
    }

    checkConnection()
  }, [])

  const handleConnectWallet = async () => {
    setIsConnecting(true)
    setError(null)

    try {
      const starknet = await connect({
        modalOptions: {
          theme: "light",
          walletConnectors: [{ name: "argentX" }, { name: "braavos" }],
        },
      })

      if (starknet && starknet.isConnected && starknet.account) {
        setWallet(starknet.account)
        setWalletAddress(starknet.account.address)
      } else {
        setError("Failed to connect wallet. Please try again.")
      }
    } catch (error) {
      console.error("Error connecting wallet:", error)
      setError("Error connecting wallet. Please make sure you have Argent or Braavos installed.")
    } finally {
      setIsConnecting(false)
    }
  }

  const handleDisconnectWallet = async () => {
    try {
      await disconnect()
      setWallet(null)
      setWalletAddress(null)
    } catch (error) {
      console.error("Error disconnecting wallet:", error)
    }
  }

  // Format address for display
  const formatAddress = (address: string | null) => {
    if (!address) return ""
    return `${address.substring(0, 6)}...${address.substring(address.length - 4)}`
  }

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="relative flex justify-between items-center px-6 py-4">
        <div className="flex items-center gap-12">
          <Image src="/nestnet-logo.svg" alt="NestNet Logo" width={64} height={64} />
          {/* Desktop Navigation */}
          <nav className="hidden md:flex gap-6">
            <a href="#" className="text-gray-600">
              About us
            </a>
            <a href="#" className="text-gray-600">
              Services
            </a>
            <a href="#" className="text-gray-600">
              Contact us
            </a>
          </nav>
        </div>

        {/* Connect Wallet Button - Desktop Only */}
        <div className="hidden md:block">
          {walletAddress ? (
            <div className="flex items-center gap-2">
              <span className="text-gray-700">{formatAddress(walletAddress)}</span>
              <button
                className="bg-gray-200 text-gray-700 px-3 py-1 rounded-md text-sm cursor-pointer"
                onClick={handleDisconnectWallet}
              >
                Disconnect
              </button>
            </div>
          ) : (
            <button
              className="bg-[#8B4513] text-white px-4 py-2 rounded-md cursor-pointer flex items-center"
              onClick={handleConnectWallet}
              disabled={isConnecting}
            >
              {isConnecting ? (
                <>
                  <svg
                    className="animate-spin -ml-1 mr-2 h-4 w-4 text-white"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                  >
                    <circle
                      className="opacity-25"
                      cx="12"
                      cy="12"
                      r="10"
                      stroke="currentColor"
                      strokeWidth="4"
                    ></circle>
                    <path
                      className="opacity-75"
                      fill="currentColor"
                      d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                    ></path>
                  </svg>
                  Connecting...
                </>
              ) : (
                "Connect Wallet"
              )}
            </button>
          )}
        </div>

        {/* Mobile Menu Button */}
        <button className="md:hidden z-20 ml-auto" onClick={() => setIsMenuOpen(!isMenuOpen)}>
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            {isMenuOpen ? (
              <path
                d="M6 18L18 6M6 6L18 18"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            ) : (
              <path
                d="M4 6H20M4 12H20M4 18H20"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            )}
          </svg>
        </button>

        {/* Mobile Navigation */}
        <div
          className={`
          fixed md:hidden top-0 left-0 w-full h-auto bg-white shadow-lg
          transform transition-transform duration-300 ease-in-out z-10
          ${isMenuOpen ? "translate-y-0" : "-translate-y-full"}
        `}
        >
          <nav className="flex flex-col items-center py-16 gap-6">
            <a href="#" className="text-gray-600">
              About us
            </a>
            <a href="#" className="text-gray-600">
              Services
            </a>
            <a href="#" className="text-gray-600">
              Contact us
            </a>
            {/* Connect Wallet Button - Mobile */}
            {walletAddress ? (
              <div className="flex flex-col items-center gap-2">
                <span className="text-gray-700">{formatAddress(walletAddress)}</span>
                <button
                  className="bg-gray-200 text-gray-700 px-3 py-1 rounded-md text-sm cursor-pointer"
                  onClick={handleDisconnectWallet}
                >
                  Disconnect
                </button>
              </div>
            ) : (
              <button
                className="bg-[#8B4513] text-white px-4 py-2 rounded-md mt-4 cursor-pointer flex items-center"
                onClick={handleConnectWallet}
                disabled={isConnecting}
              >
                {isConnecting ? (
                  <>
                    <svg
                      className="animate-spin -ml-1 mr-2 h-4 w-4 text-white"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                    >
                      <circle
                        className="opacity-25"
                        cx="12"
                        cy="12"
                        r="10"
                        stroke="currentColor"
                        strokeWidth="4"
                      ></circle>
                      <path
                        className="opacity-75"
                        fill="currentColor"
                        d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                      ></path>
                    </svg>
                    Connecting...
                  </>
                ) : (
                  "Connect Wallet"
                )}
              </button>
            )}
          </nav>
        </div>
      </header>

      {/* Error Message */}
      {error && (
        <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded relative max-w-md mx-auto mt-4">
          <span className="block sm:inline">{error}</span>
        </div>
      )}

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-4 py-12">
        <h1 className="text-4xl font-bold text-center text-[#4A3121] mb-12">Welcome</h1>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Pitch Your Home Idea Card */}
          <div className="bg-[#E6F3F7] p-6 rounded-lg">
            <h2 className="text-xl font-semibold mb-4">Pitch your home Idea</h2>
            <p className="text-gray-600 mb-6">
              Post your home project, share your housing idea with the NestNet community, including location details,
              estimated funding needed, timeline and goals with project progress so far.
            </p>
            <div className="flex justify-end">
              <button className="bg-[#8B4513] text-white px-6 py-2 rounded-md cursor-pointer">Continue</button>
            </div>
          </div>

          {/* Invest in a Property Card */}
          <div className="bg-[#F3E6F7] p-6 rounded-lg">
            <h2 className="text-xl font-semibold mb-4">Invest in a property</h2>
            <p className="text-gray-600 mb-6">
              Support real world housing projects and earn returns, invest in a home on NestNet to co-own/own based
              ownership shares.
            </p>
            <div className="flex justify-end">
              <button className="bg-[#8B4513] text-white px-6 py-2 rounded-md cursor-pointer">Continue</button>
            </div>
          </div>
        </div>

        {/* Property Grid */}
        <div className="mt-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {[1, 2, 3, 4, 5, 6, 7, 8].map((item) => (
            <div key={item} className="rounded-lg overflow-hidden shadow-md">
              <div className="relative h-48 w-full">
                <Image src={`/property-${item}.svg`} alt={`Vacation Home ${item}`} fill className="object-contain" />
              </div>
              <div className="p-4">
                <h3 className="font-semibold mb-2">Vacation Home by William Davies</h3>
                <p className="text-sm text-gray-600 mb-4">Lorem ipsum dolor sit amet, consectetur adipiscing elit</p>
                <div className="w-full bg-gray-200 rounded-full h-2">
                  <div className="bg-[#8B4513] h-2 rounded-full" style={{ width: "60%" }}></div>
                </div>
                <p className="text-sm text-gray-600 mt-1">60% complete</p>
              </div>
            </div>
          ))}
        </div>
      </main>
      <footer className="w-full px-4 py-18 bg-[#D5C9BF] mt-16"></footer>
    </div>
  )
}
