import profileImg from './assets/profile.jpg'
import { PROJECTS } from './projects'
import { CERTS } from './certificates'
export { PROJECTS, CERTS }

// Edit everything about you here.
export const PROFILE = {
  name: 'Abdulrahman Alkhatib', initials: 'AA', avatar: profileImg, role: 'Fresh Graduate - CS', status: 'Open to work',
  email: 'aboodkhatib90@gmail.com', phone: '+966 56 750 3648', location: 'Jeddah, Saudi Arabia',
  links: [{ label: 'LinkedIn', href: 'https://www.linkedin.com/in/abdulrahman-alkhatib/' }, { label: 'GitHub', href: 'https://github.com/AbdulrahmanAKh' }],
  resume: '#',
  about: [
    'I’m Abdulrahman Alkhatib, a computer science graduate from the Islamic University of Madinah. I build web applications, explore computer vision and machine learning, and turn data into practical tools.',
    'I’m looking for opportunities to contribute to software and AI teams, apply my technical skills and keep learning through real projects.',
  ],
  glance: [['Graduated', 'December 2026'], ['Looking for', 'Graduate opportunities'], ['Focus', 'AI & Tech solutions'], ['Main languages', 'Python, Java, JS']],
  stats: [['4.89', 'GPA'], [PROJECTS.length, 'Projects showcased'], [CERTS.length, 'Selected credentials']],
}

export const EDUCATION = [{ title: 'B.Sc. Computer Science', org: 'Islamic University of Madinah', when: '2022 — 2026', desc: 'Relevant courses: Data Structures, Algorithms, Databases, Data Mining.' }]
export const EXPERIENCE = [{ title: 'IT Support Trainee', org: 'Mattex Group', when: 'May 2026 — Aug 2026', desc: 'Support IT infrastructure including hardware, software, and network connectivity for end-users.' }, { title: 'API Developer Intern', org: 'iSolutions', when: 'June 2026 — Aug 2026', desc: 'Develop RESTful APIs using Python and FastAPI, ensuring secure data exchange between frontend and backend systems.' }]
export const SKILLS = { Languages: ['Python', 'Java', 'JavaScript', 'SQL'], 'Tools & web': ['Git', 'HTML & CSS', 'Linux'], Concepts: ['Data structures', 'Machine learning basics'] }
