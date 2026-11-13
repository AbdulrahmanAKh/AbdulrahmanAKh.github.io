import { useEffect, useRef, useState } from 'react'
import { Star, FolderOpen, GraduationCap, Briefcase, Code2, Copy, Check } from 'lucide-react'
import { PROFILE as P, PROJECTS, CERTS, EDUCATION, EXPERIENCE, LEADERSHIP, SKILLS } from './data'
import { ProjectCard, CertCard, Thumb } from './components/Cards'

const Title = ({ children }) => (
  <h1 className="mb-1 max-w-full text-[34px] font-semibold leading-tight after:mt-3 after:block after:h-1 after:w-11 after:rounded after:bg-accent after:content-[''] lg:max-w-[60%]">{children}</h1>
)
const H2 = ({ icon: Icon, children, divider = false }) => (
  <h2 className={`mb-[18px] mt-11 flex items-center gap-3 text-[23px] font-semibold ${divider ? "border-b border-line pb-3" : ""}`}>
    <span className="grid h-10 w-10 place-items-center rounded-[13px] border border-line bg-chip text-accent"><Icon size={20} /></span>{children}
  </h2>
)
const Grid = ({ children, className = '' }) => <div className={`grid grid-cols-[repeat(auto-fill,minmax(min(100%,250px),1fr))] gap-[18px] ${className}`}>{children}</div>
const Lead = ({ children, className = '' }) => <p className={`mt-[18px] max-w-[72ch] text-zinc-300 ${className}`}>{children}</p>

function Stat({ value, label }) {
  const isNum = typeof value === 'number'
  const isFloat = typeof value === 'string' && !isNaN(parseFloat(value))
  const [n, setN] = useState(() => (isNum ? 0 : isFloat ? '0.00' : value))

  useEffect(() => {
    if (isNum) {
      let i = 0
      const id = setInterval(() => { setN(++i); if (i >= value) clearInterval(id) }, 140)
      return () => clearInterval(id)
    } else if (isFloat) {
      const target = parseFloat(value)
      let cur = 0
      const step = target / 25
      const id = setInterval(() => {
        cur += step
        if (cur >= target) {
          setN(target.toFixed(2))
          clearInterval(id)
        } else {
          setN(cur.toFixed(2))
        }
      }, 40)
      return () => clearInterval(id)
    }
  }, [value, isNum, isFloat])

  const display = isNum ? `+${n}` : isFloat ? n : value
  return (
    <div className="group">
      <b className="block text-[40px] font-semibold leading-tight text-zinc-100 transition-colors group-hover:text-accent">
        {display}
      </b>
      <span className="text-sm text-muted">{label}</span>
    </div>
  )
}

export function About() {
  return (<>
    <Title>About me</Title>
    {P.about.map((t) => <Lead key={t}>{t}</Lead>)}
    <div className="mt-[26px] grid grid-cols-[repeat(auto-fit,minmax(170px,1fr))] gap-3.5">
      {P.glance.map(([k, v]) => (
        <div key={k} className="rounded-[14px] border border-line bg-bg px-4 py-3"><small className="block text-[12.5px] leading-snug text-muted">{k}</small><b className="text-[14.5px] font-medium">{v}</b></div>
      ))}
    </div>
    <H2 icon={Star}>Highlights</H2>
    <div className="flex flex-wrap gap-x-16 gap-y-10">{P.stats.map(([v, l]) => <Stat key={l} value={v} label={l} />)}</div>
    <H2 icon={FolderOpen}>Featured projects</H2>
    <Grid>{PROJECTS.filter((p) => p.featured).map((p) => <ProjectCard key={p.title} p={p} />)}</Grid>
  </>)
}

function Timeline({ items }) {
  return (
    <div className="ml-3 border-l-2 border-line/80 pl-6">
      {items.map((e) => (
        <div key={e.title} className="relative mb-[30px] before:absolute before:-left-[31px] before:top-[7px] before:h-3 before:w-3 before:rounded-full before:bg-accent before:ring-4 before:ring-[#163035] before:content-['']">
          <div className="flex flex-col gap-1 sm:flex-row sm:items-start sm:justify-between sm:gap-5">
            <h3 className="text-[17px] font-semibold">{e.title}</h3>
            <time className="shrink-0 text-[14px] font-medium text-accent sm:text-right">{e.when}</time>
          </div>
          <em className="mt-1 block text-[15px] not-italic text-muted">{e.org}</em>
          <p className="mt-1 text-[15px] text-zinc-300">{e.desc}</p>
        </div>
      ))}
    </div>
  )
}

