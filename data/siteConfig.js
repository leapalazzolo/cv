module.exports = {
  title: 'Leandro Palazzolo CV',
  description: 'Leandro Palazzolo - Curriculum vitae',
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
    number: 7,
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
      name: 'React',
      level: 75,
    },
    {
      name: 'Linux',
      level: 75,
    },
    {
      name: 'MongoDB',
      level: 70,
    },
    {
      name: 'Postgresql',
      level: 70,
    },
    {
      name: 'Datadog',
      level: 70,
    },
  ],
  courses: [
    {
      name: 'Advanced React',
      date: '08/2020',
      certification: true,
      url: 'https://www.acamica.com/front-end-avanzado-react',
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
      name: 'Red Hat (RH134) System Administration II - RHEL8',
      date: '12/2019',
    },
    {
      name: 'Splunk fundamentals I',
      date: '04/2019',
      url:
        'https://education.splunk.com/award/completion/81d1e230-926a-319b-9aa5-1e98219df953',
    },
    {
      name: 'Splunk fundamentals II',
      date: '04/2019',
      url:
        'https://education.splunk.com/award/completion/cb0d22a7-1515-3d0f-a380-14f53ae830fb',
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
    
    {
      name: 'Cisco CCENT',
      date: '04/2018',
      license: 'CSCO13290467',
      url: "https://cisco.pearsoncred.com/durango/do/login?ownername=cisco&channel=cisco&basechannel=integral7&id=CSCO13290467",
      certification: true,
    },
    {
      name: 'Cisco CCNA Routing and Switching',
      date: '02/2018',
      certification: false,
    },
    {
      name: 'CloudAcademy: GitOps',
    },
    {
      name: 'CloudAcademy: NGINX',
    },
    {
      name: 'Lynda.com: DevOps Foundations: DevSecOps',
    },
    {
      name: 'Lynda.com: DevSecOps: Automated Security Testing',
    },
    {
      name:
        'Lynda.com: DevSecOps: Building a Secure Continuous Delivery Pipeline',
    },
    {
      name: 'Lynda.com: JavaScript essential',
    },
    {
      name: 'Lynda.com: Node.js Essential Training',
    },
    {
      name: 'Lynda.com: Designing RESTful APIs',
    },
    {
      name: 'Lynda.com: Learning Ansible',
    },
    {
      name: 'Lynda.com: Learning Flask',
    },
    {
      name: 'Lynda.com: Optimizing Python Services',
    },
    {
      name: 'Lynda.com: Python 3 SSH Network Automation Quick Start',
    },
    {
      name: 'Lynda.com: Python: Design Patterns',
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
