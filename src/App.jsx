import { useEffect, useLayoutEffect, useState } from 'react'
import Sidebar from './components/Sidebar'
import { About, Resume, Projects, Certificates, Contact } from './pages'

const TABS = { about: About, resume: Resume, projects: Projects, certificates: Certificates, contact: Contact }

function useHash() {
  const read = () => { const h = location.hash.slice(1); return h in TABS ? h : 'about' }
  const [tab, setTab] = useState(read)
  useEffect(() => {
    const f = () => setTab(read())
    addEventListener('hashchange', f)
    return () => removeEventListener('hashchange', f)
  }, [])
  return tab
}

export default function App() {
  const tab = useHash()
  const Page = TABS[tab]
  useLayoutEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: 'instant' })
  }, [tab])
  return (
    <div className="mx-auto grid max-w-[1180px] gap-7 px-3.5 py-5 lg:grid-cols-[300px_1fr] lg:items-start lg:px-5 lg:py-12">
      <Sidebar />
      <main className="relative min-w-0 rounded-3xl border border-line bg-card px-[22px] pb-9 pt-7 lg:min-h-[640px] lg:px-10 lg:pb-12 lg:pt-9">
        <nav aria-label="Sections" className="sticky top-[calc(env(safe-area-inset-top,0px)+8px)] z-30 -mt-3 mb-6 flex justify-between gap-1 overflow-x-auto rounded-2xl border border-line bg-chip px-2 py-3 text-[12px] shadow-lg sm:gap-[18px] sm:px-[18px] sm:text-[15px] lg:justify-end lg:gap-[26px] lg:py-3.5">
          {Object.keys(TABS).map((t) => (
            <a key={t} href={`#${t}`} aria-current={t === tab ? 'page' : undefined}
              onClick={() => window.scrollTo({ top: 0, left: 0, behavior: 'instant' })}
              className="shrink-0 py-0.5 font-medium capitalize transition-colors hover:text-accent aria-[current=page]:text-accent">{t}</a>
          ))}
        </nav>
        <div key={tab} className="animate-fade"><Page /></div>
      </main>
    </div>
  )
}