export function Resume() {
  const credentialItems = CERTS.filter((c) => c.resumeGroup).map((c) => ({ title: c.title, org: c.issuer, when: c.date, desc: c.desc }))
  return (<>
    <Title>Resume</Title>
    <Lead>Software development, API integration and applied AI, supported by university study and practical project work.</Lead>
    <a href={P.resume} download="Abdulrahman_Alkhatib_CV.pdf" className="mt-5 inline-flex rounded-xl bg-accent px-5 py-2.5 text-sm font-semibold text-[#0d2326]">Download CV (PDF)</a>
    <H2 divider icon={GraduationCap}>Education</H2><Timeline items={EDUCATION} />
    <H2 divider icon={Code2}>Technical skills</H2>
    {Object.entries(SKILLS).map(([g, list]) => (
      <div key={g} className="mb-4"><small className="mb-2 block text-[13.5px] text-muted">{g}</small>
        <ul className="flex flex-wrap gap-2.5">{list.map((s) => <li key={s} className="list-none rounded-lg bg-chip px-4 py-[5px] text-sm">{s}</li>)}</ul></div>
    ))}
    <H2 divider icon={Briefcase}>Professional experience</H2><Timeline items={EXPERIENCE} />
    <H2 divider icon={Star}>Leadership &amp; activities</H2><Timeline items={LEADERSHIP} />
    <H2 divider icon={FolderOpen}>Projects</H2>
    <Grid>{PROJECTS.filter((p) => p.featured).map((p) => <ProjectCard key={p.title} p={p} />)}</Grid>
    <a href="#projects" className="mt-5 inline-block text-sm font-medium text-accent hover:underline">Explore all {PROJECTS.length} projects →</a>
    <H2 divider icon={GraduationCap}>Certifications &amp; programs</H2>
    <p className="mb-5 text-sm text-muted">Selected program certificates, specializations and online course completions.</p>
    <Timeline items={credentialItems} />
    <a href="#certificates" className="inline-block text-sm font-medium text-accent hover:underline">View all certificates and course completions →</a>
    <H2 divider icon={Code2}>Languages</H2>
    <p className="text-zinc-300">Arabic: Native · English: Professional working proficiency</p>
  </>)
}

export function Projects() {
  const categories = ['All', 'Web Applications', 'AI & Computer Vision', 'Desktop Applications']
  const [cur, setCur] = useState('All')
  const shown = PROJECTS.filter((p) => cur === 'All' || p.category === cur)
  return (<>
    <Title>Projects</Title>
    <Lead>Software, AI and data projects from university, personal work and team contributions. Public showcases and private source repositories for the same project are grouped together.</Lead>
    <p className="mt-3 text-sm text-muted">{PROJECTS.length} projects · {PROJECTS.reduce((n, p) => n + p.repositories.length, 0)} repositories · {PROJECTS.filter((p) => p.demo).length} live websites and presentations</p>
    <div role="group" aria-label="Filter projects by category" className="mt-6 flex flex-wrap gap-2">
      {categories.map((t) => (
        <button key={t} type="button" aria-pressed={cur === t} onClick={() => setCur(t)}
          className="rounded-xl border border-line bg-chip px-4 py-[5px] text-[13.5px] font-medium aria-pressed:border-accent aria-pressed:bg-accent aria-pressed:text-[#0d2326]">{t}</button>
      ))}
    </div>
    <p role="status" className="mt-4 text-sm text-muted">Showing {shown.length} of {PROJECTS.length} projects</p>
    <Grid className="mt-5">{shown.map((p) => <ProjectCard key={p.title} p={p} />)}</Grid>
  </>)
}

