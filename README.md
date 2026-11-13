# Abdulrahman Alkhatib — Portfolio

> Personal portfolio showcasing my projects, certifications, and experience in Computer Science & AI.

[![Live Demo](https://img.shields.io/badge/Live_Demo-Visit_Portfolio-00C7B7?style=for-the-badge&logo=firefox&logoColor=white)](https://abdulrahmanakh.github.io/)
[![GitHub Pages](https://img.shields.io/badge/Hosted_on-GitHub_Pages-181717?style=for-the-badge&logo=github&logoColor=white)](https://abdulrahmanakh.github.io/)

🔗 **Live Link:** [https://abdulrahmanakh.github.io/](https://abdulrahmanakh.github.io/)

---

### Built With

- **React 18** — Component-driven UI
- **Vite** — Fast frontend tooling
- **Tailwind CSS** — Dark mode styling & responsive layout
- **Lucide React** — Clean iconography

---

### Local Development

```bash
# Clone the repository
git clone https://github.com/AbdulrahmanAKh/AbdulrahmanAKh.github.io.git

# Install dependencies
npm install

# Start local dev server
npm run dev
```

To build for production:
```bash
npm run build
```

## 📁 Project Structure
```text
portfolio/
├── public/
│   ├── favicon.svg               # Custom AA insignia SVG favicon
│   └── profile.jpg               # Static fallback images
├── src/
│   ├── assets/                   # Images, thumbnails & local media
│   │   ├── profile.jpg           # Profile photo
│   │   └── projects thumbnials/  # Project screenshots & thumbnails
│   ├── components/
│   │   ├── Cards.jsx             # ProjectCard, CertCard, and Thumb components
│   │   └── Sidebar.jsx           # Compact sticky sidebar with contacts & actions
│   ├── App.jsx                   # Main layout container & hash router
│   ├── data.js                   # Single source of truth for all content
│   ├── index.css                 # Tailwind base styles, theme gradients & animations
│   ├── main.jsx                  # React application entrypoint
│   └── pages.jsx                 # Page views (About, Resume, Projects, Certs, Contact)
├── index.html                    # HTML template, SEO meta tags & font imports
├── tailwind.config.js            # Custom colors, fonts, and animation configuration
├── vite.config.js                # Vite build configuration
└── package.json                  # Dependencies and build scripts
```

---

### Connect

- **LinkedIn:** [Abdulrahman Alkhatib](https://www.linkedin.com/in/abdulrahman-alkhatib/)
- **GitHub:** [@abdulrahmanakh](https://github.com/abdulrahmanakh)
- **Email:** [aboodkhatib90@gmail.com](mailto:aboodkhatib90@gmail.com)

## Portfolio content

- `src/projects.js`: 11 distinct projects covering 13 repositories; private source/showcase pairs are grouped.
- `src/certificates.js`: 15 selected credentials with certificate previews, originals and available verification links.
- `public/projects/`: screenshots captured from 10 public live websites and presentations on 13 November 2026. The CRIS project retains its existing project image because no public demo was listed.
- `public/certificates/`: selected original certificates and rendered previews.

Older KAUST editions and duplicate copies were omitted in favor of the latest completion. The mathematics specialization represents its three component courses. Foundational Python completions, short overlapping workshops and an older data-analysis attendance record were omitted to keep the selection focused. The New Haven digital certificate represents the same award shown in the photographed copy. No degree certificate was supplied, so the placeholder degree credential was removed.

Use Node.js 22 or newer. Run `npm ci` and `npm run build` before publishing. GitHub Actions builds and deploys `dist/` to the root Pages URL.

The About page features CRIS, Shakkel Commerce and SiteSight. The Resume page and downloadable CV contain the current confirmed education, experience, leadership and skills. The CV includes all 11 retained projects with portfolio and GitHub links. Zakat Zen, Mukafih and arXiv Hadoop were removed from the portfolio at the owner's request.

Project navigation uses three purpose-based categories: Web Applications, AI & Computer Vision, and Desktop Applications. Technology badges remain on individual cards. The CV and Resume tab use distinct sections for professional experience, club leadership, a combined Certifications and Programs section covering program certificates and online courses. DeepLearning.AI entries identify Coursera as the course platform.
