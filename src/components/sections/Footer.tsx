import Link from 'next/link'
import { Icon } from '@iconify/react'

export default function Footer() {
  return (
    <footer className="border-t border-zinc-200 dark:border-zinc-800 py-8">
      <div className="container flex items-center justify-between gap-4 max-sm:flex-col">
        <p className="text-sm text-zinc-600 dark:text-zinc-400">
          © {new Date().getFullYear()} Abdulrahman Taha. All rights reserved.
        </p>
        <div className="flex items-center gap-5">
          <Link href="https://github.com/Ghazalec0" target="_blank" className="text-zinc-500 hover:text-accent transition-colors">
            <Icon icon="lucide:github" className="size-5" />
          </Link>
          <Link href="https://www.linkedin.com/in/abdulrahman-taha-abu-ghazala-22a667430" target="_blank" className="text-zinc-500 hover:text-accent transition-colors">
            <Icon icon="lucide:linkedin" className="size-5" />
          </Link>
          <Link href="mailto:dev.ghazaleco@gmail.com" className="text-zinc-500 hover:text-accent transition-colors">
            <Icon icon="lucide:mail" className="size-5" />
          </Link>
        </div>
      </div>
    </footer>
  )
}
