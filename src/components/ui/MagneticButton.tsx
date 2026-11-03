'use client'
import { motion } from 'framer-motion'
import { useState } from 'react'

export default function MagneticButton({ children, href }: { children: React.ReactNode, href: string }) {
  const [pos, setPos] = useState({ x: 0, y: 0 })
  return (
    <motion.a
      href={href}
      onMouseMove={(e) => {
        const rect = e.currentTarget.getBoundingClientRect()
        setPos({ x: e.clientX - rect.left - rect.width/2, y: e.clientY - rect.top - rect.height/2 })
      }}
      onMouseLeave={() => setPos({ x: 0, y: 0 })}
      animate={{ x: pos.x * 0.3, y: pos.y * 0.3 }}
      transition={{ type: "spring", stiffness: 150, damping: 15 }}
      className="bg-accent hover:bg-accent-dark inline-block rounded-xl px-6 py-4 font-medium text-white shadow-lg"
    >
      {children}
    </motion.a>
  )
}