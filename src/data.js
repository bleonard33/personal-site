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
  {
    name: 'AngelList',
    handle: '/brendanl',
    link: 'https://angel.co/brendanl',
    icon: 'fa-angellist',
    nav: false
  },
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
  {
    name: 'Instagram',
    handle: '@bml330',
    link: 'https://www.instagram.com/bml330/',
    icon: 'fa-instagram',
    nav: false
  },
  {
    name: 'Résumé',
    handle: 'Résumé',
    link: 'https://docs.google.com/document/d/156gk-htdRILnZSx3KKp05uAWdw99Gw7NGWROTTHXSVA/edit?usp=sharing',
    icon: 'fa-file-text-o',
    nav: false
  }
]

export const jobs = [
  {
    name: 'Center for International Development at Harvard University',
    title: 'Backend Developer & Data Specialist',
    startDate: 'March 2018',
    endDate: 'Present',
    location: 'Cambridge, MA',
    website: 'cid.harvard.edu',
    description: [
      'Supports the Growth Lab research and software development initiatives through back-end technologies and data analysis',
      'Develops enhancements for the Atlas of Economic Complexity',
    ]
  },
  {
    name: 'Numerated Growth Technologies',
    title: 'Software Developer, Data Team',
    startDate: 'April 2017',
    endDate: 'March 2018',
    location: 'Boston, MA',
    website: 'numerated.com',
    description: [
      'Initiated the conversion of a data-driven email marketing application to a three-tiered RESTful architecture using React, Flask, and PostgreSQL',
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
      'Led a team in the design and creation of an data-driven enterprise sales mining tool using Django, PostgreSQL, and AngularJS',
      'Completed data analysis projects using both supervised and unsupervised machine learning methods presented to bank leadership',
      'Used natural language processing techniques to clean financial data and predict traits about customer habits',
      'Architected a web scraping cluster on AWS EC2 to mine data for regulatory processes',
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

export const skills = [
  {
    type: 'Back End',
    skills: [
      {
        name: 'Python',
      },
      {
        name: 'PostgreSQL',
      },
      {
        name: 'Java',
      },
      {
        name: 'Flask',
      },
      {
        name: 'Scikit-Learn',
      },
      {
        name: 'Django',
      },
      {
        name: 'Numpy',
      },
      {
        name: 'Pandas',
      },
      {
        name: 'Selenium',
      },
      {
        name: 'Celery',
      }
    ]
  },
  {
    type: 'Front End',
    skills: [
      {
        name: 'React',
      },
      {
        name: 'HTML/CSS',
      },
      {
        name: 'JavaScript',
      },
      {
        name: 'JSX',
      },      
      {
        name: 'Bootstrap',
      },
      {
        name: 'Sass',
      },
      {
        name: 'AngularJS',
      },
      {
        name: 'D3',
      },
      {
        name: 'NodeJS',
      },
    ]
  },
  {
    type: 'Tools & Environments',
    skills: [
      {
        name: 'AWS EC2',
      },
      {
        name: 'Git/Github',
      },
      {
        name: 'AWS RDS',
      },
      {
        name: 'macOS',
      },
      {
        name: 'Linux',
      }
    ]
  },
  {
    type: 'Software',
    skills: [
      {
        name: 'Adobe Illustrator',
      },
      {
        name: 'Adobe PhotoShop',
      },
      {
        name: 'Stata',
      },
    ]
  }
]