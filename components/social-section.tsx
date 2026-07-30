'use client'

import Image from 'next/image'
import { motion } from 'framer-motion'

// Custom SVGs for Social Icons
function TwitterIcon({ className = 'w-6 h-6' }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className}>
      <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
    </svg>
  )
}

function TelegramIcon({ className = 'w-6 h-6' }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className}>
      <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm4.64 6.8c-.15 1.58-.8 5.42-1.13 7.19-.14.75-.42 1-.68 1.03-.58.05-1.02-.38-1.58-.75-.88-.58-1.38-.94-2.23-1.5-.99-.65-.35-1.01.22-1.59.15-.15 2.71-2.48 2.76-2.69.01-.03.01-.14-.07-.2-.08-.06-.19-.04-.27-.02-.12.02-1.96 1.25-5.54 3.69-.52.36-1 .54-1.43.53-.47-.01-1.38-.27-2.05-.49-.83-.27-1.49-.42-1.43-.89.03-.25.38-.51 1.07-.78 4.2-1.83 7-3.04 8.4-3.63 4-.17 4.84 2.19 4.64 3.03z" />
    </svg>
  )
}

export function SocialSection() {
  return (
    <section className="relative w-full py-6 sm:py-10 md:py-12 lg:py-16 px-4 sm:px-8 md:px-12 overflow-hidden selection:bg-[#EAA71B] selection:text-black">
      
      {/* DESKTOP BACKGROUND IMAGE from public/social-bg.png */}
      <div className="absolute inset-0 hidden md:block pointer-events-none z-0">
        <Image
          src="/social-bg.png"
          alt="MADCAT Social Community Background"
          fill
          priority
          className="object-cover object-center"
        />
      </div>

      {/* MOBILE BACKGROUND IMAGE from public/social-bg-mobile.png */}
      <div className="absolute inset-0 block md:hidden pointer-events-none z-0">
        <Image
          src="/social-bg-mobile.png"
          alt="MADCAT Social Mobile Background"
          fill
          priority
          className="object-cover object-center"
        />
      </div>

      {/* Main Container - Right side content aligned */}
      <div className="relative z-10 max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-end">
        
        {/* CONTENT COLUMN: Graphic Text Centered + 3 Large CTA Buttons Centered Horizontally */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          className="flex flex-col items-center text-center gap-6 sm:gap-8 max-w-xl lg:max-w-2xl z-20 w-full ml-auto"
        >
          {/* Main Title Graphic Image from public/soxcial-tetx.png - Centered */}
          <div className="relative w-full max-w-[340px] sm:max-w-[460px] md:max-w-[560px] lg:max-w-[640px] xl:max-w-[700px] flex justify-center">
            <Image
              src="/soxcial-tetx.png"
              alt="JOIN THE PACK. BE THE FURY."
              width={700}
              height={300}
              priority
              className="w-full h-auto object-contain hover:scale-102 transition-transform duration-300"
            />
          </div>

          {/* 3 Large CTA Buttons Wrapper - Centered Horizontally */}
          <div className="flex flex-col items-center gap-4 sm:gap-5 w-full max-w-[320px] sm:max-w-[400px] md:max-w-[460px] mx-auto">
            
            {/* Button 1: JOIN TELEGRAM */}
            <motion.a
              href="https://t.me"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.98 }}
              className="w-full flex items-center justify-center gap-3 sm:gap-4 px-6 sm:px-8 py-3.5 sm:py-4.5 rounded-2xl bg-black border-2 border-white text-white font-basic font-black text-base sm:text-lg md:text-xl uppercase tracking-widest shadow-[0_12px_28px_rgba(0,0,0,0.95)] hover:bg-zinc-950 hover:border-[#F7B000] hover:text-[#F7B000] hover:shadow-[0_0_25px_rgba(247,176,0,0.4)] transition-all duration-300 group cursor-pointer"
            >
              <TelegramIcon className="w-6 h-6 sm:w-7 sm:h-7 text-white group-hover:text-[#F7B000] group-hover:scale-110 transition-all" />
              <span>JOIN TELEGRAM</span>
              <TelegramIcon className="w-6 h-6 sm:w-7 sm:h-7 text-white group-hover:text-[#F7B000] group-hover:scale-110 transition-all" />
            </motion.a>

            {/* Button 2: TWITTER / X */}
            <motion.a
              href="https://twitter.com"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.98 }}
              className="w-full flex items-center justify-center gap-3 sm:gap-4 px-6 sm:px-8 py-3.5 sm:py-4.5 rounded-2xl bg-black border-2 border-white text-white font-basic font-black text-base sm:text-lg md:text-xl uppercase tracking-widest shadow-[0_12px_28px_rgba(0,0,0,0.95)] hover:bg-zinc-950 hover:border-white hover:shadow-[0_0_25px_rgba(255,255,255,0.4)] transition-all duration-300 group cursor-pointer"
            >
              <TwitterIcon className="w-6 h-6 sm:w-7 sm:h-7 text-white group-hover:scale-110 transition-transform" />
              <span>TWITTER / X</span>
              <TwitterIcon className="w-6 h-6 sm:w-7 sm:h-7 text-white group-hover:scale-110 transition-transform" />
            </motion.a>

            {/* Button 3: BUY NOW */}
            <motion.a
              href="https://raydium.io"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.98 }}
              className="w-full flex items-center justify-center gap-3 sm:gap-4 px-6 sm:px-8 py-3.5 sm:py-4.5 rounded-2xl bg-black border-2 border-[#E52E2E] text-white font-basic font-black text-base sm:text-lg md:text-xl uppercase tracking-widest shadow-[0_12px_28px_rgba(0,0,0,0.95)] hover:bg-zinc-950 hover:border-red-500 hover:text-red-400 hover:shadow-[0_0_25px_rgba(229,46,46,0.5)] transition-all duration-300 group cursor-pointer"
            >
              <div className="w-6 h-6 sm:w-7 sm:h-7 flex items-center justify-center">
                <Image
                  src="/Solana-Crypto-Logo-Transparent.png"
                  alt="Solana Logo"
                  width={24}
                  height={24}
                  className="w-full h-full object-contain filter invert group-hover:scale-110 transition-transform"
                />
              </div>
              <span>BUY NOW</span>
              <div className="w-6 h-6 sm:w-7 sm:h-7 flex items-center justify-center">
                <Image
                  src="/Solana-Crypto-Logo-Transparent.png"
                  alt="Solana Logo"
                  width={24}
                  height={24}
                  className="w-full h-full object-contain filter invert group-hover:scale-110 transition-transform"
                />
              </div>
            </motion.a>

          </div>

        </motion.div>

      </div>

    </section>
  )
}
