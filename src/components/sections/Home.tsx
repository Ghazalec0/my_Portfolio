'use client'
import { motion } from 'framer-motion'
import Image from 'next/image'
import Link from 'next/link'
import StackIcon from '@/components/ui/StackIcon'
import MagneticButton from '@/components/ui/MagneticButton'

const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.12 } }
}
const item = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6 } as any }
}

export default function Home() {
  return (
    <section id="home" className="min-h-screen py-20 sm:py-40">
      <div className="flex-center container gap-8 max-lg:flex-col lg:justify-between">
        <motion.div variants={container} initial="hidden" animate="show" className="max-w-lg max-lg:text-center">
          <motion.span variants={item} className="bg-accent/10 text-accent inset-ring-accent/20 dark:bg-accent-light/10 dark:text-accent-light dark:inset-ring-accent-light/20 mb-4 inline-block rounded-full px-3 py-1.5 text-[11px] font-bold tracking-widest uppercase inset-ring max-lg:text-[10px]">
            AVAILABLE FOR NEW OPPORTUNITIES
          </motion.span>
          
          <motion.h1 variants={item} className="mb-6 text-4xl sm:text-5xl font-bold tracking-tight leading-[1.15]">
            Hi, I'm{" "}
            <span className="text-accent dark:text-accent-light">
              Abdulrahman
            </span>
            .<br />
            <span className="inline-block">
              I'm a backend
            </span>
            <br />
            <span className="inline-block">
              developer.
            </span>
          </motion.h1>

          <motion.p variants={item} className="mb-8 text-[15px] lg:text-xl leading-7 text-zinc-600 dark:text-zinc-400">
            Backend developer focused on building robust, secure, and high-performance server-side solutions. Specialized in <strong className="text-zinc-900 dark:text-zinc-100">RESTful & GraphQL APIs, WebSockets, and microservices</strong> with Node.js, TypeScript, and NestJS.
          </motion.p>
          <motion.div variants={item} className="flex-center flex-wrap gap-4 lg:justify-start">
            <MagneticButton href="/#projects">
              Explore My Work
            </MagneticButton>
            <Link href="#contact" className="bg-light-2 hover:bg-light-3 border-light-3 dark:bg-dark-2 dark:hover:bg-dark-3 dark:border-dark-3 cursor-pointer rounded-xl border px-4 py-2 font-medium lg:px-6 lg:py-4 hover:scale-105 transition-all">
              Let's Talk
            </Link>
          </motion.div>
        </motion.div>

        <motion.div initial={{ opacity: 0, scale: 0.9, y: 30 }} animate={{ opacity: 1, scale: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.3 }} className="relative aspect-square w-full max-w-[320px] sm:max-w-lg">
          <div className="absolute top-0 right-0 bottom-12 left-12 aspect-square overflow-hidden rounded-3xl shadow-2xl">
            <Image src="/homeImg.avif" alt="Abdelrahman" width={500} height={500} priority className="size-full object-cover" />
            <div className="bg-accent dark:bg-accent-light absolute inset-0 mix-blend-soft-light"></div>
          </div>
          <motion.div initial={{ opacity: 0, y: 50 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.8, duration: 0.6 }} className="card absolute bottom-0 left-0 origin-bottom-left p-4 sm:p-5 shadow-xl">
            <h4 className="mb-3 sm:mb-4 text-xs sm:text-sm font-bold">Core Expertise</h4>
            <div className="grid grid-cols-3 gap-3 sm:gap-4">
              <StackIcon icon="logos:nodejs-icon" text="Node.js" />
              <StackIcon icon="skill-icons:expressjs-dark" text="Express.js" />
              <StackIcon icon="logos:nestjs" text="NestJS" />
              <StackIcon icon="logos:typescript-icon" text="TS" />
              <StackIcon icon="logos:mongodb-icon" text="MongoDB" />
              <StackIcon icon="logos:postgresql" text="PostgreSQL" />
              <StackIcon icon="logos:prisma" text="Prisma" />
              <StackIcon icon="logos:graphql" text="GraphQL" />
              <StackIcon icon="logos:docker-icon" text="Docker" />
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
