module.exports = {
  future: {
    hoverOnlyWhenSupported: true
  },
  theme: {
    extend: {
      fontFamily: {
        sans: ['Geist', '"Helvetica Neue"', 'Arial', 'sans-serif'],
        mono: ['"Geist Mono"', 'SFMono-Regular', 'Menlo', 'Consolas', 'monospace']
      }
    }
  },
  plugins: [
    require('daisyui')
  ],
  daisyui: {
    themes: [
      {
        'docuseal': {
          'color-scheme': 'light',
          'primary': '#000000',
          'primary-content': '#ffffff',
          'secondary': '#5c5c5c',
          'secondary-content': '#ffffff',
          'accent': '#000000',
          'accent-content': '#ffffff',
          'neutral': '#000000',
          'neutral-content': '#ffffff',
          'base-100': '#ffffff',
          'base-200': '#f2f2f2',
          'base-300': '#e8e8e8',
          'base-content': '#000000',
          'info': '#1f5fc4',
          'success': '#0d6e43',
          'warning': '#8a5a00',
          'error': '#c4271a',
          '--rounded-btn': '8px',
          '--rounded-box': '8px',
          '--tab-border': '1px',
          '--tab-radius': '4px'
        }
      }
    ]
  }
}
