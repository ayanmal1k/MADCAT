'use client'

import { useState } from 'react'
import Image from 'next/image'
import { motion, AnimatePresence } from 'framer-motion'

interface TokenSegment {
  id: string
  label: string
  percentage: number
  color: string
  dotStyle?: string
  startAngle: number
  endAngle: number
}

// 4 segments: 40% Liquidity, 30% Community Rewards, 20% Marketing, 10% Development
const TOKENOMICS_DATA: TokenSegment[] = [
  {
    id: 'liquidity',
    label: 'Liquidity',
    percentage: 40,
    color: '#CC0000', // Vibrant Crimson Red
    startAngle: 0,
    endAngle: 144,
  },
  {
    id: 'community',
    label: 'Community Rewards',
    percentage: 30,
    color: '#EAA71B', // Golden Yellow / Amber (previously team color)
    dotStyle: 'border-2 border-white',
    startAngle: 144,
    endAngle: 252,
  },
  {
    id: 'development',
    label: 'Development',
    percentage: 10,
    color: '#4E555C', // Medium Slate Grey
    startAngle: 252,
    endAngle: 288,
  },
  {
    id: 'marketing',
    label: 'Marketing',
    percentage: 20,
    color: '#1A1A1A', // Dark Charcoal / Black
    startAngle: 288,
    endAngle: 360,
  },
]

// Ordered array for Legend (Top to Bottom):
// 40% Liquidity -> 20% Marketing -> 30% Community Rewards -> 10% Development
const LEGEND_ITEMS = [
  TOKENOMICS_DATA[0], // Liquidity 40%
  TOKENOMICS_DATA[3], // Marketing 20%
  TOKENOMICS_DATA[1], // Community Rewards 30%
  TOKENOMICS_DATA[2], // Development 10%
]

// Helper function to calculate SVG pie slice arc path
function getSlicePath(
  cx: number,
  cy: number,
  rInner: number,
  rOuter: number,
  startAngle: number,
  endAngle: number
): string {
  // Convert angles to radians (0 is 12 o'clock top center)
  const startRad = ((startAngle - 90) * Math.PI) / 180
  const endRad = ((endAngle - 90) * Math.PI) / 180

  const x1 = cx + rOuter * Math.cos(startRad)
  const y1 = cy + rOuter * Math.sin(startRad)

  const x2 = cx + rOuter * Math.cos(endRad)
  const y2 = cy + rOuter * Math.sin(endRad)

  const x3 = cx + rInner * Math.cos(endRad)
  const y3 = cy + rInner * Math.sin(endRad)

  const x4 = cx + rInner * Math.cos(startRad)
  const y4 = cy + rInner * Math.sin(startRad)

  const largeArcFlag = endAngle - startAngle > 180 ? 1 : 0

  return [
    `M ${x1} ${y1}`,
    `A ${rOuter} ${rOuter} 0 ${largeArcFlag} 1 ${x2} ${y2}`,
    `L ${x3} ${y3}`,
    `A ${rInner} ${rInner} 0 ${largeArcFlag} 0 ${x4} ${y4}`,
    'Z',
  ].join(' ')
}

