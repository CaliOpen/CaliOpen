import * as React from 'react';
import { Text } from 'react-native';
import { Appbar } from 'react-native-paper';
import { useNavigation } from '@react-navigation/native';
import { Container } from '../components/Container';
import { LinkButton } from '../components/LinkButton';
import { Pane } from '../components/Pane';
import { getBearer } from '../modules/settings';
import { fetchUser } from '../modules/api';
import { Sync } from '../modules/sync/components/Sync';
import { BottomAppBar } from '../components/BottomAppBar';

const useAppInitialized = () => {
  const [appInitialized, setAppInitialized] = React.useState(true);

  const init = async () => {
    try {
      const bearer = await getBearer();
      setAppInitialized(bearer ? true : false);
    } catch (e) {
      console.warn(e);
    }
  };

  React.useEffect(() => {
    init();
  }, []);

  return appInitialized;
};

export function Home() {
  const navigation = useNavigation();
  const [syncLoading, setSyncLoading] = React.useState(false);
  const appInitialized = useAppInitialized();

  const testAuth = async () => {
    try {
      const response = await fetchUser();
      if (response.status !== 200) {
        navigation.navigate('settings');
        return;
      }
    } catch (err) {}
  };

  React.useEffect(() => {
    if (appInitialized) {
      testAuth();
    }
  }, [appInitialized]);

  return (
    <>
      <Pane centered>
        <Container>
          <Text>Sync your SMS with Caliopen</Text>
        </Container>
        {syncLoading && <Text>Loading…</Text>}
      </Pane>
      <BottomAppBar>
        {!appInitialized && (
          <Container>
            <LinkButton mode="contained" to="settings">
              Configure
            </LinkButton>
          </Container>
        )}
        {appInitialized && (
          <Container>
            <Sync />
          </Container>
        )}
      </BottomAppBar>
    </>
  );
}

export function HomeHeader() {
  const navigation = useNavigation();

  return (
    <Appbar.Action icon="cog" onPress={() => navigation.navigate('settings')} />
  );
}
