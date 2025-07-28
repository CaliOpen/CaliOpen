import * as React from 'react';
import { StyleSheet, View } from 'react-native';
import { SpacingCompact } from '../modules/ui';

interface Props {
  children: React.ReactNode;
}
export function Container({ children }: Props) {
  return <View style={styles.container}>{children}</View>;
}

const styles = StyleSheet.create({
  container: {
    padding: SpacingCompact,
  },
});
