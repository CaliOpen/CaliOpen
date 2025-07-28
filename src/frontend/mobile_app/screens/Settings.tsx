import * as React from 'react';
import { StyleSheet, Text } from 'react-native';
import { Button, TextInput, useTheme } from 'react-native-paper';
import { NativeStackScreenProps } from '@react-navigation/native-stack';

import { Container } from '../components/Container';
import { Pane } from '../components/Pane';
import { SpacingCompact } from '../modules/ui';
import { RootStackParamList } from '../modules/routes';

const defaultInstance = 'https://www.caliopen.app';

type Props = NativeStackScreenProps<RootStackParamList, 'settings'>;

function saveSettings(
  nextInstance: string,
  nextLogin: string,
  nextPass: string
) {}

function resetAll() {}

export function Settings({ navigation }: Props) {
  const theme = useTheme();
  const [nextInstance, setInstance] = React.useState('');
  const [nextLogin, setLogin] = React.useState('');
  const [nextPass, setPass] = React.useState('');
  const [loading, setLoading] = React.useState(false);
  const [loadingReset, setLoadingReset] = React.useState(false);

  /**
   * load settings
   */
  const init = async () => {};

  const handleSave = async () => {
    if (!nextInstance || !nextLogin || !nextPass) {
      return;
    }
    setLoading(true);
    try {
      await saveSettings(nextInstance, nextLogin, nextPass);
      setLoading(false);
      navigation.goBack();
    } catch (e) {
      console.warn(e);
      setLoading(false);
    }
  };

  const handleReset = async () => {
    setLoadingReset(true);
    try {
      await resetAll();
      await init();
    } catch (e) {
      console.warn(e);
    } finally {
      setLoadingReset(false);
    }
  };

  return (
    <Pane>
      <Container>
        <Text variant="headlineSmall" style={styles.settingItem}>
          Configure your access to Caliopen
        </Text>
        <TextInput
          label="Instance"
          value={nextInstance}
          onChangeText={setInstance}
          style={styles.settingItem}
          placeholder={defaultInstance}
        />
        <TextInput
          label="Login"
          value={nextLogin}
          onChangeText={setLogin}
          style={styles.settingItem}
        />
        <TextInput
          label="Password"
          value={nextPass}
          secureTextEntry
          textContentType="password"
          onChangeText={setPass}
          style={styles.settingItem}
        />
        <Button
          onPress={handleSave}
          mode="contained"
          loading={loading}
          style={styles.settingItem}
        >
          Save
        </Button>
        <Button
          onPress={handleReset}
          mode="outlined"
          loading={loadingReset}
          style={{ borderColor: theme.colors.error }}
        >
          <Text style={{ color: theme.colors.error }}>Reset</Text>
        </Button>
      </Container>
    </Pane>
  );
}

const styles = StyleSheet.create({
  settingItem: {
    marginBottom: SpacingCompact,
  },
});
