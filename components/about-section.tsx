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
            viewport={{ once: false, amount: 0.2 }}
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
            viewport={{ once: false, amount: 0.2 }}
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
            viewport={{ once: false, amount: 0.2 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            whileHover={{ y: -6, scale: 1.02 }}
            className="flex items-center gap-4 sm:gap-5 p-5 sm:p-6 lg:p-7 rounded-2xl bg-zinc-950/95 border border-zinc-800/80 hover:border-red-600/60 shadow-lg hover:shadow-[0_10px_30px_rgba(230,28,28,0.25)] transition-all duration-300 group cursor-pointer"
          >
            <div className="relative flex-shrink-0 w-14 h-14 sm:w-16 sm:h-16 lg:w-18 lg:h-18 rounded-full bg-red-950/60 border-2 border-red-600/80 flex items-center justify-center p-1.5 overflow-hidden group-hover:scale-110 group-hover:bg-red-600/40 transition-all duration-300 shadow-[0_0_15px_rgba(230,28,28,0.4)]">
              <Image
                src="/about-1-removebg-preview.png"
                alt="Aggressive By Nature Icon"
                width={72}
                height={72}
                className="w-full h-full object-contain filter drop-shadow-[0_2px_8px_rgba(0,0,0,0.8)]"
              />
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
            viewport={{ once: false, amount: 0.2 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            whileHover={{ y: -6, scale: 1.02 }}
            className="flex items-center gap-4 sm:gap-5 p-5 sm:p-6 lg:p-7 rounded-2xl bg-zinc-950/95 border border-zinc-800/80 hover:border-amber-500/60 shadow-lg hover:shadow-[0_10px_30px_rgba(247,176,0,0.25)] transition-all duration-300 group cursor-pointer"
          >
            <div className="relative flex-shrink-0 w-14 h-14 sm:w-16 sm:h-16 lg:w-18 lg:h-18 rounded-full bg-amber-950/60 border-2 border-[#F7B000] flex items-center justify-center p-1.5 overflow-hidden group-hover:scale-110 group-hover:bg-[#F7B000]/40 transition-all duration-300 shadow-[0_0_15px_rgba(247,176,0,0.4)]">
              <Image
                src="/about-2-removebg-preview.png"
                alt="Loyal To The Community Icon"
                width={72}
                height={72}
                className="w-full h-full object-contain filter drop-shadow-[0_2px_8px_rgba(0,0,0,0.8)]"
              />
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
            viewport={{ once: false, amount: 0.2 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            whileHover={{ y: -6, scale: 1.02 }}
            className="flex items-center gap-4 sm:gap-5 p-5 sm:p-6 lg:p-7 rounded-2xl bg-zinc-950/95 border border-zinc-800/80 hover:border-orange-600/60 shadow-lg hover:shadow-[0_10px_30px_rgba(234,88,12,0.25)] transition-all duration-300 group cursor-pointer"
          >
            <div className="relative flex-shrink-0 w-14 h-14 sm:w-16 sm:h-16 lg:w-18 lg:h-18 rounded-full bg-orange-950/60 border-2 border-orange-500 flex items-center justify-center p-1.5 overflow-hidden group-hover:scale-110 group-hover:bg-orange-500/40 transition-all duration-300 shadow-[0_0_15px_rgba(234,88,12,0.4)]">
              <Image
                src="/about-4-removebg-preview.png"
                alt="Built To Dominate Icon"
                width={72}
                height={72}
                className="w-full h-full object-contain filter drop-shadow-[0_2px_8px_rgba(0,0,0,0.8)]"
              />
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
