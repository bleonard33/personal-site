export const sections = [
  {
    title: 'About',
    icon: 'user-alt'
  },
  {
    title: 'Experience',
    icon: 'code-branch'
  },
  {
    title: 'Education',
    icon: 'graduation-cap'
  },
  {
    title: 'Skills',
    icon: 'code'
  },
  {
    title: 'Contact',
    icon: 'address-card'
  },
]

export const contact = [
  {
    name: 'Email',
    handle: 'brendanl@alumni.unc.edu',
    link: 'mailto:brendanl@alumni.unc.edu',
    icon: 'envelope',
    nav: true
  },
  {
    name: 'Github',
    handle: 'bleonard33',
    link: 'https://github.com/bleonard33',
    icon: ['fab', 'github'],
    nav: true
  },
  // {
  //   name: 'AngelList',
  //   handle: '/brendanl',
  //   link: 'https://angel.co/brendanl',
  //   icon: ['fab', 'angellist'],
  //   nav: false
  // },
  {
    name: 'LinkedIn',
    handle: 'Brendan Leonard',
    link: 'https://linkedin.com/in/brendan-leonard',
    icon: ['fab', 'linkedin'],
    nav: true
  },
  // {
  //   name: 'Instagram',
  //   handle: '@bml330',
  //   link: 'https://www.instagram.com/bml330/',
  //   icon: ['fab', 'instagram'],
  //   nav: false
  // },
  // {
  //   name: 'Résumé',
  //   handle: 'Résumé',
  //   link: 'https://docs.google.com/document...,
  //   icon: 'file-text-o',
  //   nav: false
  // }
]

export const about = {
  "lede": "Hi, I'm Brendan.",
  "blurb": [
    "I'm a social scientist by training and a software developer by accident. I currently work as a part of a small, agile development team with the Growth Lab of the Harvard Kennedy School. I am concurrently wrapping up a master's degree in government part-time and hold a bachelor's degree in economics from UNC-Chapel Hill.",
    "Since the internship where I wrote my first lines of code, my career has been focused on developing interesting and unique data-driven tools. I have spent several years working in both startups and single-digit member Agile teams. I have had the opportunity to wear many hats across the lifecycle of software development and take the lead on developing full-scale software systems. I thrive off of being thrown into unfamiliar territory and coming up with solutions to challenging problems.",
    "Outside of work, I enjoy cooking, traveling, video games, learning how to create things, attempting to catch up on my massive backlog of unread books, and hiking with my rescue dog, Zeus."
  ]
}

export const jobs = [
  {
    company: 'Growth Lab, Harvard Kennedy School',
    title: 'Back-End & Data Developer',
    startDate: 'March 2018',
    endDate: 'Present',
    location: 'Cambridge, MA',
    website: 'growthlab.cid.harvard.edu',
    description: [
      "Manage data pipelines pertaining to various platforms created by the Growth Lab including the flagship Atlas of Economic Complexity",
      "Administer API, database, and server infrastructure for the Lab's various data visualization tools",
      "Collaborate with researchers to conduct analysis and exploratory research contributing to platform features",
      "Created data-driven narrative explaining 130+ countries' economic positions using dynamically-generated text",
      "Twice-shortlisted for Kantar Information is Beautiful Awards",
    ],
    projects: [
      {
        title: 'Atlas of Economic Complexity',
        description: "",
        url: "https://atlas.cid.harvard.edu",
        action: "Go"
      },
      {
        title: 'Atlas Country Profiles',
        description: "",
        url: "https://atlas.cid.harvard.edu/countries/43",
        action: "Go"
      },
      {
        title: 'Growth Lab VizHub',
        description: "",
        url: "https://growthlab.app",
        action: "Go"
      },
      {
        title: 'Pandas to Postgres',
        description: "",
        url: "https://github.com/cid-harvard/pandas-to-postgres",
        action: "Go"
      },
    ]
  },
  {
    company: 'Numerated Growth Technologies',
    title: 'Data Scientist',
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
    company: 'Eastern Bank',
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
    company: 'Carolina For The Kids Foundation',
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
    university: "Harvard University",
    type: "Candidate, Master of Liberal Arts",
    field: "Government",
    city: "Cambridge",
    state: "MA",
    startDate: "June 2018",
    endDate: "May 2021",
    gpa: 3.9,
    courses: [
      "Policy Writing and Analysis Capstone (Fall 2020 / Spring 2021)",
      "American Presidential Elections (Fall 2020)",
      "Cyberpolitics (Spring 2020)",
      // "Democracy and Its Discontents (Spring 2020)",
      "Data Science for Political Campaigns (Fall 2019)",
      // "Urban Policy (Fall 2019)",
      "Intellectual Property (Summer 2019)",
      "International Conflict and Cooperation (Summer 2019)",
      // "Introduction to Graduate Studies in Government, History, and International Relations (Spring 2019)",
      // "American Government (Fall 2018)",
      // "Introduction to Quantitative Methods (Summer 2018)"
    ],
    projects: [
      {
        title: '"This Claim About Election Fraud is Disputed"',
        subtitle: "Mitigating the Spread of Disinformation through Social Media in American Electoral Contexts",
        description: "Policy Writing and Analysis Precapstone (Fall 2020)",
        url: process.env.PUBLIC_URL + '/papers/leonard_disinformation_social_media.pdf',
        action: "Download"
      },
      {
        title: 'SMS and GOTV',
        subtitle: "Analyzing the Impact of Text Messaging on Voter Participation",
        description: "Cyberpolitics (Spring 2020)",
        url: process.env.PUBLIC_URL + '/papers/leonard_sms_gotv.pdf',
        action: "Download"
      },
      {
        title: 'Money is (Political) Power',
        subtitle: "Unrestricted Campaign Spending as a Central Threat to Democratic Function",
        description: "Democracy and Its Discontents (Spring 2020)",
        url: process.env.PUBLIC_URL + '/papers/leonard_money_democracy.pdf',
        action: "Download"
      },
      {
        title: 'Addressing Cyclist Safety on Massachusetts Ave. as a Means of Equitable Development',
        subtitle: "",
        description: "Urban Policy (Fall 2019)",
        url: process.env.PUBLIC_URL + '/papers/leonard_mass_ave_cycling.pdf',
        action: "Download"
      },
    ]
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
    type: 'Research & Data',
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