export function TokenomicsSection() {
  const [activeSegment, setActiveSegment] = useState<string | null>(null)

  return (
    <section className="relative w-full bg-[#F5AB00] py-12 sm:py-16 md:py-20 lg:py-24 px-4 sm:px-6 md:px-12 lg:px-16 overflow-hidden selection:bg-black selection:text-white border-t-4 border-b-4 border-black">
      
      {/* Comic Action Sunburst Rays Radial Background */}
      <div 
        className="absolute inset-0 pointer-events-none opacity-20 z-0"
        style={{
          backgroundImage: `repeating-conic-gradient(
            from 0deg at 50% 50%,
            #000000 0deg 10deg,
            transparent 10deg 20deg
          )`,
        }}
      />
      
      {/* Subtle Warm Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#F9B700] via-[#F5AB00] to-[#E39B00] opacity-90 z-0 pointer-events-none" />

      {/* Main Container */}
      <div className="relative z-10 max-w-7xl mx-auto flex flex-col lg:flex-row items-center justify-between gap-8 md:gap-12 lg:gap-8 pb-12 sm:pb-16 md:pb-12">
        
        {/* LEFT COLUMN: Graphic Text / Headline from public/tokenomics text.png */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          className="flex flex-col items-center lg:items-start text-center lg:text-left w-full max-w-lg lg:max-w-xl xl:max-w-2xl"
        >
          {/* Display graphic text from public/tokenomics text.png */}
          <div className="relative w-full max-w-[340px] sm:max-w-[480px] md:max-w-[580px] lg:max-w-[640px] xl:max-w-[720px]">
            <Image
              src="/tokenomics text.png"
              alt="Tokenomics - Built For The Pack"
              width={720}
              height={320}
              priority
              className="w-full h-auto object-contain hover:scale-105 transition-transform duration-300"
            />
          </div>
        </motion.div>

        {/* CENTER COLUMN: Interactive Tokenomics Pie Chart with face.png in middle */}
        <motion.div
          initial={{ opacity: 0, scale: 0.85 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="relative flex items-center justify-center my-2 sm:my-4"
        >
          {/* Pie Chart SVG & Center Face Wrapper */}
          <div className="relative w-[280px] h-[280px] sm:w-[340px] sm:h-[340px] md:w-[380px] md:h-[380px] lg:w-[400px] lg:h-[400px]">
            
            {/* SVG Pie Slices */}
            <svg
              viewBox="0 0 400 400"
              className="w-full h-full filter drop-shadow-[0_12px_28px_rgba(0,0,0,0.6)] transform -rotate-90 transition-all duration-300"
            >
              {TOKENOMICS_DATA.map((item) => {
                const isHovered = activeSegment === item.id
                const pathData = getSlicePath(200, 200, 82, 185, item.startAngle, item.endAngle)

                return (
                  <path
                    key={item.id}
                    d={pathData}
                    fill={item.color}
                    stroke="#FFFFFF"
                    strokeWidth="3.5"
                    strokeLinejoin="round"
                    className="cursor-pointer transition-all duration-300 origin-center hover:opacity-95"
                    style={{
                      transform: isHovered ? 'scale(1.04)' : 'scale(1)',
                      transformOrigin: '200px 200px',
                      filter: isHovered ? 'brightness(1.15) drop-shadow(0 0 10px rgba(255,255,255,0.6))' : 'none',
                    }}
                    onMouseEnter={() => setActiveSegment(item.id)}
                    onMouseLeave={() => setActiveSegment(null)}
                  />
                )
              })}
            </svg>

            {/* Donut Center: face.png from public */}
            <div 
              className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[39%] h-[39%] rounded-full bg-black border-4 border-white flex items-center justify-center overflow-hidden shadow-[0_0_25px_rgba(0,0,0,0.8)] z-10 cursor-pointer"
              onMouseEnter={() => setActiveSegment(null)}
            >
              <div className="relative w-full h-full p-2 flex items-center justify-center">
                <Image
                  src="/face.png"
                  alt="MADCAT Center Head"
                  fill
                  priority
                  className="object-contain p-1.5 hover:scale-110 transition-transform duration-300"
                />
              </div>
            </div>

            {/* Interactive Floating Tooltip on Hover */}
            <AnimatePresence>
              {activeSegment && (
                <motion.div
                  initial={{ opacity: 0, y: 10, scale: 0.9 }}
                  animate={{ opacity: 1, y: 0, scale: 1 }}
                  exit={{ opacity: 0, y: 10, scale: 0.9 }}
                  className="absolute -top-10 left-1/2 -translate-x-1/2 bg-black text-white px-4 py-1.5 rounded-full border-2 border-white text-xs sm:text-sm font-basic font-bold shadow-xl pointer-events-none z-30 flex items-center gap-2"
                >
                  <span 
                    className="w-3 h-3 rounded-full border border-white inline-block"
                    style={{ backgroundColor: TOKENOMICS_DATA.find(d => d.id === activeSegment)?.color }}
                  />
                  <span>{TOKENOMICS_DATA.find(d => d.id === activeSegment)?.label}:</span>
                  <span className="text-[#F5AB00] font-black">{TOKENOMICS_DATA.find(d => d.id === activeSegment)?.percentage}%</span>
                </motion.div>
              )}
            </AnimatePresence>

          </div>
        </motion.div>

        {/* RIGHT COLUMN: Distribution Legend */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
          className="flex flex-col gap-3.5 sm:gap-4 w-full max-w-xs sm:max-w-sm"
        >
          {LEGEND_ITEMS.map((item) => {
            const isSelected = activeSegment === item.id

            return (
              <div
                key={item.id}
                onMouseEnter={() => setActiveSegment(item.id)}
                onMouseLeave={() => setActiveSegment(null)}
                className={`flex items-center gap-3 sm:gap-4 p-2 sm:p-2.5 rounded-xl transition-all duration-200 cursor-pointer ${
                  isSelected 
                    ? 'bg-black/15 scale-105 translate-x-1' 
                    : 'hover:bg-black/10'
                }`}
              >
                {/* Custom Legend Circle Dot */}
                <div 
                  className={`w-6 h-6 sm:w-7 sm:h-7 rounded-full flex-shrink-0 shadow-md transition-transform duration-200 ${item.dotStyle || ''} ${
                    isSelected ? 'scale-125 ring-2 ring-black' : ''
                  }`}
                  style={{ backgroundColor: item.color }}
                />

                {/* Percentage & Label Text */}
                <div className="flex items-center gap-2 sm:gap-3 font-basic text-black">
                  <span className="font-black text-lg sm:text-xl md:text-2xl min-w-[48px] sm:min-w-[56px] text-right tracking-tight">
                    {item.percentage}%
                  </span>
                  <span className="font-bold text-sm sm:text-base md:text-lg tracking-wide text-black/90">
                    {item.label}
                  </span>
                </div>
              </div>
            )
          })}
        </motion.div>

      </div>

      {/* BOTTOM LEFT COIN IMAGE from public/tokenomics coin left.png */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, delay: 0.3 }}
        animate={{ y: [0, -6, 0] }}
        style={{ transition: 'transform 4s ease-in-out infinite' }}
        className="absolute left-0 bottom-0 pointer-events-none z-20 max-w-[28%] sm:max-w-[22%] md:max-w-[20%] lg:max-w-[220px]"
      >
        <Image
          src="/tokenomics coin left.png"
          alt="Tokenomics Coins Left"
          width={240}
          height={180}
          priority
          className="w-full h-auto object-contain filter drop-shadow-[0_8px_16px_rgba(0,0,0,0.5)]"
        />
      </motion.div>

      {/* BOTTOM RIGHT COIN IMAGE from public/tokenomics coin right.png (Larger size) */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, delay: 0.4 }}
        animate={{ y: [0, -8, 0] }}
        style={{ transition: 'transform 4s ease-in-out infinite 0.5s' }}
        className="absolute right-0 bottom-0 pointer-events-none z-20 max-w-[34%] sm:max-w-[28%] md:max-w-[25%] lg:max-w-[300px]"
      >
        <Image
          src="/tokenomics coin right.png"
          alt="Tokenomics Coins Right"
          width={320}
          height={240}
          priority
          className="w-full h-auto object-contain filter drop-shadow-[0_10px_20px_rgba(0,0,0,0.5)]"
        />
      </motion.div>

    </section>
  )
}
