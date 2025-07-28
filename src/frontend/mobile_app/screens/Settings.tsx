import * as React from 'react';
import { Text } from 'react-native';

import { Container } from '../components/Container';
import { Pane } from '../components/Pane';

export function Settings() {
  return (
    <Pane>
      <Container>
        <Text>Settings…</Text>
      </Container>
    </Pane>
  );
}
