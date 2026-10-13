module.exports = {
  future: {
    hoverOnlyWhenSupported: true
  },
  plugins: [
    require('daisyui')
  ],
  daisyui: {
    themes: [
      {
        docuseal: {
          'color-scheme': 'light',
          primary: '#2a5bff',
          'primary-content': '#ffffff',
          secondary: '#a855f7',
          accent: '#00d4ff',
          neutral: '#0a0b18',
          'base-100': '#f7f8fc',
          'base-200': '#eceffa',
          'base-300': '#dfe4f5',
          'base-content': '#0a0b18',
          '--rounded-btn': '1.9rem',
          '--tab-border': '2px',
          '--tab-radius': '.5rem'
        }
      }
    ]
  }
}
