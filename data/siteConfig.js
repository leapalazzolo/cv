module.exports = {
  title: 'Leandro Palazzolo CV',
  description: 'Curriculum vitae',
  keyWords: ['gatsbyjs', 'react', 'curriculum', 'cv', 'devops', 'sre', 'azure'],
  author: 'Leandro Palazzolo',
  githubUsername: 'leapalazzolo',
  authorAvatar: 'images/avatar.jpg',
  tabTitle: 'Leandro Palazzolo',
  error: {
    name: 'error',
    keys: ['title', 'description', 'seo'],
    notFound: 'images/404.jpeg',
    ufoAndCow: 'images/ufo-and-cow.svg',
  },
  titles: {
    name: 'titles',
    keys: [
      'about',
      'skills',
      'experience',
      'courses',
      'certified',
      'education',
    ],
  },
  jobs: {
    name: 'jobs',
    number: 10,
    keys: ['company', 'month', 'year', 'duration', 'occupation', 'description'],
  },
  education: {
    name: 'education',
    number: 2,
    keys: ['name', 'place', 'from', 'to'],
  },
  skills: [
    {
      name: 'Python',
      level: 95,
    },
    {
      name: 'Golang',
      level: 90,
    },
    {
      name: 'Cosmos/Terdermint',
      level: 85,
    },
    {
      name: 'Ethereum/EVM/Solidity',
      level: 85,
    },
    {
      name: 'DevOps & CI/CD',
      level: 85,
    },
    {
      name: 'Cloud (AWS/Azure)',
      level: 85,
    },
     {
      name: 'Kubernetes/Docker',
      level: 80,
    },
    {
      name: 'Rust',
      level: 75,
    },
  ],
  courses: [
    {
      name: 'Alchemy University: Certified Ethereum Developer',
      date: '3/2023',
      certification: true,
      url: 'https://opensea.io/assets/matic/0x60576a64851c5b42e8c57e3e4a5cf3cf4eeb2ed6/15055',
    },
    {
      name: 'Cosmos Academy: Interchain Developer Academy',
      date: '12/2022',
      certification: true,
      url: 'https://badgr.com/public/badges/gm-xgy4UQKOdXSIsQ8nZTg',
    },
    {
      name: 'Scrum Professional',
      date: '08/2020',
      certification: true,
      url: 'https://www.youracclaim.com/badges/ef3e2e44-6265-4c7d-b992-3db6ed41d8d8',
    },
    {
      name: 'Lifelong Learning',
      date: '08/2020',
      certification: true,
      url: 'https://www.youracclaim.com/badges/38b70c11-660a-480c-a792-67d1c5647d40',
    },
    {
      name: 'M220P: MongoDB for Python Developers',
      date: '10/2019',
      url:
        'http://university.mongodb.com/course_completion/2b780a24-987d-4837-8de5-3c60fd9cf504',
    },
    {
      name: 'Azure Fundamentals',
      date: '08/2019',
      license: '787340',
      url:
        'https://www.youracclaim.com/badges/0897b120-daa1-4cdf-8300-e1c1dcf2b9b1',
      certification: true,
    },
    {
      name: 'ScrumMaster®',
      date: '05/2018',
      license: '787340',
      url: 'https://www.scrumalliance.org/community/profile/lpalazzolo',
      certification: true,
    },
    {
      name: 'SAFe® 4 Practitioner',
      date: '05/2018',
      license: '17672922',
      url:
        'https://www.youracclaim.com/badges/0897b120-daa1-4cdf-8300-e1c1dcf2b9b1',
      certification: true,
    },
  ],
  social: {
    linkedin: 'https://www.linkedin.com/in/leandro-palazzolo-85350787/',
    github: 'https://github.com/leapalazzolo',
    email: 'leapalazzolo@gmail.com',
    whatsApp: '541124044573',
  },
  pathPrefix: '/CV',
  googleAnalyticsId: 'UA-164784198-1',
  background_color: '#ffffff',
  theme_color: '#25303B',
  display: 'minimal-ui',
  icon: 'images/icon.png',
  headerLinks: [
    {
      label: 'Leandro Palazzolo',
      url: '/',
    },
  ],
}
