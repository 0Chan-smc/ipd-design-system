import { create } from '@storybook/theming/create';

export default create({
  base: 'light',
  brandTitle: 'My custom Storybook',
  brandUrl: 'https://example.com',
  brandImage: '	https://thesmc.co.kr/wp-content/themes/thesmc/images/common/logo.png',
  brandTarget: '_self',

  //
  colorPrimary: '#3A10E5',
  colorSecondary: '#585C6D',

  // UI  
  appBg: 'white',
  appContentBg: 'white',
  appPreviewBg: '#ffffff',
  appBorderColor: 'grey',
  appBorderRadius: 4,

  // Typography
  fontBase: '"Noto Sans KR", sans-serif',
  fontCode: 'monospace',

  // Text colors
  textColor: 'black',
  textInverseColor: 'white',

  // Toolbar default and active colors
  barTextColor: '#343434',
  barSelectedColor: '#377f95',
  barHoverColor: '#585C6D',
  barBg: 'white',

  // Form colors
  inputBg: 'white',
  inputBorder: '#00526e',
  inputTextColor: 'black',
  inputBorderRadius: 4,
});