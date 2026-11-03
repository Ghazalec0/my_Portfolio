import Link from 'next/link'
import { Icon } from '@iconify/react'
import Form from '@/components/ui/Form'

export default function Contact() {
  return (
    <section id="contact" className="py-12 sm:py-20 bg-zinc-50 dark:bg-zinc-900/50">
      <div className="container flex flex-col gap-10 lg:flex-row lg:gap-16">
        <div className="w-full space-y-6 lg:w-[45%]">
          <h2 className="text-2xl sm:text-3xl font-bold tracking-tight">Get in Touch</h2>
          <p className="text-[14px] sm:text-[15px] leading-6 sm:leading-7 text-zinc-600 dark:text-zinc-400">
            Have a backend project in mind or need a scalable API? I'm always open to discussing new backend architectures, system design, and opportunities to build robust server-side solutions.
          </p>
          <div className="space-y-5 sm:space-y-6 pt-2">
            <div className="flex gap-3 sm:gap-4">
              <Icon
                icon="lucide:mail"
                className="bg-accent/20 text-accent dark:text-accent-light size-10 sm:size-12 rounded-xl p-2.5 sm:p-3 shrink-0"
              />
              <div className="min-w-0 flex-1">
                <p className="text-muted text-[11px] sm:text-xs font-medium tracking-wider uppercase">email</p>
                <Link
                  href="mailto:dev.ghazaleco@gmail.com"
                  target="_blank"
                  className="text-dark dark:text-light text-[14px] sm:text-[16px] font-bold break-all"
                >
                  dev.ghazaleco@gmail.com
                </Link>
              </div>
            </div>
            <div className="flex gap-3 sm:gap-4">
              <Icon
                icon="lucide:linkedin"
                className="bg-accent/20 text-accent dark:text-accent-light size-10 sm:size-12 rounded-xl p-2.5 sm:p-3 shrink-0"
              />
              <div className="min-w-0 flex-1">
                <p className="text-muted text-[11px] sm:text-xs font-medium tracking-wider uppercase">linkedin</p>
                <Link
                  href="https://www.linkedin.com/in/abdulrahman-taha-abu-ghazala-22a667430"
                  target="_blank"
                  className="text-dark dark:text-light text-[14px] sm:text-[16px] font-bold break-all"
                >
                  in/abdulrahman-taha
                </Link>
              </div>
            </div>
            <div className="flex gap-3 sm:gap-4">
              <Icon
                icon="lucide:github"
                className="bg-accent/20 text-accent dark:text-accent-light size-10 sm:size-12 rounded-xl p-2.5 sm:p-3 shrink-0"
              />
              <div className="min-w-0 flex-1">
                <p className="text-muted text-[11px] sm:text-xs font-medium tracking-wider uppercase">github</p>
                <Link
                  href="https://github.com/Ghazalec0"
                  target="_blank"
                  className="text-dark dark:text-light text-[14px] sm:text-[16px] font-bold break-all"
                >
                  github.com/Ghazalec0
                </Link>
              </div>
            </div>
          </div>
        </div>
        <div className="w-full lg:w-[55%]">
          <Form />
        </div>
      </div>
    </section>
  )
}
