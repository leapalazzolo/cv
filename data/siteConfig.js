module.exports = {
  siteTitle: 'CV',
  siteDescription: `Leandro Palazzolo's curriculum vitae`,
  keyWords: ['gatsbyjs', 'react', 'curriculum'],
  authorName: 'Leandro Palazzolo',
  twitterUsername: '_LeaplgZ',
  githubUsername: 'leapalazzolo',
  authorAvatar: '/images/avatar.jpg',
  skills: [
    {
      name: 'Python',
      level: 90
    },
    {
      name: 'DevOps',
      level: 85
    },
    {
      name: 'Azure',
      level: 85
    },
    {
      name: 'React',
      level: 75
    },
    {
      name: 'MongoDB',
      level: 65
    }
  ],
  courses: [
    {
      name: "CCNA",
      date: "22/10/2018",
      license: "CSO1234",
      url: "http://asd.com",
      certification: true,
    },

    {
      name: "RHEL",
      date: "22/10/2018",
      certification: false,
    }
  ],
  jobs: [
    {
      company: "Lendico",
      begin: {
        month: 'apr',
        year: '2018'
      },
      duration: null,
      occupation: "Frontend developer",
      description: "I integrate the Frontend team responsible for developing and maintaining the online lending platform."
  
    }, {
      company: "Anapro",
      begin: {
        month: 'dec',
        year: '2016'
      },
      duration: '1 yr e 5 mos',
      occupation: "Fullstack developer",
      description: "Development and maintenance, corrective and preventive, of web applications for the real estate market."
    }, {
      company: "Anapro",
      begin: {
        month: 'set',
        year: '2012'
      },
      duration: '4 yrs e 3 mos',
      occupation: "Support Technician",
      description: "Responsible for the implementation and parameterization of the system, training and customer support. Acting also in person in real estate launches guaranteeing the success and good use of the tool."
  
    },
    /* ... */
  ],
  social: {
    twitter: "https://twitter.com/_franciscodf",
    linkedin: "https://www.linkedin.com/in/santos-francisco",
    github: "https://github.com/santosfrancisco",
    email: "yoshi.df@gmail.com"
  },
  siteUrl: 'https://santosfrancisco.github.io/gatsbystarter-cv',
  pathPrefix: '/gatsby-starter-cv', // Note: it must *not* have a trailing slash.
  siteCover: '/images/cover.jpeg',
  googleAnalyticsId: 'UA-000000000-1',
  background_color: '#ffffff',
  theme_color: '#25303B',
  display: 'minimal-ui',
  icon: 'src/assets/gatsby-icon.png',
  headerLinks: [
    {
      label: 'Leandro Palazzolo',
      url: '/',
    }
  ]
}