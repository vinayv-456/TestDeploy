import { THEMES } from '.';

export const colors = {
  light: {
    body: '#ffff',
    contrast: {
      primary: '#4A4A4A',
      darkPrimary: '#2E2E2E',
      lightSecondary: '#cbcbcf',
      secondary: '#9F9F9F',
      darkSecondary: '#717171',
      tertiary: '#FFFFFF',
      lightQuaternary: '#202020',
      quaternary: '#000000',
      darkQuaternary: '#141414',
      whiteNgray: '#FFFFFF'
    },
    core: {
      primary: '#191919',
      secondary: '#EEEFF5',
      pureSecondary: '#ffffff',
      loginPrimary: '#4F4ED0'
    },
    aux: {
      primary: '#191919',
      secondary: '#F9F9F9',
      darkSecondary: '#E4E5EB'
    },
    filter: {
      normal: '#EFEFEF',
      hover: '#E8E8E8',
      activeSelect: '#828282',
      prevSelect: '#C8C8C8',
      group: '#F6F6F6'
    },
    table: {
      header: '#f3f2f8',
      normal: '#EAEBF2',
      hightlight: '#dedfe2'
    },

    text: {
      primary: '#000000',
      gray: '#4A4A4A'
    },

    errorText: '#E91D15',
    shadow: 'rgba(0,0,0,0.1)',
    shadowContrast: 'rgba(255, 255, 255, 0.1)',
    cardBg: '#FFFFFF',
    tagBg: '#F9F9F9',
    black: '#000000',
    shadowout: '-5px -5px 11px #FFFFFFF5, 5px 5px 10px #0000000d',
    shadowin: 'inset 6px 6px 6px rgba(0, 0, 0, 0.35), inset -6px -6px 6px #ffffff14'
  },
  dark: {
    body: '#1D1E21',

    contrast: {
      primary: '#E8E8F8', // contrast for core secondary color
      darkPrimary: '#FFFFFF',
      lightSecondary: '#383838',
      secondary: '#9B9B9B', // contrast-2 for core secondary color
      darkSecondary: '#9A9A9A',
      tertiary: '#FFFFFF', // contrast for core primary color
      lightQuaternary: '#FFFFFF',
      quaternary: '#FFFFFF',
      darkQuaternary: '#FFFFFF',
      whiteNgray: '#585858' // for white and gray contrast
    },
    core: {
      primary: '#0377BD',
      secondary: '#1D1E21',
      pureSecondary: '#000000',
      loginPrimary: '#4F4ED0'
    },

    aux: {
      primary: '#325A72',
      secondary: '#282A31',
      darkSecondary: '#3B3E48'
    },
    filter: {
      normal: '#3B3E48',
      hover: '#33363f',
      activeSelect: '#325A72',
      prevSelect: '#263b47',
      group: '#31343D'
    },
    table: {
      header: '#1D1E21',
      normal: '#141414',
      hightlight: '#000000'
    },
    lightGreyBg: '#656874',
    text: {
      primary: '#FFFFFF',
      gray: '#BCBCBC'
    },
    errorText: '#E91D15',
    shadow: 'rgba(255, 255, 255, 0)',
    shadowContrast: 'rgba(0, 0, 0, 0.1)',
    cardBg: '#282A31',
    black: '#000000',
    tagBg: '#282A31',
    shadowout: '-5px -5px 15px #262930cb, 5px 5px 11px #0a0b0dbf',
    shadowin: 'inset 6px 6px 6px rgba(0, 0, 0, 0.35), inset -6px -6px 6px #ffffff14'
    // ${({ theme }) => theme.contrast.secondary}
    // filter unselected in filter
    // secondary: '#3B3E48'
    //  #31343D
    // accent: {
    //   primary: '#FF9960',
    //   secondary: '#141414'//sooty
    // }
  }
};

export const borderColors = {};

export const shadow = {
  out: '-5px -5px 15px #ffffffcb, 5px 5px 10px #0000000d',
  in: 'inset 6px 6px 6px rgba(0, 0, 0, 0.35), inset -6px -6px 6px #ffffff14',
  inputInset: 'inset 2px 2px 4px #0000001a, inset -2px -2px 4px #ffffff69'
};
