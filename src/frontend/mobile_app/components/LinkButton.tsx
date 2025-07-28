import { useNavigation } from '@react-navigation/native';
import * as React from 'react';
import { Button, type ButtonProps } from 'react-native-paper';

interface Props extends ButtonProps {
  children: React.ReactNode;
  to: keyof ReactNavigation.RootParamList;
}

export function LinkButton({ to, children, ...props }: Props) {
  const { navigate } = useNavigation();

  return (
    <Button onPress={() => navigate(to)} {...props}>
      {children}
    </Button>
  );
}
