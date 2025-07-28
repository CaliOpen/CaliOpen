import { DefaultTheme } from 'react-native-paper';

const Blue600 = '#0F98C6';
const Blue900 = '#005680';

const Green300 = '#13BA95';
const Green600 = '#008D61';

const Gray600 = '#444444';
const Gray200 = '#EFEFEF';

const Error = '#9d3535';
const Surface = '#BBE8FD';
const SurfaceVariant = '#fff';

export const theme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    primary: Blue600,
    onPrimary: Gray200,
    secondary: Green300,
    onSecondary: Gray200,
    surface: Surface,
    surfaceVariant: SurfaceVariant,
  },
};

export const SpacingCompact = 16;
export const SpacingMedium = 24;
export const SpacingExpanded = 24;
