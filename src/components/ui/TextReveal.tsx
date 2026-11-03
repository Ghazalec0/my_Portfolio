'use client'
import { motion } from 'framer-motion'

export default function TextReveal({ text, className = "" }: { text: string, className?: string }) {
  const words = text.split(" ")

  return (
    <div className={className}>
      {words.map((word, i) => (
        <motion.span
          key={i}
          initial={{ opacity: 0, y: 20, filter: "blur(10px)" }}
          whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: i * 0.08 }}
          className="inline-block mr-[0.25em]"
        >
          {word}
        </motion.span>
      ))}
    </div>
  )
}
