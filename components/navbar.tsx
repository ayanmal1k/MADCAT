'use client'

import { useState, useEffect } from 'react'
import Image from 'next/image'
import { motion, AnimatePresence } from 'framer-motion'
import { Menu, X } from 'lucide-react'

const NAV_LINKS = [
  { name: 'Home', href: '#', active: true },
  { name: 'About', href: '#about' },
  { name: 'Tokenomics', href: '#tokenomics' },
  { name: 'Roadmap', href: '#roadmap' },
  { name: 'Community', href: '#social' },
]

export function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setScrolled(true)
      } else {
        setScrolled(false)
      }
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <header className="relative w-full bg-black border-b border-zinc-900/90 py-3.5 sm:py-4.5 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-8 lg:px-12 flex items-center justify-between">
        
        {/* LEFT: Face Image + $MADCAT Name Text Logo */}
        <a href="#" className="flex items-center gap-2.5 sm:gap-3 group">
          <div className="relative w-9 h-9 sm:w-11 sm:h-11 rounded-full overflow-hidden flex-shrink-0 group-hover:scale-105 transition-transform duration-300">
            <Image
              src="/face.png"
              alt="MADCAT Face"
              width={44}
              height={44}
              priority
              className="w-full h-full object-contain filter drop-shadow-[0_2px_8px_rgba(234,167,27,0.4)]"
            />
          </div>

          <div className="relative w-28 sm:w-36 md:w-40 h-auto">
            <Image
              src="/text-logo.png"
              alt="$MADCAT"
              width={160}
              height={50}
              priority
              className="w-full h-auto object-contain filter drop-shadow-[0_2px_8px_rgba(0,0,0,0.9)]"
            />
          </div>
        </a>

        {/* RIGHT (Desktop): Nav Links + Red BUY $MADCAT Button */}
        <div className="hidden md:flex items-center gap-6 lg:gap-8 font-basic">
          
          {/* Navigation Links */}
          <nav className="flex items-center gap-5 lg:gap-7 font-bold text-sm lg:text-base tracking-wide">
            {NAV_LINKS.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className={`transition-colors duration-200 ${
                  link.active
                    ? 'text-[#F7B000] font-black'
                    : 'text-gray-200 hover:text-[#F7B000]'
                }`}
              >
                {link.name}
              </a>
            ))}
          </nav>

          {/* Red BUY $MADCAT Button */}
          <motion.a
            href="https://raydium.io"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="px-5 py-2.5 sm:px-6 sm:py-3 rounded-xl bg-gradient-to-r from-red-600 via-red-650 to-red-700 hover:from-red-500 hover:to-red-600 text-white font-basic font-black text-xs sm:text-sm uppercase tracking-wider shadow-[0_4px_16px_rgba(220,38,38,0.5)] border border-red-500/80 transition-all duration-300"
          >
            BUY $MADCAT
          </motion.a>

        </div>

        {/* Mobile Hamburger Toggle Button */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="md:hidden p-2 rounded-lg text-white hover:bg-zinc-900 transition-colors z-50"
          aria-label="Toggle Menu"
        >
          {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>

      </div>

      {/* Mobile Drawer Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="md:hidden bg-black/95 border-b border-zinc-800 px-6 py-6 flex flex-col gap-5 text-center font-basic"
          >
            {NAV_LINKS.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className={`font-bold text-base tracking-wider ${
                  link.active ? 'text-[#F7B000]' : 'text-gray-200'
                }`}
              >
                {link.name}
              </a>
            ))}

            <a
              href="https://raydium.io"
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => setMobileMenuOpen(false)}
              className="mt-2 w-full py-3.5 rounded-xl bg-red-600 text-white font-black text-sm uppercase tracking-wider shadow-lg shadow-red-900/50 text-center inline-block"
            >
              BUY $MADCAT
            </a>
          </motion.div>
        )}
      </AnimatePresence>

    </header>
  )
}
