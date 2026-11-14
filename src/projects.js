// import graduationImage from './assets/projects thumbnials/graduation_project.webp'

const repo = (name) => `https://github.com/AbdulrahmanAKh/${name}`
const pages = (name) => `https://abdulrahmanakh.github.io/${name}/`

// Public summaries only. Source/showcase pairs represent one project.
export const PROJECTS = [
  {
    title: 'CRIS · Research Information System', featured: true,
    desc: 'My graduation project brings publication records, researcher profiles, journal intelligence, research incentives and institutional analytics into one bilingual platform. I contributed full-stack development, database engineering and scholarly data integration with Scopus and OpenAlex.',
    category: 'Web Applications',
    tags: ['Full stack', 'React', 'TypeScript', 'PostgreSQL', 'Python'],
    code: repo('Graduation-Project-Showcase'), codeLabel: 'Case study',
    img: '/projects/graduation_project.webp', imageNote: 'Project image', m: 'Graduation project',
    repositories: ['Graduation-Project-Showcase'],
  },
  {
    title: 'Shakkel · Industrial Commerce', featured: true,
    desc: 'Contributed to a bilingual storefront for industrial and packaging supplies, with product discovery, bulk quotation requests and customer inquiry workflows. The public showcase explains its React and Supabase architecture.',
    category: 'Web Applications',
    tags: ['Full stack', 'React', 'TypeScript', 'PostgreSQL'],
    code: repo('Industrial-Shakkel-Showcase'), codeLabel: 'Case study', demo: 'https://shakkel.store/', demoLabel: 'Live website',
    img: '/projects/shakkel-store.webp',
    repositories: ['Industrial-Shakkel-Showcase'],
  },
  {
    title: 'SiteSight · Construction Safety AI', featured: true,
    desc: 'A YOLO11 object detector for construction images and video. The browser demo runs an exported ONNX model locally, draws object boxes and flags possible PPE concerns for human review. The notebook reports 46.5% test mAP50 on a small held-out set.',
    category: 'AI & Computer Vision',
    tags: ['Computer vision', 'Python', 'YOLO', 'ONNX'],
    code: repo('YOLO_SiteSight_Project'), demo: pages('YOLO_SiteSight_Project'), img: '/projects/sitesight.webp',
    repositories: ['YOLO_SiteSight_Project'],
  },
  {
    title: 'Inside the Detector · Faster R-CNN',
    desc: 'An interactive object-detection exhibit backed by a trained Faster R-CNN model. Explore saved VOC detections or run uploaded images locally through ONNX. The notebook reports 81.8% test mAP; browser preprocessing can produce different results.',
    category: 'AI & Computer Vision',
    tags: ['Computer vision', 'Python', 'PyTorch', 'ONNX'],
    code: repo('RCNN-ObjectDetection-Project'), demo: pages('RCNN-ObjectDetection-Project'), img: '/projects/rcnn.webp',
    repositories: ['RCNN-ObjectDetection-Project'],
  },
  {
    title: 'Image Finder · CLIP Visual Search',
    desc: 'Search a balanced 2,000-image Tiny ImageNet gallery with CLIP embeddings and cosine similarity. Cached samples return instant neighbors; uploaded images are encoded on the device. Includes an executed notebook and held-out retrieval evaluation.',
    category: 'AI & Computer Vision',
    tags: ['Computer vision', 'Python', 'Machine learning', 'ONNX'],
    code: repo('Image_Finder_Project'), demo: pages('Image_Finder_Project'), img: '/projects/image-finder.webp',
    repositories: ['Image_Finder_Project'],
  },
  {
    title: 'Fracture Atlas · X-ray Classification',
    desc: 'An educational EfficientNet-B0 experiment with a 12-class fracture-type classifier and browser inference. The revised held-out evaluation reports 49.07% accuracy. It has no normal class and cannot determine whether a fracture is present.',
    category: 'AI & Computer Vision',
    tags: ['Computer vision', 'Python', 'PyTorch', 'ONNX'],
    code: repo('Bone_Fracture_Classifier_Project'), demo: pages('Bone_Fracture_Classifier_Project'), img: '/projects/fracture.webp',
    repositories: ['Bone_Fracture_Classifier_Project'],
  },
  {
    title: 'LearnHub · Online Learning Platform',
    desc: 'A learning platform with student, instructor and administrator views, course authoring, quizzes and progress tracking. The interactive demo includes seed courses and an offline fallback so visitors can explore without database setup.',
    category: 'Web Applications',
    tags: ['Full stack', 'React', 'TypeScript', 'PostgreSQL'],
    code: repo('LearningHub_Project'), demo: pages('LearningHub_Project'), img: '/projects/learnhub.webp',
    repositories: ['LearningHub_Project'],
  },
  {
    title: 'Shakkel Learning Hub',
    desc: 'Contributed to a corporate learning platform for workforce training. Its public case study covers role-based access, curriculum authoring, assessments, workforce reporting and digital completion certificates. Production source remains private.',
    category: 'Web Applications',
    tags: ['Full stack', 'React', 'TypeScript', 'PostgreSQL'],
    code: repo('Shakkel-Learn-Showcase'), codeLabel: 'Case study', demo: 'https://learn.shakkel.store/', demoLabel: 'Live website', img: '/projects/shakkel-learn.webp',
    repositories: ['shakkel-learn', 'Shakkel-Learn-Showcase'],
  },
  {
    title: 'CineVault · Movie Organizer',
    desc: 'A Python desktop movie organizer built with PyQt5 and SQLite, featuring multiple profiles, movie collections, search and sorting. A separate interactive web presentation demonstrates the desktop experience and architecture.',
    category: 'Desktop Applications',
    tags: ['Desktop', 'Python', 'PyQt5', 'SQLite'],
    code: repo('Movie_Selector_Project'), demo: pages('Movie_Selector_Project'), demoLabel: 'Web presentation', img: '/projects/cinevault.webp',
    repositories: ['Movie_Selector_Project'],
  },
  {
    title: 'Estifaa · Legal Services Website',
    desc: 'An Arabic website for a law firm, with service discovery, consultation request forms, branch details and client testimonials. Built with React and TypeScript, with Supabase-backed content and consultation workflows.',
    category: 'Web Applications',
    tags: ['Full stack', 'React', 'TypeScript', 'PostgreSQL'],
    demo: 'https://estifaa-law.vercel.app/', demoLabel: 'Live website', img: '/projects/estifaa.webp', private: true,
    repositories: ['Estifaa-Project'],
  },
  {
    title: 'Personal Portfolio',
    desc: 'This responsive portfolio brings my software, AI and data projects together with selected learning credentials. Built with React, Vite and Tailwind CSS and deployed through GitHub Pages.',
    category: 'Web Applications',
    tags: ['Web', 'React', 'JavaScript'], code: repo('AbdulrahmanAKh.github.io'), demo: 'https://abdulrahmanakh.github.io/', demoLabel: 'Live website', img: '/projects/portfolio.webp',
    repositories: ['AbdulrahmanAKh.github.io'],
  },
]
