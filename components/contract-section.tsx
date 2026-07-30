'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { Copy, Check } from 'lucide-react'

export function ContractSection() {
  const [copied, setCopied] = useState(false)
  const contractAddress = '8a7hJjAFdYPadrgupNXskfsaeQNyeRTsBXeLLpSqpump'

  const handleCopy = () => {
    navigator.clipboard.writeText(contractAddress)
    setCopied(true)
    setTimeout(() => setCopied(false), 2000)
  }

  return (
    <section className="w-full bg-black border-y border-zinc-900 py-4 sm:py-5 md:py-6 px-4 sm:px-8 lg:px-14 selection:bg-[#F7B000] selection:text-black">
      <motion.div 
        initial={{ opacity: 0, y: 25 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: false, amount: 0.2 }}
        transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
        className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4 sm:gap-5 md:gap-7"
      >
        
        {/* Left: CONTRACT ADDRESS Heading in Ultra Fresh Font */}
        <div className="font-ultra-fresh text-[#F7B000] italic font-black text-lg sm:text-xl md:text-2xl lg:text-3xl uppercase tracking-wider whitespace-nowrap text-center md:text-left drop-shadow-[0_2px_8px_rgba(247,176,0,0.35)]">
          CONTRACT ADDRESS
        </div>

        {/* Middle: Contract Address String in Basic Font */}
        <div className="font-basic text-white text-sm sm:text-base md:text-lg lg:text-xl font-bold tracking-wide select-all break-all text-center md:text-left px-5 py-2.5 sm:py-3 rounded-xl bg-zinc-950 border border-zinc-800 shadow-xl max-w-full overflow-x-auto">
          {contractAddress}
        </div>

        {/* Right: Copy Button (Styled like Navbar red button) */}
        <motion.button
          onClick={handleCopy}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="px-6 sm:px-7 py-2.5 sm:py-3 rounded-xl bg-gradient-to-r from-red-600 via-red-650 to-red-700 hover:from-red-500 hover:to-red-600 text-white font-basic font-black text-xs sm:text-base uppercase tracking-wider shadow-[0_4px_16px_rgba(220,38,38,0.5)] border border-red-500/80 transition-all duration-300 flex items-center justify-center gap-2.5 cursor-pointer shrink-0 min-w-[125px]"
        >
          <span>{copied ? 'COPIED!' : 'COPY'}</span>
          {copied ? (
            <Check className="w-4 h-4 sm:w-5 sm:h-5 text-emerald-400 stroke-[3]" />
          ) : (
            <Copy className="w-4 h-4 sm:w-5 sm:h-5 text-white stroke-[2.5]" />
          )}
        </motion.button>

      </motion.div>
    </section>
  )
}
