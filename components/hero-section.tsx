'use client'

import { useRef } from 'react'
import Image from 'next/image'
import { motion, useMotionValue, useSpring } from 'framer-motion'

// Magnetic Button Component
function MagneticButton({
  children,
  className,
  href,
  target,
  rel,
}: {
  children: React.ReactNode
  className?: string
  href?: string
  target?: string
  rel?: string
}) {
  const ref = useRef<HTMLAnchorElement>(null)

  const x = useMotionValue(0)
  const y = useMotionValue(0)

  const springConfig = { stiffness: 180, damping: 14 }
  const springX = useSpring(x, springConfig)
  const springY = useSpring(y, springConfig)

  const handleMouseMove = (e: React.MouseEvent<HTMLAnchorElement>) => {
    if (!ref.current) return
    const { left, top, width, height } = ref.current.getBoundingClientRect()
    const centerX = left + width / 2
    const centerY = top + height / 2
    const distanceX = e.clientX - centerX
    const distanceY = e.clientY - centerY
    x.set(distanceX * 0.35)
    y.set(distanceY * 0.35)
  }

  const handleMouseLeave = () => {
    x.set(0)
    y.set(0)
  }

  return (
    <motion.a
      ref={ref}
      href={href}
      target={target}
      rel={rel}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{ x: springX, y: springY }}
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      className={className}
    >
      {children}
    </motion.a>
  )
}

