'use client'
import { motion } from 'framer-motion'

export default function AuroraBackground() {
  return (
    <div className="pointer-events-none fixed inset-0 -z-10 overflow-hidden">
      {/* Blur blobs */}
      <motion.div
        animate={{ x: [0, 100, 0], y: [0, 50, 0], scale: [1, 1.2, 1] }}
        transition={{ duration: 20, repeat: Infinity, ease: "easeInOut" }}
        className="absolute -top-1/2 -left-1/2 h-[800px] w-[800px] rounded-full bg-accent/20 blur-[120px]"
      />
      <motion.div
        animate={{ x: [0, -120, 0], y: [0, 100, 0], scale: [1, 1.3, 1] }}
        transition={{ duration: 25, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-1/2 -right-1/2 h-[600px] w-[600px] rounded-full bg-purple-500/15 blur-[100px]"
      />
      <motion.div
        animate={{ x: [0, 80, 0], y: [0, -80, 0] }}
        transition={{ duration: 18, repeat: Infinity, ease: "easeInOut" }}
        className="absolute -bottom-1/2 left-1/3 h-[700px] w-[700px] rounded-full bg-blue-500/10 blur-[120px]"
      />
    </div>
  )
}
