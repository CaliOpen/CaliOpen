import * as React from 'react';
import { View } from 'react-native';

interface Props {
  children: React.ReactElement;
}
export function Container({ children }: Props) {
  return <View style={{ padding: 20 }}>{children}</View>;
}
