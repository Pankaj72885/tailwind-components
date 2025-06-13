// Theme configuration

const theme = {
  name: 'theme',
  description: 'Theme configuration including colors, spacing, and shadows',
  files: ['colors.css', 'spacing.css', 'shadows.css'],
  colors: {
    primary: {
      50: '#eff6ff',
      100: '#dbeafe',
      200: '#bfdbfe',
      300: '#93c5fd',
      400: '#60a5fa',
      500: '#3b82f6',
      600: '#2563eb',
      700: '#1d4ed8',
      800: '#1e40af',
      900: '#1e3a8a',
      950: '#172554'
    },
    success: {
      50: '#f0fdf4',
      500: '#22c55e',
      600: '#16a34a',
      700: '#15803d'
    },
    danger: {
      50: '#fef2f2',
      500: '#ef4444',
      600: '#dc2626',
      700: '#b91c1c'
    },
    warning: {
      50: '#fefce8',
      500: '#eab308',
      600: '#ca8a04',
      700: '#a16207'
    },
    info: {
      50: '#f0f9ff',
      500: '#06b6d4',
      600: '#0891b2',
      700: '#0e7490'
    }
  },
  fontFamily: {
    component: '"Inter Variable", "Inter", system-ui, sans-serif',
    mono: '"JetBrains Mono Variable", "JetBrains Mono", ui-monospace, monospace'
  },
  spacing: {
    18: '4.5rem',
    88: '22rem',
    112: '28rem',
    128: '32rem'
  },
  textShadow: {
    sm: '0 1px 2px rgb(0 0 0 / 0.05)',
    DEFAULT: '0 1px 3px rgb(0 0 0 / 0.1), 0 1px 2px rgb(0 0 0 / 0.06)',
    md: '0 4px 6px rgb(0 0 0 / 0.07), 0 2px 4px rgb(0 0 0 / 0.06)',
    lg: '0 10px 15px rgb(0 0 0 / 0.1), 0 4px 6px rgb(0 0 0 / 0.05)',
    xl: '0 20px 25px rgb(0 0 0 / 0.1), 0 8px 10px rgb(0 0 0 / 0.04)'
  },
  animation: {
    fadeIn: 'fadeIn 0.5s ease-in-out',
    slideUp: 'slideUp 0.3s ease-out',
    slideIn: 'slideIn 0.4s cubic-bezier(0.16, 1, 0.3, 1)',
    bounceIn: 'bounceIn 0.6s ease-out',
    scaleIn: 'scaleIn 0.2s ease-out',
    shimmer: 'shimmer 2s linear infinite'
  },
  shadow: {
    glow: '0 0 20px rgb(59 130 246 / 0.5)',
    glowLg: '0 0 40px rgb(59 130 246 / 0.4)',
    innerLg: 'inset 0 4px 8px rgb(0 0 0 / 0.1)'
  }
};

export default theme;