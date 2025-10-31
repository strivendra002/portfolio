import type {
  TNavLink,
  TService,
  TTechnology,
  TExperience,
  TTestimonial,
  TProject,
} from '../types';

import {
  mobile,
  backend,
  creator,
  web,
  javascript,
  typescript,
  html,
  css,
  reactjs,
  redux,
  tailwind,
  nodejs,
  mongodb,
  git,
  // figma,
  // docker,
  //meta,
  //starbucks,
  //tesla,
  //shopify,
  //carrent,
  //jobit,
  //tripguide,
  threejs,
  sensible,
  //areness,
  //areness2,
  areness3,
  //sensible2,
  heyquiz,
  purepharma,
  recipeapp,
} from '../assets';

export const navLinks: TNavLink[] = [
  {
    id: 'home',
    title: 'Home',
  },
  {
    id: 'about',
    title: 'About',
  },

  {
    id: 'work',
    title: 'Work',
  },
  {
    id: 'skills',
    title: 'Skills',
  },
  {
    id: 'projects',
    title: 'Project',
  },
  {
    id: 'contact',
    title: 'Contact',
  },

  {
    id: 'resume',
    title: 'Resume',
  },
];

const services: TService[] = [
  {
    title: 'Web Developer',
    icon: web,
  },
  {
    title: 'Frontend Developer',
    icon: mobile,
  },
  {
    title: 'Backend Developer',
    icon: backend,
  },
  {
    title: 'Web Scrapping',
    icon: creator,
  },
];

const technologies: TTechnology[] = [
  {
    name: 'HTML 5',
    icon: html,
  },
  {
    name: 'CSS 3',
    icon: css,
  },
  {
    name: 'JavaScript',
    icon: javascript,
  },
  {
    name: 'TypeScript',
    icon: typescript,
  },
  {
    name: 'React JS',
    icon: reactjs,
  },
  {
    name: 'Redux Toolkit',
    icon: redux,
  },
  {
    name: 'Tailwind CSS',
    icon: tailwind,
  },
  {
    name: 'Node JS',
    icon: nodejs,
  },
  {
    name: 'MongoDB',
    icon: mongodb,
  },
  {
    name: 'Three JS',
    icon: threejs,
  },
  {
    name: 'git',
    icon: git,
  },
  // {
  //   name: 'figma',
  //   icon: figma,
  // },
  // {
  //   name: 'docker',
  //   icon: docker,
  // },
];

const experiences: TExperience[] = [
  {
    title: 'Industrial Training',
    companyName: 'Sensible-Academy',
    icon: sensible,
    iconBg: '#383E56',
    date: 'March 2023 - October 2023',
    points: [
      'Completed 6-month training in the MERN stack.',
      'Built foundational knowledge of frontend, backend, and database integration.',
    ],
  },
  {
    title: 'Associate Software Developer',
    companyName: 'Areness',
    icon: areness3,
    iconBg: '#E6DEDD',
    date: 'March 2025 -  Oct 2025',
    points: [
      'Work on CMS (Case Management System) including feature development, debugging, optimization, and web scraping to streamline workflows.',
      'Collaborate with cross-functional teams including designers, product managers, and other developers to create high-quality products.',
      'Implement responsive design and ensuring cross-browser compatibility.',
      'Participate in code reviews and providing constructive feedback to other developers.',
    ],
  },
  // {
  //   title: "Web Developer",
  //   companyName: "Shopify",
  //   icon: shopify,
  //   iconBg: "#383E56",
  //   date: "Jan 2022 - Jan 2023",
  //   points: [
  //     "Developing and maintaining web applications using React.js and other related technologies.",
  //     "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
  //     "Implementing responsive design and ensuring cross-browser compatibility.",
  //     "Participating in code reviews and providing constructive feedback to other developers.",
  //   ],
  // },
  // {
  //   title: "Full stack Developer",
  //   companyName: "Meta",
  //   icon: meta,
  //   iconBg: "#E6DEDD",
  //   date: "Jan 2023 - Present",
  //   points: [
  //     "Developing and maintaining web applications using React.js and other related technologies.",
  //     "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
  //     "Implementing responsive design and ensuring cross-browser compatibility.",
  //     "Participating in code reviews and providing constructive feedback to other developers.",
  //   ],
  // },
];

const testimonials: TTestimonial[] = [
  {
    testimonial:
      'I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.',
    name: 'Sara Lee',
    designation: 'CFO',
    company: 'Acme Co',
    image: 'https://randomuser.me/api/portraits/women/4.jpg',
  },
  {
    testimonial:
      "I've never met a web developer who truly cares about their clients' success like Rick does.",
    name: 'Chris Brown',
    designation: 'COO',
    company: 'DEF Corp',
    image: 'https://randomuser.me/api/portraits/men/5.jpg',
  },
  {
    testimonial:
      "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
    name: 'Lisa Wang',
    designation: 'CTO',
    company: '456 Enterprises',
    image: 'https://randomuser.me/api/portraits/women/6.jpg',
  },
];

const projects: TProject[] = [
  {
    name: 'Hey-Quiz',
    description:
      'A robust quiz application built with the MERN stack, featuring user authentication, MCQ tests, real-time progress tracking, and an admin panel for question management.',
    tags: [
      {
        name: 'react',
        color: 'blue-text-gradient',
      },
      {
        name: 'nodejs',
        color: 'green-text-gradient',
      },
      {
        name: 'mongodb',
        color: 'pink-text-gradient',
      },
      {
        name: 'redux',
        color: 'orange-text-gradient',
      },
    ],
    image: heyquiz,
    sourceCodeLink: 'https://github.com/strivendra002/MyQuiz',
    liveDemoLink: 'https://myquiz-1.onrender.com/',
  },
  {
    name: 'Pure Pharma',
    description:
      'An e-commerce pharma application developed with a team using the MERN stack. Includes AI-powered chatbot, OCR prescription scanning, Secure authentication and seamless shopping experience.',
    tags: [
      {
        name: 'react',
        color: 'blue-text-gradient',
      },
      {
        name: 'nodejs',
        color: 'green-text-gradient',
      },
      {
        name: 'mongodb',
        color: 'pink-text-gradient',
      },
      // {
      //   name: 'tailwind',
      //   color: 'orange-text-gradient',
      // },
    ],
    image: purepharma,
    sourceCodeLink: 'https://github.com/strivendra002/EPharma',
    liveDemoLink: 'https://resilient-mermaid-621bb0.netlify.app/',
  },
  {
    name: 'Recipe App',
    description:
      'A recipe discovery platform built with the MERN stack where users can search any dish, explore detailed recipes, and view cooking instructions in an intuitive UI.',
    tags: [
      { name: 'react', color: 'blue-text-gradient' },
      { name: 'nodejs', color: 'green-text-gradient' },
      { name: 'mongodb', color: 'pink-text-gradient' },
      { name: 'express', color: 'orange-text-gradient' },
    ],
    image: recipeapp,
    sourceCodeLink: 'https://github.com/strivendra002/Recipe-MERN',
    liveDemoLink: 'https://trivendrasrecipes.netlify.app/',
  },
];

export { services, technologies, experiences, testimonials, projects };
