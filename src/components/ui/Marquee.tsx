'use client'
import { Icon } from '@iconify/react'

const skills = [
  { icon: "logos:nodejs-icon", name: "Node.js" },
  { icon: "skill-icons:expressjs-dark", name: "Express" },
  { icon: "logos:nestjs", name: "NestJS" },
  { icon: "logos:typescript-icon", name: "TS" },
  { icon: "logos:mongodb-icon", name: "MongoDB" },
  { icon: "logos:postgresql", name: "PostgreSQL" },
  { icon: "logos:prisma", name: "Prisma" },
  { icon: "logos:graphql", name: "GraphQL" },
  { icon: "logos:docker-icon", name: "Docker" },
  { icon: "logos:redis", name: "Redis" },
  { icon: "logos:aws", name: "AWS" },
]

export default function Marquee() {
  return (
    <div className="relative w-full overflow-hidden border-y border-zinc-100 dark:border-zinc-800 bg-zinc-50/50 dark:bg-zinc-900/20 py-4">
      <div className="flex animate-[marquee_25s_linear_infinite] gap-12 whitespace-nowrap">
        {[...skills, ...skills].map((skill, i) => (
          <div key={i} className="flex items-center gap-2 text-sm font-medium text-zinc-500 dark:text-zinc-400">
            <Icon icon={skill.icon} className="h-5 w-5" />
            {skill.name}
          </div>
        ))}
      </div>
      <style>{`
        @keyframes marquee {
          from { transform: translateX(0); }
          to { transform: translateX(-50%); }
        }
      `}</style>
    </div>
  )
}
