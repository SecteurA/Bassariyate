export const colors = {
  skyBlue: '#639cb0', // Updated accent color
  lavender: '#E6E6FA',
  powderPink: '#FFE4E1',
  white: '#FFFFFF',
} as const;

export const theme = {
  primary: colors.skyBlue,
  secondary: colors.lavender,
  accent: colors.skyBlue, // Using skyBlue as accent
  background: colors.white,
} as const;