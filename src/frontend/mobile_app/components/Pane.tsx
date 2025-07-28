import * as React from 'react';
import { StyleSheet, View } from 'react-native';

interface Props {
  children: React.ReactNode;
  centered?: boolean;
}
export function Pane({ children, centered }: Props) {
  return (
    <View
      style={StyleSheet.compose(
        styles.pane,
        centered ? styles.paneCentered : undefined
      )}
    >
      {children}
    </View>
  );
}

const styles = StyleSheet.create({
  pane: {
    flex: 1,
    backgroundColor: '#fff',
  },
  paneCentered: {
    alignItems: 'center',
  },
});
