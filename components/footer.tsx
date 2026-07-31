'use client'

import Image from 'next/image'
import { motion } from 'framer-motion'

// Custom SVGs for Social Buttons
function TwitterIcon({ className = 'w-5 h-5' }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className}>
      <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
    </svg>
  )
}

function TelegramIcon({ className = 'w-5 h-5' }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className}>
      <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm4.64 6.8c-.15 1.58-.8 5.42-1.13 7.19-.14.75-.42 1-.68 1.03-.58.05-1.02-.38-1.58-.75-.88-.58-1.38-.94-2.23-1.5-.99-.65-.35-1.01.22-1.59.15-.15 2.71-2.48 2.76-2.69.01-.03.01-.14-.07-.2-.08-.06-.19-.04-.27-.02-.12.02-1.96 1.25-5.54 3.69-.52.36-1 .54-1.43.53-.47-.01-1.38-.27-2.05-.49-.83-.27-1.49-.42-1.43-.89.03-.25.38-.51 1.07-.78 4.2-1.83 7-3.04 8.4-3.63 4-.17 4.84 2.19 4.64 3.03z" />
    </svg>
  )
}

export function Footer() {
  const navLinks = [
    { name: 'HOME', href: '#' },
    { name: 'ABOUT', href: '#about' },
    { name: 'TOKENOMICS', href: '#tokenomics' },
    { name: 'ROADMAP', href: '#roadmap' },
    { name: 'COMMUNITY', href: '#community' },
  ]

  return (
    <footer className="relative w-full bg-black text-white pt-16 sm:pt-20 pb-8 px-4 sm:px-8 md:px-12 border-t-2 border-zinc-800 overflow-hidden selection:bg-[#EAA71B] selection:text-black">

      {/* Background Radial Subtle Glow */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-red-600/10 rounded-full blur-[140px] pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto flex flex-col gap-12 sm:gap-16">

        {/* TOP MAIN ROW: 3 COLUMNS (Left: Logo/Text, Middle: Cat Image, Right: Socials & Nav Column) */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 md:gap-8 items-center text-center md:text-left">

          {/* LEFT COLUMN: Logo + Logo Text */}
          <div className="flex flex-col items-center md:items-start gap-4">
            <div className="flex items-center gap-3">
              <div className="relative w-14 h-14 sm:w-16 sm:h-16 rounded-full overflow-hidden border-2 border-[#EAA71B] shadow-[0_0_15px_rgba(234,167,27,0.4)]">
                <Image
                  src="/logo.jpeg"
                  alt="MADCAT Logo"
                  fill
                  priority
                  className="object-cover"
                />
              </div>

              <div className="w-36 sm:w-44 h-auto relative">
                <Image
                  src="/text-logo.png"
                  alt="MADCAT"
                  width={180}
                  height={50}
                  priority
                  className="w-full h-auto object-contain filter drop-shadow-[0_2px_8px_rgba(0,0,0,0.8)]"
                />
              </div>
            </div>

            <p className="font-basic text-gray-400 text-sm max-w-xs leading-relaxed">
              The fiercest meme movement on Solana. Built for the pack, loyal to the community.
            </p>
          </div>

          {/* MIDDLE COLUMN: Cat Image centered */}
          <div className="flex justify-center items-center">
            <motion.div
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.3 }}
              className="relative w-56 h-56 sm:w-72 sm:h-72 md:w-80 md:h-80 lg:w-96 lg:h-96 -my-2 sm:-my-4 lg:-my-6"
            >
              <Image
                src="/cat.png"
                alt="MADCAT Mascot Footer"
                fill
                priority
                className="object-contain filter drop-shadow-[0_15px_35px_rgba(234,167,27,0.3)]"
              />
            </motion.div>
          </div>

          {/* RIGHT COLUMN: 3 Circular Buttons + Columned Nav Links */}
          <div className="flex flex-col items-center md:items-end gap-6 w-full">

            {/* 3 Circular Social Buttons */}
            <div className="relative z-20 flex items-center justify-center md:justify-end gap-3.5 sm:gap-4 w-full">

              {/* Telegram Button */}
              <motion.a
                href="https://t.me/+nkVhclURSUhhZjZh"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.12, y: -3 }}
                whileTap={{ scale: 0.92 }}
                className="w-12 h-12 rounded-full bg-zinc-900 border-2 border-zinc-700 flex items-center justify-center text-white shadow-lg hover:border-[#EAA71B] hover:text-[#EAA71B] hover:bg-black hover:shadow-[0_0_15px_rgba(234,167,27,0.4)] transition-all flex-shrink-0"
                title="Telegram"
              >
                <TelegramIcon className="w-5 h-5" />
              </motion.a>

              {/* Twitter / X Button */}
              <motion.a
                href="https://x.com/madcat9505"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.12, y: -3 }}
                whileTap={{ scale: 0.92 }}
                className="w-12 h-12 rounded-full bg-zinc-900 border-2 border-zinc-700 flex items-center justify-center text-white shadow-lg hover:border-white hover:bg-black hover:shadow-[0_0_15px_rgba(255,255,255,0.4)] transition-all flex-shrink-0"
                title="Twitter / X"
              >
                <TwitterIcon className="w-5 h-5" />
              </motion.a>

              {/* DexScreener / Solana Button */}
              <motion.a
                href="https://pump.fun/coin/8a7hJjAFdYPadrgupNXskfsaeQNyeRTsBXeLLpSqpump"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.12, y: -3 }}
                whileTap={{ scale: 0.92 }}
                className="w-12 h-12 rounded-full bg-zinc-900 border-2 border-zinc-700 flex items-center justify-center p-3 text-white shadow-lg hover:border-red-500 hover:bg-black hover:shadow-[0_0_15px_rgba(229,46,46,0.4)] transition-all flex-shrink-0"
                title="Solana / DexScreener"
              >
                <Image
                  src="/Solana-Crypto-Logo-Transparent.png"
                  alt="Solana Logo"
                  width={24}
                  height={24}
                  className="w-full h-full object-contain filter invert"
                />
              </motion.a>

            </div>

            {/* Columned Navigation Links */}
            <div className="relative z-10 mt-2">
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 pointer-events-none z-0 w-48 h-48 sm:w-56 sm:h-56 md:w-64 md:h-64 opacity-40 md:translate-x-[-20%]">
                <Image
                  src="/paw.png"
                  alt="Paw Background"
                  fill
                  className="object-contain"
                />
              </div>
              <nav className="relative z-10 flex flex-col items-center md:items-end gap-2 font-basic text-sm font-bold tracking-wider">
                {navLinks.map((link) => (
                  <a
                    key={link.name}
                    href={link.href}
                    className="text-gray-300 hover:text-[#EAA71B] transition-colors uppercase"
                  >
                    {link.name}
                  </a>
                ))}
              </nav>
            </div>

          </div>

        </div>

        {/* BOTTOM COPYRIGHT BAR */}
        <div className="pt-6 border-t border-zinc-900 flex flex-col sm:flex-row items-center justify-between gap-4 font-basic text-xs text-gray-500 text-center sm:text-left">
          <p>© {new Date().getFullYear()} MADCAT. All Rights Reserved.</p>
          <p>MADCAT is a meme coin created for entertainment purposes only.</p>
        </div>

      </div>

    </footer>
  )
}
