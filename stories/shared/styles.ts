export const color = {
  // Monochrome
  black_10: '#F5F5F5',
  black_20: '#E8E8E8',
  black_40: '#CDCDCD',
  black_60: '#757575',
  black_80: '#4D4D4D',

  black_100: '#000000',
  red_100: '#C33022',
  green_100: '#3F5A3F',
  white_100: '#FFFFFF',
};

export const typography = {
  type: {
    primary: 'avenir-medium, avenir-medium-italic, avenir-regular, sans-serif',
    code: 'avenir-medium, avenir-medium-italic, avenir-regular, sans-serif',
  },
  weight: {
    regular: '500',
    bold: '700',
    extrabold: '800',
  },
  size: {
    xs: 12,
    sm: 14,
    md: 16,
    lg: 22,
    xl: 30,
    xxl: 44,
    xxxl: 66,
    '5xl': 40,
    '6xl': 44,
    '7xl': 72,
    '8xl': 100,
  },
  sampleText: `Aa Bb Cc Dd Ee Ff Gg Hh Ii Jj Kk Ll Mm Nn Oo Pp Qq Rr Ss Tt Uu Vv Ww Xx Yy Zz 0123456789&%$£`,
  singleSamples: {
    xxxl: ['xxxl', 'Extra Extra', 'Extra Large', '66/74'],
    xxl: ['xxl', 'Extra Extra Large', '44/52'],
    xl: ['xl', 'Extra Large', '30/36'],
    lg: ['lg', 'Large', '22/28'],
    md: ['md', 'Medium', '16/24'],
    sm: ['sm', 'Small', '14/20'],
    xs: ['xs', 'Extra Small', '12/18'],
  },
} as const;
