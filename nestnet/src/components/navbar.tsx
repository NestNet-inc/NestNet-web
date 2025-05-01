"use client"

import { useState } from "react"
import Image from "next/image"
import Link from "next/link"
import { Menu } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <header className="container mx-auto py-4 px-4 flex justify-between items-center">
        
      <div className="flex items-center gap-20">
        <Image src="/Nestnet logo.png" alt="NestNet Logo" width={55} height={55} />

             {/* Desktop Navigation */}
      <nav className="hidden md:flex items-center gap-8">
        <Link href="#" className="text-neutral-800 hover:text-amber-700 transition-colors">
          About us
        </Link>
        <Link href="#" className="text-neutral-800 hover:text-amber-700 transition-colors">
          Services
        </Link>
        <Link href="#" className="text-neutral-800 hover:text-amber-700 transition-colors">
          Contact us
        </Link>
      </nav>
      </div>


      <div className="hidden md:block">
        <Button className="bg-amber-800 hover:bg-amber-900 text-white">Connect Wallet</Button>
      </div>

      {/* Mobile Navigation */}
      <Sheet>
        <SheetTrigger asChild className="md:hidden">
          <Button variant="ghost" size="icon">
            <Menu className="h-6 w-6" />
            <span className="sr-only">Toggle menu</span>
          </Button>
        </SheetTrigger>
        <SheetContent side="right">
          <div className="flex flex-col gap-6 mt-8">
            <Link
              href="#"
              className="text-neutral-800 hover:text-amber-700 transition-colors text-lg"
              onClick={() => setIsOpen(false)}
            >
              About us
            </Link>
            <Link
              href="#"
              className="text-neutral-800 hover:text-amber-700 transition-colors text-lg"
              onClick={() => setIsOpen(false)}
            >
              Services
            </Link>
            <Link
              href="#"
              className="text-neutral-800 hover:text-amber-700 transition-colors text-lg"
              onClick={() => setIsOpen(false)}
            >
              Contact us
            </Link>
            <Button className="bg-amber-800 hover:bg-amber-900 text-white w-full mt-4">Connect Wallet</Button>
          </div>
        </SheetContent>
      </Sheet>
    </header>
  )
}
