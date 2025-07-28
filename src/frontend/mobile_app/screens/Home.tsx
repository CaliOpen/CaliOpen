import * as React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { useTheme } from 'react-native-paper';
import { Container } from '../components/Container';
import { LinkButton } from '../components/LinkButton';
import { Pane } from '../components/Pane';

// WIP
interface Settings {
  instance?: string;
  login?: string;
  password?: string;
}
const getSettings = () => Promise.resolve<Settings>({});

export function Home() {
  const theme = useTheme();

  const [appInitialized, setAppInitialized] = React.useState(true);
  const [syncLoading, setSyncLoading] = React.useState(false);

  const init = async () => {
    try {
      const { instance, login, password } = await getSettings();

      setAppInitialized(instance && login && password ? true : false);
    } catch (e) {
      console.warn(e);
    }
  };

  React.useEffect(() => {
    init();
  }, []);

  return (
    <>
      <Pane>
        <Container>
          <Text>Retrieves SMS then sync with Caliopen</Text>
        </Container>
        {syncLoading && <Text>Loading…</Text>}
      </Pane>
      {!appInitialized && (
        <Container>
          <LinkButton mode="contained" to="/settings">
            Configure
          </LinkButton>
        </Container>
      )}
      {appInitialized && (
        <View
          style={{
            ...StyleSheet.absoluteFillObject,
            justifyContent: 'flex-end',
          }}
        >
          <Text>WIP</Text>
        </View>
      )}
    </>
  );
}