export function HeroSection() {
  return (
    <section className="relative w-full bg-black selection:bg-[#F7B000] selection:text-black">
      {/* 100% Full Width Hero Frame with Full Height on Mobile and Natural Aspect on Desktop */}
      <div className="relative w-full min-h-screen md:min-h-[580px] md:aspect-[16/9] md:max-h-screen overflow-hidden flex items-start md:items-center">

        {/* Desktop Hero Background - Full 100% Width */}
        <Image
          src="/hero-bg.png"
          alt="Madcat Hero Background"
          fill
          priority
          sizes="100vw"
          className="hidden md:block object-cover object-center z-0 w-full h-full"
        />

        {/* Mobile Hero Background - mobile-bg-2.png Full Height */}
        <Image
          src="/mobile-bg-2.png"
          alt="Madcat Mobile Background"
          fill
          priority
          sizes="100vw"
          className="block md:hidden object-cover object-center z-0 w-full h-full"
        />

        {/* Content Overlay - Mobile: top-positioned & centered | Desktop: vertically centered & left-aligned */}
        <div className="relative z-10 w-full h-full flex flex-col justify-start md:justify-center items-center md:items-start px-5 sm:px-12 md:px-24 lg:px-32 xl:px-40 pt-6 sm:pt-8 md:py-8">
          <div className="w-full max-w-md sm:max-w-md md:max-w-xl lg:max-w-[55%] xl:max-w-[50%] flex flex-col items-center md:items-start gap-3 sm:gap-4 md:gap-6 mt-0 transform translate-y-0">

            {/* Logo Text Image */}
            <motion.div
              initial={{ opacity: 0, y: -20, rotate: 0 }}
              animate={{ opacity: 1, y: 0, rotate: -3.5 }}
              transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
              className="w-full max-w-[380px] sm:max-w-[440px] md:max-w-[560px] lg:max-w-[680px] xl:max-w-[740px] transform origin-center md:origin-bottom-left mx-auto md:mx-0"
            >
              <Image
                src="/text-logo.png"
                alt="$MADCAT"
                width={740}
                height={230}
                priority
                className="w-full h-auto object-contain filter drop-shadow-[0_10px_22px_rgba(0,0,0,0.95)] hover:scale-105 transition-transform duration-300"
              />
            </motion.div>

            {/* Subheading Graphic Text Image */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
              className="w-full max-w-[340px] sm:max-w-[420px] md:max-w-[520px] lg:max-w-[620px] mx-auto md:mx-0 md:-mt-6 lg:-mt-8 xl:-mt-10"
            >
              <Image
                src="/hero-subheading.png"
                alt="Fury. Attitude. Never Back Down."
                width={620}
                height={175}
                priority
                className="w-full h-auto object-contain filter drop-shadow-[0_8px_16px_rgba(0,0,0,0.9)]"
              />
            </motion.div>

            {/* Description Paragraph */}
            <motion.p
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.4, ease: [0.16, 1, 0.3, 1] }}
              className="text-base sm:text-base md:text-lg lg:text-xl xl:text-2xl text-gray-100 font-basic font-normal leading-relaxed max-w-xl drop-shadow-[0_2px_8px_rgba(0,0,0,0.95)] text-center md:text-left"
            >
              Born from pure fury and fueled by an unstoppable attitude, MADCAT is the ultimate symbol of aggression, determination, and never backing down.
            </motion.p>

            {/* Action Buttons - Single Row on Mobile, Original Flex Layout on Desktop */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.55, ease: [0.16, 1, 0.3, 1] }}
              className="flex flex-row flex-nowrap md:flex-wrap items-center justify-center md:justify-start gap-2.5 sm:gap-4 pt-1 font-basic w-full max-w-full"
            >
              {/* BUY $MADCAT Button */}
              <MagneticButton
                href="https://pump.fun/coin/8a7hJjAFdYPadrgupNXskfsaeQNyeRTsBXeLLpSqpump"
                target="_blank"
                rel="noopener noreferrer"
                className="px-4 py-3 sm:px-9 sm:py-4 bg-gradient-to-r from-[#FFC800] via-[#F7B000] to-[#EA9E00] text-black font-basic font-bold text-xs sm:text-base md:text-xl rounded-xl border-2 border-black tracking-wider uppercase flex items-center justify-center whitespace-nowrap shrink-0 flex-1 sm:flex-initial shadow-[0_8px_25px_rgba(247,176,0,0.5)] hover:shadow-[0_12px_35px_rgba(247,176,0,0.85)] transition-shadow cursor-pointer"
              >
                BUY $MADCAT
              </MagneticButton>

              {/* JOIN COMMUNITY Button */}
              <MagneticButton
                href="https://t.me/+nkVhclURSUhhZjZh"
                target="_blank"
                rel="noopener noreferrer"
                className="px-4 py-3 sm:px-9 sm:py-4 bg-black/90 hover:bg-black text-white font-basic font-bold text-xs sm:text-base md:text-xl rounded-xl border-2 border-white/60 hover:border-white tracking-wider uppercase flex items-center justify-center gap-1.5 sm:gap-2.5 whitespace-nowrap shrink-0 flex-1 sm:flex-initial shadow-[0_8px_25px_rgba(0,0,0,0.8)] hover:shadow-[0_12px_35px_rgba(255,255,255,0.3)] transition-shadow cursor-pointer"
              >
                <svg className="w-4 h-4 sm:w-5 sm:h-5 fill-current" viewBox="0 0 24 24">
                  <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm4.64 6.8c-.15 1.58-.8 5.42-1.13 7.19-.14.75-.42 1-.68 1.03-.58.05-1.02-.38-1.58-.75-.88-.58-1.38-.94-2.23-1.5-.99-.65-.35-1.01.22-1.59.15-.15 2.71-2.48 2.76-2.69.01-.03.01-.14-.07-.2-.08-.06-.19-.04-.27-.02-.12.02-1.96 1.25-5.54 3.69-.52.36-1 .54-1.43.53-.47-.01-1.37-.26-2.04-.48-.82-.27-1.47-.42-1.42-.88.03-.24.37-.49 1.02-.75 3.99-1.74 6.66-2.89 8.01-3.45 3.81-1.58 4.6-.19 4.67.65z" />
                </svg>
                JOIN COMMUNITY
              </MagneticButton>
            </motion.div>

            {/* Solana Footer Badge - Hidden on mobile, visible on desktop */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.7, ease: [0.16, 1, 0.3, 1] }}
              className="hidden md:flex items-center justify-start gap-4 pt-3 sm:pt-5 text-white font-basic text-xl sm:text-2xl md:text-3xl font-extrabold tracking-widest uppercase drop-shadow-[0_4px_12px_rgba(0,0,0,0.95)] w-full"
            >
              <span className="font-basic">LIVE ON</span>
              <Image
                src="/Solana-Crypto-Logo-Transparent.png"
                alt="Solana Logo"
                width={220}
                height={44}
                className="h-8 sm:h-10 md:h-12 lg:h-14 w-auto object-contain"
              />
            </motion.div>

          </div>
        </div>

      </div>
    </section>
  )
}
