import * as React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { useTheme } from 'react-native-paper';
import { useNavigation } from '@react-navigation/native';
import { Container } from '../components/Container';
import { LinkButton } from '../components/LinkButton';
import { Pane } from '../components/Pane';
import { getBearer, getSettings } from '../modules/settings';
import { fetchUser } from '../modules/api';
import { SCREEN_SETTINGS } from './consts';

export function Home() {
  const theme = useTheme();
  const navigation = useNavigation();

  const [appInitialized, setAppInitialized] = React.useState(true);
  const [syncLoading, setSyncLoading] = React.useState(false);

  const init = async () => {
    try {
      const bearer = await getBearer();

      if (bearer) {
        try {
          const response = await fetchUser();
          if (response.status !== 200) {
            navigation.navigate(SCREEN_SETTINGS);
            return;
          }
        } catch (err) {}
      }
      setAppInitialized(bearer ? true : false);
    } catch (e) {
      console.warn(e);
    }
  };

  React.useEffect(() => {
    init();
  }, []);

  return (
    <>
      <Pane centered>
        <Container>
          <Text>Sync your SMS with Caliopen</Text>
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
