import * as React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { useTheme } from 'react-native-paper';
import { Container } from '../components/Container';
import { LinkButton } from '../components/LinkButton';

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
      <View style={styles.container}>
        <Text>This app only retrieves your SMS then sync with Caliopen.</Text>
        {syncLoading && <Text>Loading…</Text>}
      </View>
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

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
