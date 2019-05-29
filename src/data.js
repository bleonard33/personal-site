export const sections = [
  {
    title: 'About',
    color: '#87D68D',
    icon: 'fa-user-circle-o'
  },
  {
    title: 'Experience',
    color: '#8A4F7D',
    icon: 'fa-code-fork'
  },
  {
    title: 'Education',
    color: '#7BAFD4',
    icon: 'fa-graduation-cap'
  },
  {
    title: 'Skills',
    color: '#F03A47',
    icon: 'fa-database'
  },
  {
    title: 'Contact',
    color: '#FFD275',
    icon: 'fa-vcard'
  },
]

export const contact = [
  {
    name: 'Github',
    handle: '/bleonard33',
    link: 'https://github.com/bleonard33',
    icon: 'fa-github',
    nav: true
  },
  // {
  //   name: 'AngelList',
  //   handle: '/brendanl',
  //   link: 'https://angel.co/brendanl',
  //   icon: 'fa-angellist',
  //   nav: false
  // },
  {
    name: 'LinkedIn',
    handle: 'Brendan Leonard',
    link: 'https://linkedin.com/in/brendan-leonard',
    icon: 'fa-linkedin',
    nav: true
  },
  {
    name: 'Email',
    handle: 'brendanl@alumni.unc.edu',
    link: 'mailto:brendanl@alumni.unc.edu',
    icon: 'fa-envelope',
    nav: true
  },
  // {
  //   name: 'Instagram',
  //   handle: '@bml330',
  //   link: 'https://www.instagram.com/bml330/',
  //   icon: 'fa-instagram',
  //   nav: false
  // },
  // {
  //   name: 'Résumé',
  //   handle: 'Résumé',
  //   link: 'https://docs.google.com/document...,
  //   icon: 'fa-file-text-o',
  //   nav: false
  // }
]

export const about = {
  "lede": "Hi, I'm Brendan.",
  "blurb": [
    "I'm a social scientist by training and a software developer by accident. I currently work as a part of the development team within the Growth Lab of the Center for International Development at Harvard University. I'm also working towards a master's degree in government and hold a bachelor's in economics.",
    "I wrote my first lines of code during a data science internship in college and my career has been focused on developing interesting and unique data-driven tools ever since. The majority of my time since graduating has been in the worlds of startups and single-digit member Agile teams, meaning I've gotten to jump around quite a bit and gotten tastes of a myriad of projects from systems administration to UX design to machine learning. I love being thrown into unfamiliar territory and solving new problems.",
    "Outside of work, I enjoy developing new cooking skills, traveling the world, sewing, and attempting to catch up on my massive backlog of unread books."
  ]
}

export const jobs = [
  {
    name: 'Center for International Development at Harvard University',
    title: 'Back End Developer & Data Specialist',
    startDate: 'March 2018',
    endDate: 'Present',
    location: 'Cambridge, MA',
    website: 'cid.harvard.edu',
    description: [
      "Specify and manipulate data required for new feature enhancements for our flagship tool, the Atlas of Economic Complexity",
      "Expand, maintain, and improve data pipeline including consolidation of various third-party data and internally-developed calculations",
      "Administer all back end infrastructure, including our API database servers",
      "Support software development pertaining to the Center's research projects"
    ]
  },
  {
    name: 'Numerated Growth Technologies',
    title: 'Data Science Analyst',
    startDate: 'April 2017',
    endDate: 'March 2018',
    location: 'Boston, MA',
    website: 'numerated.com',
    description: [
      'Initiated the conversion of a data-driven email marketing application to a three-tiered RESTful architecture',
      'Aided in the creation of an API used by partner banks to securely access machine-learned insights',
      'Administered team AWS EC2 and RDS systems',
      'Facilitated regression and unit testing for team applications',
    ]
  },
  {
    name: 'Eastern Bank',
    title: 'Data Science Analyst',
    startDate: 'June 2014',
    endDate: 'April 2017',
    location: 'Boston, MA',
    website: 'easternbank.com',
    description: [
      'Led a team in the design and creation of an data-driven enterprise sales mining tool',
      'Completed data analysis projects using both supervised and unsupervised machine learning methods presented to bank leadership',
      'Used natural language processing techniques to clean financial data and predict traits about customer habits',
      'Architected a web scraping cluster to mine data to facilitate automated regulatory checks',
    ]
  },
  {
    name: 'Carolina For The Kids Foundation',
    title: 'Director of Publicity',
    startDate: 'March 2013',
    endDate: 'March 2015',
    location: 'Chapel Hill, NC',
    website: 'carolinaftk.org',
    description: [
      'Served two terms on the Executive Board of a non-profit raising over half a million dollars per year',
      'Coordinated a renaming and rebranding effort including designing a logo, website, and other identity materials',
      'Managed all communication channels including social media, graphic materials, multimedia, web presence, media relations, and email marketing',
      'Orchestrated a one-day fundraising push that raised over $38,000',
    ]
  },
  // {
  //   name: 'Carolina Union',
  //   title: 'Design Assistant',
  //   startDate: 'August 2012',
  //   endDate: 'August 2014',
  //   location: 'Chapel Hill, NC',
  //   website: 'carolinaunion.unc.edu',
  //   description: [
  //     'Created print and digital designs for various university departments and organizations using Adobe Creative Suite',
  //     'Worked with full-time staff and clients to revise materials to specifications'
  //   ]
  // }
]

export const degrees = [
  {
    university: "Harvard University, Extension School",
    type: "Master of Liberal Arts",
    field: "Government",
    city: "Cambridge",
    state: "MA",
    startDate: "June 2018",
    endDate: "May 2021 (Expected)",
    gpa: 4.0
  },
  {
    university: "The University of North Carolina at Chapel Hill",
    type: "Bachelor of Arts",
    field: "Economics",
    city: "Chapel Hill",
    state: "NC",
    startDate: "August 2011",
    endDate: "May 2015",
    gpa: 3.3
  }
]

export const skills = [
  {
    type: 'Back End',
    skills: [
      'Python',
      'PostgreSQL',
      'Pandas',
      'Flask',
      'Django',
      'SQLAlchemy',
      'Selenium',
      'Ansible'
    ]
  },
  {
    type: 'Research',
    skills: [
      'Jupyter',
      'Numpy',
      'Scikit-Learn'
    ]
  },
  {
    type: 'Front End',
    skills: [
      'React',
      'HTML/CSS',
      'JavaScript',     
      'Bootstrap',
      'Sass',
      'AngularJS',
      'D3',
      'NodeJS'
    ]
  },
  {
    type: 'Tools & Environments',
    skills: [
      'Git/Github',
      'AWS',
      'macOS',
      'Linux'
    ]
  }
]
