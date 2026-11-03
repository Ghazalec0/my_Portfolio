'use client'
import Image from 'next/image'
import Link from 'next/link'
import { Icon } from '@iconify/react'
import { useRef, useState } from 'react'
import { motion } from 'framer-motion'

type ProjectCardProps = {
  project: {
    name: string
    description: string
    topics: string[]
    pageUrl: string
    githubUrl: string
    imageUrl: string
  }
}

const topicIcons: Record<string, string> = {
  "express": "skill-icons:expressjs-dark",
  "nodejs": "logos:nodejs-icon",
  "jwt": "logos:jwt-icon",
  "mongodb": "skill-icons:mongodb",
  "mongoose": "logos:mongoose-icon",
  "redis": "logos:redis",
  "stripe": "logos:stripe",
  "paymob": "lucide:wallet",
  "docker": "logos:docker-icon",
  "cloudinary": "logos:cloudinary-icon",
  "typescript": "logos:typescript-icon",
  "socketio": "logos:socket-io",
  "socket.io": "logos:socket-io",
  "graphql": "logos:graphql",
  "nestjs": "logos:nestjs",
  "prisma": "vscode-icons:file-type-prisma",
  "postgresql": "logos:postgresql",
  "neon": "logos:neon-icon",
  "rest-api": "material-symbols:api-rounded",
  "realtime": "lucide:activity",
  "e-commerce": "lucide:shopping-cart",
  "53-endpoints": "lucide:layers",
  "rbac": "lucide:shield-check",
  "s3": "logos:aws-s3",
  "aws-s3": "logos:aws-s3",
  "firebase": "logos:firebase-icon",
}

function getIcon(topic: string) {
  const key = topic.toLowerCase().trim()
  return topicIcons[key] || "lucide:code-2"
}

export default function ProjectCard({ project }: ProjectCardProps) {
  const { name, description, topics, pageUrl, githubUrl, imageUrl } = project
  const divRef = useRef<HTMLDivElement>(null)
  const [position, setPosition] = useState({ x: 0, y: 0 })
  const [opacity, setOpacity] = useState(0)

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!divRef.current) return
    const rect = divRef.current.getBoundingClientRect()
    setPosition({ x: e.clientX - rect.left, y: e.clientY - rect.top })
  }

  return (
    <div
      ref={divRef}
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setOpacity(1)}
      onMouseLeave={() => setOpacity(0)}
      className="group relative flex h-full flex-col overflow-hidden rounded-xl border border-zinc-200 bg-white p-0 dark:border-zinc-800 dark:bg-zinc-900"
    >
      {/* Spotlight light effect */}
      <motion.div
        className="pointer-events-none absolute -inset-px opacity-0 transition-opacity duration-300"
        style={{
          background: `radial-gradient(600px circle at ${position.x}px ${position.y}px, rgba(99,102,241,0.15), transparent 80%)`,
          opacity,
        }}
      />

      <div className="flex-center aspect-video overflow-hidden bg-zinc-100 relative">
        <Image
          src={imageUrl}
          alt={name}
          width={860}
          height={540}
          className="size-full object-cover object-top transition-transform duration-500 group-hover:scale-105"
        />
      </div>
      <div className="flex flex-1 flex-col p-5 relative">
        <h3 className="mb-2 text-[16px] font-bold leading-tight tracking-tight text-zinc-900 dark:text-white">{name}</h3>
        <p className="mb-4 text-[13px] leading-[22px] text-zinc-600 dark:text-zinc-400">
          {description}
        </p>
        <div className="mb-6 flex flex-wrap gap-1.5">
          {topics?.map((topic) => (
            <span key={topic} className="inline-flex items-center gap-1 rounded-full border border-zinc-200 bg-zinc-50 px-2.5 py-1 text-[10.5px] font-medium tracking-wide text-zinc-700 dark:border-zinc-700 dark:bg-zinc-800 dark:text-zinc-300">
              <Icon icon={getIcon(topic)} className="size-3.5" />
              {topic.toUpperCase()}
            </span>
          ))}
        </div>
        <div className="mt-auto flex gap-3 text-center text-[13px]">
          <Link
            href={pageUrl}
            target="_blank"
            className="bg-accent hover:bg-accent-dark flex-center flex-1 gap-1.5 rounded-lg py-2.5 font-semibold text-white transition-colors"
          >
            Live Demo <Icon icon="lucide:external-link" className="size-3.5" />
          </Link>
          <Link
            href={githubUrl}
            target="_blank"
            className="bg-zinc-100 hover:bg-zinc-200 dark:bg-zinc-800 dark:hover:bg-zinc-700 flex-center flex-1 gap-1.5 rounded-lg py-2.5 font-medium text-zinc-900 dark:text-white transition-colors"
          >
            Code <Icon icon="lucide:github" className="size-3.5" />
          </Link>
        </div>
      </div>
    </div>
  )
}
