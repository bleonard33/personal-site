export const appStyle = {};

appStyle.fonts = {
  header: "'Slabo 13px', sans-serif",
  body: "'Source Sans Pro', sans-serif",
  mono: "'Inconsolata', monospace"
};

appStyle.colors = {
  mainBackground: '#1b2b34', // Gunmetal
  mainText: '#e7e7e7', // Platinum

  headerBackground: '#152128', // Charleston Green
  headerText: 'white',

  footerBackground: '#152128', // Charleston Green
  footerText: 'white',

  cardBackground: '#0E161B', // Rich Black

  linkText: '#4B9CD3', // Carolina Blue

  about: '#067BC2', // Star Command Blue
  experience: '#D62246', // Carmine
  education: '#4B9CD3', // Carolina Blue
  skills: '#F6E27F', // Yellow Crayola
  contact: '#49DCB1', // Medium Aquamarine
};

appStyle.main = {
  fontFamily: appStyle.fonts.body,
  fontSize: '12pt',
  backgroundColor: appStyle.colors.mainBackground,
  color: appStyle.colors.mainText,
}

appStyle.nav = {
  padding: 0,
  borderTop: 0,
  backgroundColor: appStyle.colors.headerBackground,
  textAlign: 'center',
  border: 'none',
  brand: {
    fontFamily: appStyle.fonts.header,
    fontSize: '16pt',
    color: appStyle.colors.headerText,
    paddingLeft: '1em',
    paddingTop: '0.25em',
    paddingBottom: '0.25em',
  },
  item: {
    paddingTop: '0.5em',
    paddingBottom: '0.5em',
    marginLeft: '0.25em',
    marginRight: '0.25em',
  },
  toggle: {
    color: 'white'
  },
  sectionIcon: {
    fontSize: '12pt',
    textAlign: 'center',
    color: 'white',
  },
  sectionTab: {
    textAlign: 'center',
    fontSize: '12pt',
    color: appStyle.colors.headerText,
  },
  socialNav: {
    paddingRight: '1em'
  },
  socialIcon: {
    fontSize: '1.2em',
    textAlign: 'center',
    color: appStyle.colors.headerText,
  }
}

appStyle.section = {
  borderLeftWidth: '16px',
  borderLeftStyle: 'solid',
  paddingTop: '20px',
  paddingBottom: '20px',
  idLinkPadding: {
    marginTop: '-1.5em',
    paddingBottom: '1.5em',
    display: 'block'
  }
}

appStyle.h1 = {
  fontSize: '20pt',
  fontFamily: appStyle.fonts.header,
  fontWeight: 700,
  textAlign: 'left',
  color: appStyle.colors.headerText
}

appStyle.h2 = {
  fontSize: '18pt',
  fontFamily: appStyle.fonts.body,
  color: appStyle.colors.headerText,
}

appStyle.h3 = {
  fontSize: '14pt',
  fontFamily: appStyle.fonts.body,
  color: appStyle.colors.headerText
}

appStyle.padRow = {
  paddingBottom: '1em'
}

appStyle.project = {
  deck: {
    paddingTop: '1em'
  },
  card: {
    backgroundColor: appStyle.colors.cardBackground,
    width: '18rem'
  },
  button: {
    border: 'none',
  },
}

appStyle.job = {
  icon: {
    color: appStyle.colors.experience,
  },
  link: {
    color: appStyle.colors.mainText,
  },
  bullets: {
    fontFamily: appStyle.fonts.mono,
    marginBottom: 0,
  },
}

appStyle.education = {
  icon: {
    color: appStyle.colors.education,
  },
  bullets: {
    fontFamily: appStyle.fonts.mono,
    marginBottom: 0,
  },
}

appStyle.skills = {
  fontFamily: appStyle.fonts.mono
}

appStyle.contact = {
  fontSize: '14pt',
  backgroundColor: appStyle.colors.contact,
  marginLeft: '0.5em',
  marginRight: '0.5em'
}

appStyle.footer = {
  textAlign: 'center',
  color: appStyle.colors.footerText,
  backgroundColor: appStyle.colors.footerBackground,
  padding: '1em',
}
