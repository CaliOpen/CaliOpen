import * as React from 'react';
import { StyleSheet, Text } from 'react-native';
import { Button, TextInput, useTheme } from 'react-native-paper';
import { NativeStackScreenProps } from '@react-navigation/native-stack';

import { Container } from '../components/Container';
import { Pane } from '../components/Pane';
import { SpacingCompact } from '../modules/ui';
import { RootStackParamList } from '../modules/routes';
import {
  getSettings,
  saveSettings,
  resetAll,
  SettingsPayload,
  SETTING_KEYS,
  SettingKey,
} from '../modules/settings';
import { authenticate } from '../modules/auth';
import { AppError } from '../modules/errors';
import { getUser } from '../modules/api';

const defaultInstance = 'https://www.caliopen.app';

const DEFAULT_SETTINGS: SettingsPayload = {
  instance: defaultInstance,
  username: '',
  password: '',
};
function validate(settings: SettingsPayload) {
  let isValid = true;

  SETTING_KEYS.forEach((key) => {
    if (!settings[key]?.length) {
      isValid = false;
    }
  });

  return {
    isValid,
  };
}

type Props = NativeStackScreenProps<RootStackParamList, 'settings'>;

export function Settings({ navigation }: Props) {
  const theme = useTheme();
  const [nextSettings, setSettings] =
    React.useState<SettingsPayload>(DEFAULT_SETTINGS);
  const [loading, setLoading] = React.useState(false);
  const [loadingReset, setLoadingReset] = React.useState(false);
  const [error, setError] = React.useState<undefined | string>();

  const { isValid } = validate(nextSettings);

  /**
   * load settings
   */
  const init = async () => {
    try {
      const { instance, username, password } = await getSettings();
      console.log({ instance, username, password });

      setSettings({
        instance: instance || DEFAULT_SETTINGS.instance,
        username: username || DEFAULT_SETTINGS.username,
        password: password || DEFAULT_SETTINGS.password,
      });
    } catch (e) {
      console.warn(e);
    }
  };

  React.useEffect(() => {
    init();
  }, []);

  const handleSave = async () => {
    if (!nextInstance || !nextLogin || !nextPass) {
      return;
    }
    setLoading(true);
    try {
      await saveSettings({
        instance: nextInstance,
        login: nextLogin,
        password: nextPass,
      });
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
          value={nextSettings.instance}
          onChangeText={(value) => handleChange('instance', value)}
          style={styles.settingItem}
          placeholder={defaultInstance}
        />
        <TextInput
          label="Username"
          value={nextSettings.username}
          onChangeText={(value) => handleChange('username', value)}
          style={styles.settingItem}
        />
        <TextInput
          label="Password"
          value={nextSettings.password}
          secureTextEntry
          textContentType="password"
          onChangeText={(value) => handleChange('password', value)}
          style={styles.settingItem}
        />
        <Button
          onPress={handleSave}
          mode="contained"
          loading={loading}
          style={styles.settingItem}
          disabled={!isValid}
        >
          Save
        </Button>
        <Button
          onPress={handleReset}
          mode="outlined"
          loading={loadingReset}
          style={{ ...styles.settingItem, borderColor: theme.colors.error }}
        >
          <Text style={{ color: theme.colors.error }}>Reset</Text>
        </Button>
        {error && <Text style={{ color: theme.colors.error }}>{error}</Text>}
      </Container>
    </Pane>
  );
}

const styles = StyleSheet.create({
  settingItem: {
    marginBottom: SpacingCompact,
  },
});
