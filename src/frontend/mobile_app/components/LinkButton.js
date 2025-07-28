import { useLinkProps } from '@react-navigation/native';
import * as React from 'react';
import { Button, type ButtonProps } from 'react-native-paper';

interface Props extends ButtonProps {
  children: React.ReactNode;
  to: string;
}

export function LinkButton({ to, children, ...props }: Props) {
  const { onPress } = useLinkProps({ to });

  return (
    <Button onPress={onPress} {...props}>
      {children}
    </Button>
  );
}
