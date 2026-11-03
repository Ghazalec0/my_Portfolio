'use client'
import Link from 'next/link'
import { Icon } from '@iconify/react'
import ProjectCard from '@/components/ui/ProjectCard'
import TiltCard from '@/components/ui/TiltCard'
import BlurReveal from '@/components/ui/BlurReveal'
import projectData from '@/data/projectData.json'
import { motion } from 'framer-motion'

export default function Projects() {
  return (
    <section id="projects" className="py-20">
      <div className="container">
        <BlurReveal>
          <div className="mb-12 flex flex-wrap items-end justify-between gap-8">
            <div className="space-y-4">
              <h2 className="text-3xl font-bold tracking-tight">Featured Projects</h2>
              <p className="max-w-lg text-[15px] leading-6 text-zinc-600 dark:text-zinc-400">
                A selection of my backend work, focused on scalable APIs, real-time systems, and robust architectures.
              </p>
            </div>
            <Link href="https://github.com/Ghazalec0" target="_blank" className="flex-center text-accent dark:text-accent-light ml-auto gap-2 text-sm font-medium hover:underline">
              View all on {"Git" + "Hub"} <Icon icon="lucide:chevron-right" />
            </Link>
          </div>
        </BlurReveal>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {projectData.map((project, i) => (
            <BlurReveal key={project.name} delay={i * 0.15}>
              <TiltCard>
                <ProjectCard project={project} />
              </TiltCard>
            </BlurReveal>
          ))}
        </div>
      </div>
    </section>
  )
}
