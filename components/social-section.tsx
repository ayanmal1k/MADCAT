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
    <section className="relative w-full min-h-[580px] sm:min-h-[660px] md:min-h-0 pt-36 sm:pt-44 md:pt-14 pb-8 sm:pb-12 md:pb-16 px-4 sm:px-8 md:px-12 flex flex-col justify-end overflow-hidden selection:bg-[#EAA71B] selection:text-black">
      
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

      {/* MOBILE BACKGROUND IMAGE from public/social-bg-mobile.png (Cat at Top) */}
      <div className="absolute inset-0 block md:hidden pointer-events-none z-0">
        <Image
          src="/social-bg-mobile.png"
          alt="MADCAT Social Mobile Background"
          fill
          priority
          className="object-cover object-top"
        />
      </div>

      {/* Main Container - Right side content aligned, bottom pushed on mobile */}
      <div className="relative z-10 max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-end w-full mt-auto">
        
        {/* CONTENT COLUMN: Graphic Text Centered + 3 Large CTA Buttons Centered Horizontally */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, amount: 0.2 }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          className="flex flex-col items-center text-center gap-5 sm:gap-7 max-w-xl lg:max-w-2xl z-20 w-full ml-auto"
        >
          {/* Main Title Graphic Image from public/soxcial-tetx.png - Centered */}
          <div className="relative w-full max-w-[320px] sm:max-w-[440px] md:max-w-[560px] lg:max-w-[640px] xl:max-w-[700px] flex justify-center">
            <Image
              src="/soxcial-tetx.png"
              alt="JOIN THE PACK. BE THE FURY."
              width={700}
              height={300}
              priority
              className="w-full h-auto object-contain hover:scale-102 transition-transform duration-300"
            />
          </div>

          {/* CTA Buttons Wrapper - 2 in a row on mobile, 1 in a row on sm/md+ */}
          <div className="flex flex-col items-center gap-3 sm:gap-4.5 w-full max-w-[320px] sm:max-w-[400px] md:max-w-[460px] mx-auto">
            
            {/* Telegram & Twitter / X: 2 in a row on mobile, 1 in a row on sm+ */}
            <div className="grid grid-cols-2 sm:grid-cols-1 gap-2.5 sm:gap-4.5 w-full">
              
              {/* Telegram Button */}
              <motion.a
                href="https://t.me/+nkVhclURSUhhZjZh"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.04 }}
                whileTap={{ scale: 0.98 }}
                className="flex items-center justify-center gap-2 sm:gap-3 px-3 sm:px-8 py-3 sm:py-4 rounded-2xl bg-black border-2 border-white text-white font-basic font-black text-xs sm:text-base md:text-lg uppercase tracking-wider sm:tracking-widest shadow-[0_10px_24px_rgba(0,0,0,0.95)] hover:bg-zinc-950 hover:border-[#F7B000] hover:text-[#F7B000] hover:shadow-[0_0_20px_rgba(247,176,0,0.4)] transition-all duration-300 group cursor-pointer"
              >
                <TelegramIcon className="w-4 h-4 sm:w-6 sm:h-6 text-white group-hover:text-[#F7B000] group-hover:scale-110 transition-all flex-shrink-0" />
                <span className="truncate">JOIN TELEGRAM</span>
              </motion.a>

              {/* Twitter / X Button */}
              <motion.a
                href="https://x.com/madcat9505"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.04 }}
                whileTap={{ scale: 0.98 }}
                className="flex items-center justify-center gap-2 sm:gap-3 px-3 sm:px-8 py-3 sm:py-4 rounded-2xl bg-black border-2 border-white text-white font-basic font-black text-xs sm:text-base md:text-lg uppercase tracking-wider sm:tracking-widest shadow-[0_10px_24px_rgba(0,0,0,0.95)] hover:bg-zinc-950 hover:border-white hover:shadow-[0_0_20px_rgba(255,255,255,0.4)] transition-all duration-300 group cursor-pointer"
              >
                <TwitterIcon className="w-4 h-4 sm:w-6 sm:h-6 text-white group-hover:scale-110 transition-transform flex-shrink-0" />
                <span className="truncate">TWITTER / X</span>
              </motion.a>

            </div>

            {/* Bottom Row: BUY NOW Button (1 in a row) */}
            <motion.a
              href="https://pump.fun/coin/8a7hJjAFdYPadrgupNXskfsaeQNyeRTsBXeLLpSqpump"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.04 }}
              whileTap={{ scale: 0.98 }}
              className="w-full flex items-center justify-center gap-2.5 sm:gap-3 px-6 sm:px-8 py-3.5 sm:py-4 rounded-2xl bg-black border-2 border-[#E52E2E] text-white font-basic font-black text-sm sm:text-base md:text-lg uppercase tracking-widest shadow-[0_12px_28px_rgba(0,0,0,0.95)] hover:bg-zinc-950 hover:border-red-500 hover:text-red-400 hover:shadow-[0_0_25px_rgba(229,46,46,0.5)] transition-all duration-300 group cursor-pointer"
            >
              <div className="w-5 h-5 sm:w-6 sm:h-6 flex items-center justify-center flex-shrink-0">
                <Image
                  src="/Solana-Crypto-Logo-Transparent.png"
                  alt="Solana Logo"
                  width={24}
                  height={24}
                  className="w-full h-full object-contain filter invert group-hover:scale-110 transition-transform"
                />
              </div>
              <span>BUY NOW</span>
            </motion.a>

          </div>

        </motion.div>

      </div>

    </section>
  )
}
