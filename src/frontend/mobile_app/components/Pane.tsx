import * as React from 'react';
import { StyleSheet, View } from 'react-native';
import { useTheme } from 'react-native-paper';

interface Props {
  children: React.ReactNode;
  centered?: boolean;
}
export function Pane({ children, centered }: Props) {
  const theme = useTheme();
  return (
    <View
      style={StyleSheet.flatten([
        styles.pane,
        { backgroundColor: theme.colors.background },
        centered ? styles.paneCentered : undefined,
      ])}
    >
      {children}
    </View>
  );
}

const styles = StyleSheet.create({
  pane: {
    flex: 1,
  },
  paneCentered: {
    alignItems: 'center',
  },
});