export function Certificates() {
  const ref = useRef(null)
  const [sel, setSel] = useState(null)
  const [category, setCategory] = useState('All')
  const categories = ['All', ...new Set(CERTS.map((c) => c.category))]
  const shown = CERTS.filter((c) => category === 'All' || c.category === category)
  useEffect(() => { if (sel) ref.current?.showModal() }, [sel])
  return (<>
    <Title>Certificates</Title>
    <Lead>Selected training, specializations and achievements supporting my work in software, AI and data science. Each entry includes the certificate and its issuing organization.</Lead>
    <div role="group" aria-label="Filter certificates by subject" className="mt-6 flex flex-wrap gap-2">
      {categories.map((c) => <button key={c} type="button" aria-pressed={category === c} onClick={() => setCategory(c)} className="rounded-xl border border-line bg-chip px-4 py-[5px] text-[13.5px] font-medium aria-pressed:border-accent aria-pressed:bg-accent aria-pressed:text-[#0d2326]">{c}</button>)}
    </div>
    <p role="status" className="mt-4 text-sm text-muted">Showing {shown.length} of {CERTS.length} selected credentials</p>
    <Grid className="mt-5">{shown.map((c) => <CertCard key={c.title} c={c} onView={() => setSel(c)} />)}</Grid>
    <dialog ref={ref} onClose={() => setSel(null)} onClick={(e) => e.target === ref.current && ref.current.close()} aria-labelledby="cv-title"
      className="max-h-[90dvh] w-[min(860px,92vw)] overflow-y-auto rounded-[20px] border border-line bg-card p-6 text-zinc-100 shadow-2xl backdrop:backdrop-blur-md">
      {sel && (<>
        <h3 id="cv-title" className="text-xl font-semibold">{sel.title}</h3>
        <p className="mt-1 text-muted">Issued by {sel.issuer}, {sel.date}</p>
        <p className="mt-2 text-sm text-muted">{sel.desc}</p>
        <Thumb src={sel.img} alt={sel.title} contain className="my-4 h-[min(55dvh,600px)]" />
        <div className="flex flex-wrap justify-end gap-3">
          {sel.verify && <a href={sel.verify} target="_blank" rel="noopener noreferrer" className="rounded-xl border border-line bg-chip px-4 py-2.5 text-[14.5px] font-semibold">Verify credential</a>}
          {sel.url && sel.url !== '#' && (
            <a href={sel.url} target="_blank" rel="noopener noreferrer" className="rounded-xl bg-accent px-4 py-2.5 text-[14.5px] font-semibold text-[#0d2326] transition-transform hover:-translate-y-0.5">
              Open original
            </a>
          )}
          <button type="button" onClick={() => ref.current?.close()} className="rounded-xl border border-line bg-chip px-4 py-2.5 text-[14.5px] font-semibold transition-transform hover:-translate-y-0.5">
            Close
          </button>
        </div>
      </>)}
    </dialog>
  </>)
}

const field = 'mt-1.5 w-full rounded-xl border border-line bg-bg px-3.5 py-[11px] text-[15px] text-zinc-100 focus:border-accent transition-colors'
export function Contact() {
  const [copied, setCopied] = useState(false)
  const copyEmail = async () => {
    try { await navigator.clipboard.writeText(P.email) } catch {}
    setCopied(true)
    setTimeout(() => setCopied(false), 2000)
  }

  const submit = (e) => {
    e.preventDefault()
    const f = Object.fromEntries(new FormData(e.target))
    location.href = `mailto:${P.email}?subject=${encodeURIComponent('Portfolio message from ' + f.name)}&body=${encodeURIComponent(`${f.message}\n\n${f.name} (${f.email})`)}`
  }
  return (<>
    <Title>Let’s connect</Title>
    <div className="mt-7 grid gap-9 md:grid-cols-2">
      <div>
        <Lead className="mt-0">Have an opportunity, collaboration, or a question? Send a message and I’ll reply as soon as possible.</Lead>
        <div className="mt-6 space-y-3">
          <div className="rounded-2xl border border-line bg-chip/50 p-4">
            <small className="block text-xs uppercase tracking-wider text-muted font-medium">Direct Email</small>
            <div className="mt-1.5 flex items-center justify-between gap-2">
              <a href={`mailto:${P.email}`} className="text-[15px] font-medium text-accent hover:underline break-all">
                {P.email}
              </a>
              <button
                type="button"
                onClick={copyEmail}
                className="inline-flex items-center gap-1.5 rounded-lg border border-line bg-chip px-2.5 py-1 text-xs text-muted transition-colors hover:border-accent hover:text-accent"
                title="Copy email address"
              >
                {copied ? <><Check size={14} className="text-emerald-400" /> Copied</> : <><Copy size={14} /> Copy</>}
              </button>
            </div>
          </div>
          {P.phone && (
            <div className="rounded-2xl border border-line bg-chip/50 p-4">
              <small className="block text-xs uppercase tracking-wider text-muted font-medium">Phone</small>
              <div className="mt-1.5">
                <a href={`tel:${P.phone.replace(/\s+/g, '')}`} className="text-[15px] font-medium text-accent hover:underline">
                  {P.phone}
                </a>
              </div>
            </div>
          )}
        </div>
      </div>
      <form onSubmit={submit}>
        {[['name', 'Your name', 'text'], ['email', 'Your email', 'email']].map(([n, l, t]) => (
          <label key={n} className="mb-3.5 block text-sm text-muted">{l}<input name={n} type={t} required className={field} /></label>
        ))}
        <label className="mb-3.5 block text-sm text-muted">Message<textarea name="message" required className={`${field} min-h-[130px] resize-y`} /></label>
        <button type="submit" className="rounded-xl bg-accent px-6 py-[11px] font-semibold text-[#0d2326] transition-transform hover:-translate-y-0.5 hover:brightness-105">
          Send message
        </button>
        <small className="mt-2 block text-xs text-muted/70">
          Clicking send will launch your email client with your message pre-filled.
        </small>
      </form>
    </div>
  </>)
}
