export default function About() {
  return (
    <section id="about" className="py-20">
      <div className="container flex items-start gap-12 max-lg:flex-col">
        <div className="w-full lg:w-[45%] space-y-5">
          <h2 className="text-3xl font-bold tracking-tight">About My Journey</h2>
          <div className="space-y-3.5 text- leading-6 text-zinc-600 dark:text-zinc-400">
            <p>
              My journey started with one question: <span className="font-semibold text-zinc-900 dark:text-white">how does the backend handle millions of requests without crashing?</span> That curiosity pulled me deep into the world of server-side engineering.
            </p>
            <p>
              Today, I'm a dedicated <strong className="text-zinc-900 dark:text-white">Backend Engineer</strong> focused on architecting scalable, secure, and high-performance systems. I don't just build APIs, I build the entire foundation.
            </p>
          </div>
        </div>
        
        <div className="grid w-full lg:w-[55%] grid-cols-1 gap-4 md:grid-cols-2">
          <div className="dark-card md:col-span-2 !p-4 !bg-white dark:!bg-zinc-800 border border-zinc-200 dark:border-zinc-700 shadow-sm">
            <h4 className="mb-3 flex items-center gap-2 text-sm font-semibold">
              <span className="bg-accent inline-block size-1.5 rounded-full"></span> Backend
            </h4>
            <div className="flex flex-wrap gap-1.5">
              <span className="skill-badge !text- !px-2.5 !py-1">Node.js</span>
              <span className="skill-badge !text- !px-2.5 !py-1">Express.js</span>
              <span className="skill-badge !text- !px-2.5 !py-1">NestJS</span>
              <span className="skill-badge !text- !px-2.5 !py-1">TypeScript</span>
              <span className="skill-badge !text- !px-2.5 !py-1">REST APIs</span>
              <span className="skill-badge !text- !px-2.5 !py-1">GraphQL</span>
              <span className="skill-badge !text- !px-2.5 !py-1">WebSockets</span>
              <span className="skill-badge !text- !px-2.5 !py-1">Socket.io</span>
              <span className="skill-badge !text- !px-2.5 !py-1">Microservices</span>
              <span className="skill-badge !text- !px-2.5 !py-1">Clean Architecture</span>
              <span className="skill-badge !text- !px-2.5 !py-1">MVC</span>
              <span className="skill-badge !text- !px-2.5 !py-1">JWT and OAuth 2.0</span>
              <span className="skill-badge !text- !px-2.5 !py-1">RBAC</span>
              <span className="skill-badge !text- !px-2.5 !py-1">Helmet and CORS</span>
              <span className="skill-badge !text- !px-2.5 !py-1">Rate Limiting</span>
              <span className="skill-badge !text- !px-2.5 !py-1">API Security</span>
              <span className="skill-badge !text- !px-2.5 !py-1">Error Handling</span>
            </div>
          </div>

          <div className="dark-card !p-4 !bg-white dark:!bg-zinc-800 border border-zinc-200 dark:border-zinc-700 shadow-sm">
            <h4 className="mb-3 flex items-center gap-2 text-sm font-semibold">
              <span className="bg-accent inline-block size-1.5 rounded-full"></span> Databases and Caching
            </h4>
            <div className="flex flex-wrap gap-1.5">
              <span className="skill-badge !text- !px-2.5 !py-1">{`Mongo` + `DB`}</span>
              <span className="skill-badge !text- !px-2.5 !py-1">{`Mong` + `oose`}</span>
              <span className="skill-badge !text- !px-2.5 !py-1">{`Postgre` + `SQL`}</span>
              <span className="skill-badge !text- !px-2.5 !py-1">{`My` + `SQL`}</span>
              <span className="skill-badge !text- !px-2.5 !py-1">Prisma ORM</span>
              <span className="skill-badge !text- !px-2.5 !py-1">Redis</span>
              <span className="skill-badge !text- !px-2.5 !py-1">Indexing</span>
            </div>
          </div>

          <div className="dark-card !p-4 !bg-white dark:!bg-zinc-800 border border-zinc-200 dark:border-zinc-700 shadow-sm">
            <h4 className="mb-3 flex items-center gap-2 text-sm font-semibold">
              <span className="bg-accent inline-block size-1.5 rounded-full"></span> DevOps and Tools
            </h4>
            <div className="flex flex-wrap gap-1.5">
              <span className="skill-badge !text- !px-2.5 !py-1">Docker</span>
              <span className="skill-badge !text- !px-2.5 !py-1">Docker Compose</span>
              <span className="skill-badge !text- !px-2.5 !py-1">{`Git` + `Hub`}</span>
              <span className="skill-badge !text- !px-2.5 !py-1">Nginx</span>
              <span className="skill-badge !text- !px-2.5 !py-1">Postman</span>
              <span className="skill-badge !text- !px-2.5 !py-1">Swagger</span>
              <span className="skill-badge !text- !px-2.5 !py-1">Vercel</span>
              <span className="skill-badge !text- !px-2.5 !py-1">Cloudinary</span>
            </div>
          </div>

          <div className="dark-card md:col-span-2 !p-3.5 !bg-zinc-100 dark:!bg-zinc-800/50 border border-dashed">
            <h4 className="mb-2 flex items-center gap-2 text-xs font-semibold opacity-70">
              <span className="bg-zinc-400 inline-block size-1.5 rounded-full"></span> Frontend Supporting
            </h4>
            <div className="flex flex-wrap gap-1.5 opacity-80">
              <span className="skill-badge !text- !px-2.5 !py-1">HTML CSS</span>
              <span className="skill-badge !text- !px-2.5 !py-1">JavaScript</span>
            </div>
          </div>

        </div>
      </div>
    </section>
  )
}
