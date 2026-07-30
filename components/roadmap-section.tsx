'use client'

import Image from 'next/image'
import { motion } from 'framer-motion'
import { Users, Rocket, Crown } from 'lucide-react'

// Custom Paw Icon SVG for Step 1 matching screenshot
function PawIcon({ className = 'w-7 h-7' }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className}>
      <path d="M12 11.5c-2.485 0-4.5 2.015-4.5 4.5 0 2.21 1.79 4 4 4s4-1.79 4-4c0-2.485-2.015-4.5-4.5-4.5zm-5-3.5c-1.105 0-2 .895-2 2s.895 2 2 2 2-.895 2-2-.895-2-2-2zm10 0c-1.105 0-2 .895-2 2s.895 2 2 2 2-.895 2-2-.895-2-2-2zm-12.5 4c-1.105 0-2 .895-2 2s.895 2 2 2 2-.895 2-2-.895-2-2-2zm15 0c-1.105 0-2 .895-2 2s.895 2 2 2 2-.895 2-2-.895-2-2-2z" />
    </svg>
  )
}

const ROADMAP_STEPS = [
  {
    step: 'STEP 1',
    stepColor: 'text-[#E52E2E]',
    borderColor: 'border-[#E52E2E]',
    glowColor: 'rgba(229, 46, 46, 0.5)',
    title: 'LAUNCH',
    description: 'Get MADCAT out to the streets.',
    imageSrc: '/about-1-removebg-preview.png',
  },
  {
    step: 'STEP 2',
    stepColor: 'text-[#F7B000]',
    borderColor: 'border-[#F7B000]',
    glowColor: 'rgba(247, 176, 0, 0.5)',
    title: 'BUILD THE PACK',
    description: 'Grow the community and spread the word.',
    imageSrc: '/roadmap-2.png',
  },
  {
    step: 'STEP 3',
    stepColor: 'text-[#E52E2E]',
    borderColor: 'border-[#E52E2E]',
    glowColor: 'rgba(229, 46, 46, 0.5)',
    title: 'TAKE OVER',
    description: 'Listings, partnerships and global expansion.',
    imageSrc: '/roadmap-3.png',
  },
  {
    step: 'STEP 4',
    stepColor: 'text-[#F7B000]',
    borderColor: 'border-[#F7B000]',
    glowColor: 'rgba(247, 176, 0, 0.5)',
    title: 'RULE THE MEME WORLD',
    description: 'MADCAT becomes the legend.',
    imageSrc: '/roadmap-4.png',
  },
]

