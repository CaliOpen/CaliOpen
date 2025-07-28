import * as React from 'react';
import { View } from 'react-native';
import { useTheme } from 'react-native-paper';

interface Props {
  children: React.ReactNode;
  centered?: boolean;
}
export function BottomAppBar(props: Props) {
  const theme = useTheme();
  return (
    <View style={{ backgroundColor: theme.colors.background }} {...props} />
  );
}
