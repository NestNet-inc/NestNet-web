"use client";
import Image from "next/image";
import { useState } from "react";

export default function Home() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="relative flex justify-between items-center px-6 py-4">
        <div className="flex items-center gap-12">
          <Image
            src="/nestnet-logo.svg"
            alt="NestNet Logo"
            width={64}
            height={64}
          />
          {/* Desktop Navigation */}
          <nav className="hidden md:flex gap-6">
            <a href="#" className="text-gray-600">About us</a>
            <a href="#" className="text-gray-600">Services</a>
            <a href="#" className="text-gray-600">Contact us</a>
          </nav>
        </div>

        {/* Connect Wallet Button - Desktop Only */}
        <div className="hidden md:block">
          <button className="bg-[#8B4513] text-white px-4 py-2 rounded-md cursor-pointer">
            Connect Wallet
          </button>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden z-20 ml-auto"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
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
        <div className={`
          fixed md:hidden top-0 left-0 w-full h-auto bg-white shadow-lg
          transform transition-transform duration-300 ease-in-out z-10
          ${isMenuOpen ? 'translate-y-0' : '-translate-y-full'}
        `}>
          <nav className="flex flex-col items-center py-16 gap-6">
            <a href="#" className="text-gray-600">About us</a>
            <a href="#" className="text-gray-600">Services</a>
            <a href="#" className="text-gray-600">Contact us</a>
            {/* Connect Wallet Button - Mobile */}
            <button className="bg-[#8B4513] text-white px-4 py-2 rounded-md mt-4 cursor-pointer">
              Connect Wallet
            </button>
          </nav>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-4 py-12">
        <h1 className="text-4xl font-bold text-center text-[#4A3121] mb-12">
          Welcome
        </h1>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Pitch Your Home Idea Card */}
          {/* Pitch Your Home Idea Card */}
          <div className="bg-[#E6F3F7] p-6 rounded-lg">
            <h2 className="text-xl font-semibold mb-4">Pitch your home Idea</h2>
            <p className="text-gray-600 mb-6">
              Post your home project, share your housing idea with the NestNet community,
              including location details, estimated funding needed, timeline and goals with
              project progress so far.
            </p>
            <div className="flex justify-end">
              <button className="bg-[#8B4513] text-white px-6 py-2 rounded-md cursor-pointer">
                Continue
              </button>
            </div>
          </div>

          {/* Invest in a Property Card */}
          <div className="bg-[#F3E6F7] p-6 rounded-lg">
            <h2 className="text-xl font-semibold mb-4">Invest in a property</h2>
            <p className="text-gray-600 mb-6">
              Support real world housing projects and earn returns, invest in a home on
              NestNet to co-own/own based ownership shares.
            </p>
            <div className="flex justify-end">
              <button className="bg-[#8B4513] text-white px-6 py-2 rounded-md cursor-pointer">
                Continue
              </button>
            </div>
          </div>
        </div>

        {/* Property Grid */}
        <div className="mt-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {[1, 2, 3, 4, 5, 6, 7, 8].map((item) => (
            <div key={item} className="rounded-lg overflow-hidden shadow-md">
              <div className="relative h-48 w-full">
                <Image
                  src={`/property-${item}.svg`}
                  alt={`Vacation Home ${item}`}
                  fill
                  className="object-contain"
                />
              </div>
              <div className="p-4">
                <h3 className="font-semibold mb-2">Vacation Home by William Davies</h3>
                <p className="text-sm text-gray-600 mb-4">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit
                </p>
                <div className="w-full bg-gray-200 rounded-full h-2">
                  <div className="bg-[#8B4513] h-2 rounded-full" style={{ width: '60%' }}></div>
                </div>
                <p className="text-sm text-gray-600 mt-1">60% complete</p>
              </div>
            </div>
          ))}
        </div>
      </main>
      <footer className="w-full px-4 py-18 bg-[#D5C9BF] mt-16"></footer>    </div>
  );
}