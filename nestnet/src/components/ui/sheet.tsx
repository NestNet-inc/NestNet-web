"use client";

import React, { useState } from "react";

interface SheetContextType {
  isOpen: boolean;
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

const SheetContext = React.createContext<SheetContextType | undefined>(undefined);

export function Sheet({ children }: { children: React.ReactNode }) {
  const [isOpen, setIsOpen] = useState(false);
  
  return (
    <SheetContext.Provider value={{ isOpen, setIsOpen }}>
      {children}
    </SheetContext.Provider>
  );
}

export function SheetTrigger({ asChild, className, children }: { asChild?: boolean; className?: string; children: React.ReactNode }) {
  const context = React.useContext(SheetContext);
  
  if (!context) {
    throw new Error("SheetTrigger must be used within a Sheet");
  }
  
  const { setIsOpen } = context;
  
  return (
    <div className={className} onClick={() => setIsOpen(true)}>
      {children}
    </div>
  );
}

export function SheetContent({ side = "right", children }: { side?: "left" | "right"; children: React.ReactNode }) {
  const context = React.useContext(SheetContext);
  
  if (!context) {
    throw new Error("SheetContent must be used within a Sheet");
  }
  
  const { isOpen, setIsOpen } = context;
  
  if (!isOpen) return null;
  
  const sideStyles = {
    right: "right-0",
    left: "left-0",
  };
  
  return (
    <>
      <div className="fixed inset-0 bg-black/50 z-40" onClick={() => setIsOpen(false)} />
      <div className={`fixed ${sideStyles[side]} top-0 h-full w-64 bg-white p-4 shadow-lg z-50`}>
        <button className="absolute top-4 right-4" onClick={() => setIsOpen(false)}>
          ✕
        </button>
        {children}
      </div>
    </>
  );
}