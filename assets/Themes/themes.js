import { palette } from './palette';
export default Themes = {
  light: {
    bg: palette.lightGray,
    bgSecondary: palette.white,
    text: palette.black,
    textSecondary: palette.white,
    statusBar: 'dark-content',
    navigation: palette.black,
    shadows: {
      shadowColor: palette.black,
      shadowOpacity: 0.4,
      shadowRadius: 5,
      shadowOffset: { width: -1, height: 5 },
    },
  },
  dark: {
    bg: palette.lightBlack,
    bgSecondary: palette.lighterBlack,
    text: palette.white,
    textSecondary: palette.black,
    statusBar: 'light-content',
    navigation: palette.white,
    shadows: {
      shadowColor: palette.black,
      shadowOpacity: 0.4,
      shadowRadius: 5,
      shadowOffset: { width: -1, height: 5 },
    },
  },
};
