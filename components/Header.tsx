"use client";

import { useState } from "react";

export default function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 border-b border-dark-600 bg-dark-900/80 backdrop-blur-md">
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-4 py-4 sm:px-6 lg:px-8">
        <a href="/" className="flex items-center gap-2">
          <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-primary-500">
            <svg className="h-5 w-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
            </svg>
          </div>
          <span className="text-lg font-bold text-white">
            GrowMaster <span className="text-primary-400">AI Legal</span>
          </span>
        </a>

        {/* Desktop Nav */}
        <div className="hidden items-center gap-8 md:flex">
          <a href="#features" className="text-sm font-medium text-gray-300 transition hover:text-primary-400">
            Features
          </a>
          <a href="#pricing" className="text-sm font-medium text-gray-300 transition hover:text-primary-400">
            Preise
          </a>
          <a href="#faq" className="text-sm font-medium text-gray-300 transition hover:text-primary-400">
            FAQ
          </a>
          <a href="#pricing" className="btn-primary !px-4 !py-2 text-sm">
            Jetzt starten
          </a>
        </div>

        {/* Mobile Toggle */}
        <button
          className="md:hidden text-gray-300"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label="Menu"
        >
          <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            {mobileOpen ? (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            )}
          </svg>
        </button>
      </nav>

      {/* Mobile Nav */}
      {mobileOpen && (
        <div className="border-t border-dark-600 bg-dark-900 px-4 py-4 md:hidden">
          <div className="flex flex-col gap-4">
            <a href="#features" className="text-sm font-medium text-gray-300" onClick={() => setMobileOpen(false)}>
              Features
            </a>
            <a href="#pricing" className="text-sm font-medium text-gray-300" onClick={() => setMobileOpen(false)}>
              Preise
            </a>
            <a href="#faq" className="text-sm font-medium text-gray-300" onClick={() => setMobileOpen(false)}>
              FAQ
            </a>
            <a href="#pricing" className="btn-primary !px-4 !py-2 text-sm" onClick={() => setMobileOpen(false)}>
              Jetzt starten
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
