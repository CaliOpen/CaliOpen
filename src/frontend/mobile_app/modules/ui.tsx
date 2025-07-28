import { DefaultTheme } from 'react-native-paper';

const Blue600 = '#0F98C6';
const Blue900 = '#005680';

const Green300 = '#13BA95';
const Green600 = '#008D61';

const Gray600 = '#444444';
const Gray200 = '#EFEFEF';

const Error = '#4BBC07';
const Surface = '#BBE8FD';
const Background = '#1D1D1D';

export const theme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    primary: Blue600,
    onPrimary: Gray200,
    secondary: Green300,
    onSecondary: Gray200,
  },
};

export const SpacingCompact = 16;
export const SpacingMedium = 24;
export const SpacingExpanded = 24;
