'use client'

import Image from 'next/image'
import { motion } from 'framer-motion'

export function AboutSection() {
  return (
    <section className="relative w-full bg-black pt-12 sm:pt-20 md:pt-24 pb-12 sm:pb-20 md:pb-24 px-4 sm:px-8 md:px-12 lg:px-16 overflow-hidden selection:bg-[#E61C1C] selection:text-white">
      <div className="relative z-10 max-w-7xl mx-auto flex flex-col gap-0">
        
        {/* Top Section: Big About Cat Image + Story */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-14 items-end">
          
          {/* Left Column: Big Cat Image (Bottom paws attached to top of cards) */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-6 flex justify-center lg:justify-start items-end pb-0 mb-0 relative z-20"
          >
            <div className="relative w-full max-w-[480px] sm:max-w-[580px] md:max-w-[660px] lg:max-w-[760px] -mb-1 sm:-mb-2">
              <Image
                src="/about-cat.png"
                alt="About MADCAT"
                width={760}
                height={760}
                priority
                className="w-full h-auto object-contain object-bottom hover:scale-102 transition-transform duration-500"
              />
            </div>
          </motion.div>

          {/* Right Column: Heading & Text Story with Paw/Claw Image moved more to the left */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-6 flex flex-col gap-5 sm:gap-6 relative pb-6 sm:pb-8 lg:pb-12"
          >
            {/* Paw/Claw Image from public/ (paw.png) - Moved more to the left */}
            <div className="absolute right-12 sm:right-24 md:right-36 lg:right-44 -top-6 sm:-top-10 md:-top-12 w-44 sm:w-60 md:w-72 lg:w-80 h-44 sm:h-60 md:h-72 lg:h-80 opacity-40 md:opacity-60 pointer-events-none z-0">
              <Image
                src="/paw.png"
                alt="Claw Scratch Marks"
                fill
                priority
                className="object-contain"
              />
            </div>

            {/* About Heading Graphic Text Image from public/about-text.png */}
            <div className="w-full max-w-[240px] sm:max-w-[340px] md:max-w-[420px] lg:max-w-[460px] relative z-10">
              <Image
                src="/about-text.png"
                alt="About - Who is Madcat?"
                width={460}
                height={170}
                priority
                className="w-full h-auto object-contain filter drop-shadow-[0_8px_16px_rgba(0,0,0,0.9)]"
              />
            </div>

            {/* Story Paragraphs in Google Font Basic - Responsive Sizing */}
            <div className="text-gray-100 font-basic text-base sm:text-lg md:text-xl lg:text-2xl leading-relaxed space-y-2 sm:space-y-2.5 max-w-xl relative z-10">
              <p>MADCAT isn&apos;t just a meme.</p>
              <p>It&apos;s a movement.</p>
              <p>Tired of scams, lies, and rug pulls?</p>
              <p className="font-bold text-white pt-1">So is MADCAT.</p>
            </div>
          </motion.div>

        </div>

        {/* Bottom Section: 3 Interactive Feature Cards - Responsive for all breakpoints */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-6 lg:gap-8 pt-0 relative z-10">
          
          {/* Card 1: AGGRESSIVE BY NATURE */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            whileHover={{ y: -6, scale: 1.02 }}
            className="flex items-center gap-4 sm:gap-5 p-5 sm:p-6 lg:p-7 rounded-2xl bg-zinc-950/95 border border-zinc-800/80 hover:border-red-600/60 shadow-lg hover:shadow-[0_10px_30px_rgba(230,28,28,0.25)] transition-all duration-300 group cursor-pointer"
          >
            <div className="relative flex-shrink-0 w-14 h-14 sm:w-16 sm:h-16 lg:w-18 lg:h-18 rounded-full bg-red-950/60 border-2 border-red-600/80 flex items-center justify-center text-red-500 group-hover:scale-110 group-hover:bg-red-600 group-hover:text-white transition-all duration-300 shadow-[0_0_15px_rgba(230,28,28,0.4)]">
              {/* Paw Icon SVG */}
              <svg className="w-7 h-7 sm:w-8 sm:h-8 fill-current" viewBox="0 0 24 24">
                <path d="M12 14c-2.76 0-5 1.79-5 4 0 1.65 1.79 3 4 3s4-1.35 4-3c0-2.21-2.24-4-5-4zm-5.5-2.5c1.1 0 2-.9 2-2s-.9-2-2-2-2 .9-2 2 .9 2 2 2zm11 0c1.1 0 2-.9 2-2s-.9-2-2-2-2 .9-2 2 .9 2 2 2zm-8.5-3c1.1 0 2-.9 2-2s-.9-2-2-2-2 .9-2 2 .9 2 2 2zm6 0c1.1 0 2-.9 2-2s-.9-2-2-2-2 .9-2 2 .9 2 2 2z" />
              </svg>
            </div>
            <div className="flex flex-col font-basic">
              <h3 className="font-basic font-bold text-base sm:text-lg md:text-xl lg:text-2xl text-white group-hover:text-red-400 transition-colors uppercase tracking-wider">
                AGGRESSIVE
              </h3>
              <span className="font-basic font-bold text-xs sm:text-sm md:text-base lg:text-xl text-gray-300 uppercase tracking-wider">
                BY NATURE
              </span>
            </div>
          </motion.div>

          {/* Card 2: LOYAL TO THE COMMUNITY */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            whileHover={{ y: -6, scale: 1.02 }}
            className="flex items-center gap-4 sm:gap-5 p-5 sm:p-6 lg:p-7 rounded-2xl bg-zinc-950/95 border border-zinc-800/80 hover:border-amber-500/60 shadow-lg hover:shadow-[0_10px_30px_rgba(247,176,0,0.25)] transition-all duration-300 group cursor-pointer"
          >
            <div className="relative flex-shrink-0 w-14 h-14 sm:w-16 sm:h-16 lg:w-18 lg:h-18 rounded-full bg-amber-950/60 border-2 border-[#F7B000] flex items-center justify-center text-[#F7B000] group-hover:scale-110 group-hover:bg-[#F7B000] group-hover:text-black transition-all duration-300 shadow-[0_0_15px_rgba(247,176,0,0.4)]">
              {/* Shield Icon SVG with Claw Mark */}
              <svg className="w-7 h-7 sm:w-8 sm:h-8 fill-current" viewBox="0 0 24 24">
                <path d="M12 1L3 5v6c0 5.55 3.84 10.74 9 12 5.16-1.26 9-6.45 9-12V5l-9-4zm-1 14l-4-4 1.41-1.41L11 12.17l6.59-6.59L19 7l-8 8z" />
              </svg>
            </div>
            <div className="flex flex-col font-basic">
              <h3 className="font-basic font-bold text-base sm:text-lg md:text-xl lg:text-2xl text-white group-hover:text-[#F7B000] transition-colors uppercase tracking-wider">
                LOYAL TO
              </h3>
              <span className="font-basic font-bold text-xs sm:text-sm md:text-base lg:text-xl text-gray-300 uppercase tracking-wider">
                THE COMMUNITY
              </span>
            </div>
          </motion.div>

          {/* Card 3: BUILT TO DOMINATE */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
            whileHover={{ y: -6, scale: 1.02 }}
            className="flex items-center gap-4 sm:gap-5 p-5 sm:p-6 lg:p-7 rounded-2xl bg-zinc-950/95 border border-zinc-800/80 hover:border-orange-600/60 shadow-lg hover:shadow-[0_10px_30px_rgba(234,88,12,0.25)] transition-all duration-300 group cursor-pointer"
          >
            <div className="relative flex-shrink-0 w-14 h-14 sm:w-16 sm:h-16 lg:w-18 lg:h-18 rounded-full bg-orange-950/60 border-2 border-orange-500 flex items-center justify-center text-orange-500 group-hover:scale-110 group-hover:bg-orange-500 group-hover:text-white transition-all duration-300 shadow-[0_0_15px_rgba(234,88,12,0.4)]">
              {/* Flame/Fire Icon SVG */}
              <svg className="w-7 h-7 sm:w-8 sm:h-8 fill-current" viewBox="0 0 24 24">
                <path d="M13.5 1.5c.41 0 .75.34.75.75 0 2.59 1.56 4.7 3.65 5.86.37.21.49.69.28 1.06-.21.37-.69.49-1.06.28-2.61-1.45-4.62-4.14-4.62-7.2 0-.41.34-.75.75-.75zM12 23c-4.97 0-9-4.03-9-9 0-3.53 2.04-6.58 5-8.05.34-.17.75.04.82.41.45 2.37 2.12 3.64 3.18 4.64.6.57 1 1.25 1 2 0 1.1-.9 2-2 2s-2-.9-2-2c0-.55-.45-1-1-1s-1 .45-1 1c0 2.21 1.79 4 4 4s4-1.79 4-4c0-.55-.45-1-1-1s-1 .45-1 1c0 1.1-.9 2-2 2s-2-.9-2-2c0-.75.4-1.43 1-2 1.06-1 2.73-2.27 3.18-4.64.07-.37.48-.58.82-.41 2.96 1.47 5 4.52 5 8.05 0 4.97-4.03 9-9 9z" />
              </svg>
            </div>
            <div className="flex flex-col font-basic">
              <h3 className="font-basic font-bold text-base sm:text-lg md:text-xl lg:text-2xl text-white group-hover:text-orange-400 transition-colors uppercase tracking-wider">
                BUILT TO
              </h3>
              <span className="font-basic font-bold text-xs sm:text-sm md:text-base lg:text-xl text-gray-300 uppercase tracking-wider">
                DOMINATE
              </span>
            </div>
          </motion.div>

        </div>

      </div>
    </section>
  )
}
