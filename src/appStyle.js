export const appStyle = {};

appStyle.fonts = {
  header: "'Slabo 13px', sans-serif",
  body: "'Source Sans Pro', sans-serif",
  mono: "'Inconsolata', monospace"
};

appStyle.colors = {
  mainBackground: '#1b2b34',
  mainText: '#e7e7e7',

  headerBackground: '#152128',
  headerText: 'white',

  footerBackground: '#152128',
  footerText: 'white',

  about: '#067BC2',
  experience: '#49DCB1',
  education: '#BA274A',
  skills: '#F6E27F',
  contact: '#D9DBF1',
};

appStyle.main = {
  fontFamily: appStyle.fonts.body,
  fontSize: '12pt',
  backgroundColor: appStyle.colors.mainBackground,
  color: appStyle.colors.mainText,
}

appStyle.nav = {
  marginBottom: 0,
  borderTop: 0,
  backgroundColor: appStyle.colors.headerBackground,
  textAlign: 'center',
  border: 'none',
  brand: {
    fontFamily: appStyle.fonts.header,
    fontSize: '16pt',
    color: appStyle.colors.headerText,
  },
  sectionIcon: {
    fontSize: '1.2em',
    textAlign: 'center',
    color: 'white',
  },
  sectionTab: {
    textAlign: 'center',
    fontSize: '12pt',
    color: appStyle.colors.headerText,
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
  paddingLeft: '20px',
  paddingBottom: '20px'
}

appStyle.header = {
  fontSize: '20pt',
  fontFamily: appStyle.fonts.header,
  fontWeight: 900,
  textAlign: 'left'
}

appStyle.subheader = {
  fontSize: '16pt',
  fontFamily: appStyle.fonts.body,
  color: appStyle.colors.charcoal,
}

appStyle.job = {
  icon: {
    color: appStyle.colors.experience,
  },
  detail: {
    paddingRight: '1em',
  },
  link: {
    color: appStyle.colors.mainText,
  },
  bullets: {
    fontFamily: appStyle.fonts.mono,
  },
}

appStyle.education = {
  icon: {
    color: appStyle.colors.education,
  },
  detail: {
    paddingRight: '1em',
  },
  bullets: {
    fontFamily: appStyle.fonts.mono,
  },
}

appStyle.skills = {
  fontFamily: appStyle.fonts.mono
}

appStyle.contact = {
  fontSize: '16pt',
  color: appStyle.colors.mainText,
  icon: {
    color: appStyle.colors.contact,
  }
}

appStyle.footer = {
  textAlign: 'center',
  color: appStyle.colors.footerText,
  backgroundColor: appStyle.colors.footerBackground,
  padding: '1em',
}
