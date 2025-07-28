import * as React from 'react';
import { StyleSheet, View } from 'react-native';

interface Props {
  children: React.ReactNode;
}
export function Pane({ children }: Props) {
  return <View style={styles.pane}>{children}</View>;
}

const styles = StyleSheet.create({
  pane: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
  },
});