export function RoadmapSection() {
  return (
    <section className="relative w-full bg-black pt-12 sm:pt-16 lg:pt-20 pb-6 sm:pb-8 lg:pb-10 px-4 sm:px-6 md:px-12 lg:px-16 overflow-hidden selection:bg-[#E52E2E] selection:text-white border-t-2 border-zinc-900">
      
      {/* Main Container */}
      <div className="relative z-10 max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-8 items-end">
        
        {/* LEFT COLUMN: Title Graphic + Horizontal 4-Step Timeline */}
        <div className="lg:col-span-7 xl:col-span-7 flex flex-col items-center lg:items-start gap-8 sm:gap-12 pb-2 lg:pb-4 relative z-20">
          
          {/* Main Title Graphic Image from public/roadmap-text.png */}
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
            className="w-full max-w-[280px] sm:max-w-[380px] md:max-w-[460px] lg:max-w-[500px] flex justify-center lg:justify-start"
          >
            <Image
              src="/roadmap-text.png"
              alt="ROADMAP - OUR PATH TO DOMINATION"
              width={500}
              height={220}
              priority
              className="w-full h-auto object-contain hover:scale-102 transition-transform duration-300"
            />
          </motion.div>

          {/* Horizontal Roadmap Steps Timeline */}
          <div className="relative w-full">
            
            {/* Connecting Horizontal Line (Hidden on tiny mobile, visible sm+) */}
            <div className="hidden sm:block absolute top-9 left-10 right-10 h-0.5 bg-zinc-800 z-0">
              {/* Continuously Animating Glowing Energy Line */}
              <motion.div
                animate={{ x: ['-100%', '100%'] }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  ease: 'linear',
                }}
                className="w-1/2 h-full bg-gradient-to-r from-transparent via-[#E52E2E] to-transparent shadow-[0_0_12px_#E52E2E]"
              />
            </div>

            {/* 4 Steps Grid (Responsive 2x2 on mobile, 4 columns on sm+) */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-6 sm:gap-4 relative z-10">
              {ROADMAP_STEPS.map((item, idx) => {
                return (
                  <motion.div
                    key={item.step}
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: idx * 0.15 }}
                    className="flex flex-col items-center text-center group cursor-pointer"
                  >
                    {/* Circle Node Icon Container */}
                    <div className="relative mb-3.5 sm:mb-4">
                      
                      {/* Outer Ring Pulse */}
                      <motion.div
                        animate={{ scale: [1, 1.2, 1], opacity: [0.5, 0, 0.5] }}
                        transition={{
                          duration: 2.2 + idx * 0.3,
                          repeat: Infinity,
                          ease: 'easeInOut',
                        }}
                        className={`absolute inset-0 rounded-full border-2 ${item.borderColor} pointer-events-none`}
                      />

                      {/* Main Circular Node */}
                      <div 
                        className={`w-16 h-16 sm:w-18 sm:h-18 md:w-20 md:h-20 rounded-full bg-black border-2 ${item.borderColor} flex items-center justify-center relative z-10 transition-transform duration-300 group-hover:scale-110 overflow-hidden p-2`}
                        style={{ boxShadow: `0 0 20px ${item.glowColor}` }}
                      >
                        <Image
                          src={item.imageSrc}
                          alt={item.title}
                          width={56}
                          height={56}
                          className="w-full h-full object-contain filter drop-shadow-[0_2px_4px_rgba(0,0,0,0.8)]"
                        />
                      </div>
                    </div>

                    {/* Step Sub-label (e.g. STEP 1) */}
                    <span className={`font-basic font-bold text-xs sm:text-sm uppercase tracking-wider mb-1 ${item.stepColor}`}>
                      {item.step}
                    </span>

                    {/* Main Title (e.g. LAUNCH) */}
                    <h3 className="font-basic font-bold text-sm sm:text-base md:text-lg text-white uppercase tracking-wider mb-1 group-hover:text-[#F7B000] transition-colors">
                      {item.title}
                    </h3>

                    {/* Description Paragraph */}
                    <p className="font-basic text-xs sm:text-sm text-gray-400 leading-snug max-w-[140px] sm:max-w-[150px]">
                      {item.description}
                    </p>

                  </motion.div>
                )
              })}
            </div>

          </div>

        </div>

      </div>

      {/* RIGHT BOTTOM CORNER: Looping Video - Attached to bottom on mobile (-mb) & absolute right-bottom on lg+ */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
        className="relative lg:absolute right-0 bottom-0 z-10 w-full lg:w-[44%] xl:w-[48%] max-w-[340px] sm:max-w-[440px] md:max-w-[480px] lg:max-w-[680px] xl:max-w-[780px] mt-6 sm:mt-8 lg:mt-0 -mb-6 sm:-mb-8 lg:mb-0 mx-auto lg:ml-auto flex justify-center lg:justify-end items-end pointer-events-none"
      >
        <video
          autoPlay
          loop
          muted
          playsInline
          poster="/roadmap-cat.png"
          className="w-full h-auto max-h-[320px] sm:max-h-[420px] md:max-h-[480px] lg:max-h-[640px] xl:max-h-[720px] object-contain object-bottom object-center lg:object-right filter drop-shadow-[0_15px_35px_rgba(0,0,0,0.95)]"
        >
          <source src="/roadmap-cat.webm" type="video/webm" />
          <source src="/catt-anaimted.mp4" type="video/mp4" />
        </video>
      </motion.div>

    </section>
  )
}
