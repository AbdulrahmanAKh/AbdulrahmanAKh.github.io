import profileImg from './assets/profile.jpg'
import { PROJECTS } from './projects'
import { CERTS } from './certificates'
export { PROJECTS, CERTS }

// Edit everything about you here.
export const PROFILE = {
  name: 'Abdulrahman Alkhatib', initials: 'AA', avatar: profileImg, role: 'Fresh Graduate - CS', status: 'Open to work',
  email: 'aboodkhatib90@gmail.com', phone: '+966 56 750 3648', location: 'Jeddah, Saudi Arabia',
  links: [{ label: 'LinkedIn', href: 'https://www.linkedin.com/in/abdulrahman-alkhatib/' }, { label: 'GitHub', href: 'https://github.com/AbdulrahmanAKh' }],
  resume: '/Abdulrahman_Alkhatib_CV.pdf',
  about: [
    'I’m Abdulrahman Alkhatib, a computer science graduate from the Islamic University of Madinah. I build web applications, explore computer vision and machine learning, and turn data into practical tools.',
    'I’m looking for opportunities to contribute to software and AI teams, apply my technical skills and keep learning through real projects.',
  ],
  glance: [['Graduation', 'December 2026'], ['Looking for', 'Graduate opportunities'], ['Focus', 'AI & Tech solutions'], ['Main languages', 'Python, Java, JS']],
  stats: [['4.89', 'GPA'], [PROJECTS.length, 'Projects showcased'], [CERTS.length, 'Selected credentials']],
}

export const EDUCATION = [{
  title: 'B.Sc. Computer Science', org: 'Islamic University of Madinah', when: '2022 — December 2026',
  desc: 'GPA: 4.89/5.00. Relevant courses: Data Structures, Algorithms, Databases and Data Mining.',
}]

export const EXPERIENCE = [
  { title: 'API Developer Trainee', org: 'iSolution', when: 'June 2026 — August 2026', desc: 'Developed API proxies and integration workflows in Apigee to support service delivery to external corporate clients.' },
  { title: 'IT Specialist Trainee', org: 'Mattex', when: 'May 2026 — July 2026', desc: 'Performed regular backups for 160+ devices across six Jeddah buildings and physically audited 260+ devices across six facilities. Migrated 340+ asset records from Excel into the ERP system. Supported network connectivity, server maintenance and end-user troubleshooting.' },
]

export const LEADERSHIP = [{ title: 'Head of Development and Operations Department', org: 'Artificial Intelligence Club · Islamic University of Madinah', when: 'December 2023 — December 2026', desc: 'Led updates to AI training content and teaching methods. Contributed to the development and publication of AI models for university use.' }]

export const SKILLS = {
  Languages: ['Python', 'Java', 'JavaScript', 'TypeScript', 'SQL'],
  'Web & databases': ['React', 'HTML & CSS', 'Tailwind CSS', 'Supabase', 'PostgreSQL', 'SQLite'],
  'APIs & tools': ['Apigee', 'REST APIs', 'Git & GitHub', 'Linux', 'Vite'],
  'AI & data': ['PyTorch', 'YOLO', 'Transfer learning', 'Object detection', 'ONNX', 'Data preprocessing', 'Exploratory data analysis'],
}
