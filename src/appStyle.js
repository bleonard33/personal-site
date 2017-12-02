export const appStyle = {};

appStyle.fonts = {
  slab: "'Slabo 13px', sans-serif",
  sans: "'Source Sans Pro', sans-serif",
  mono: "'Inconsolata', monospace", 
};

appStyle.colors = {
  ltgrey: '#e7e7e7',
  blue: '#6CD4FF',
  charcoal: '#373F51',

  about: '#87D68D',
  experience: '#8A4F7D',
  education: '#7BAFD4',
  skills: '#F03A47',
  contact: '#FFD275',
};

appStyle.main = {
  fontFamily: appStyle.fonts.sans
}

appStyle.body = {
  marginTop: '51px'
}

appStyle.nav = {
  marginBottom: 0,
  borderTop: 0,
  backgroundColor: 'white',
  textAlign: 'center',
  brand: {
    fontFamily: appStyle.fonts.slab,
    fontSize: '16pt',
    color: appStyle.colors.charcoal,
  },
  sectionIcon: {
    fontSize: '1.2em',
    textAlign: 'center',
    color: 'white',
  },
  sectionTab: {
    textAlign: 'center',
    fontSize: '12pt'
  },
  socialIcon: {
    fontSize: '1.2em',
    textAlign: 'center',
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
  fontFamily: appStyle.fonts.slab,
  textAlign: 'center'
}

appStyle.subheader = {
  fontSize: '16pt',
  fontFamily: appStyle.fonts.sans,
}

appStyle.skills = {
  fontFamily: appStyle.fonts.mono,
  stars: {
    color: appStyle.colors.skills,
    float: 'right'
  }
}

appStyle.contact = {
  fontSize: '16pt',
}