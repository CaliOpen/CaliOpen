import * as SecureStore from 'expo-secure-store';

export interface SettingsPayload {
  instance: null | string;
  login: null | string;
  password: null | string;
}

export const SETTING_KEYS: (keyof SettingsPayload)[] = [
  'instance',
  'login',
  'password',
];

export async function resetAll() {
  await Promise.all(
    SETTING_KEYS.map((key) => SecureStore.deleteItemAsync(key))
  );
}

export async function saveSettings(values: SettingsPayload) {
  await Promise.all(
    SETTING_KEYS.map((key) => {
      if (typeof values[key] !== 'string' || values[key]?.length === 0) {
        return SecureStore.deleteItemAsync(key);
      }

      return SecureStore.setItemAsync(key, values[key] as string);
    })
  );
}

export async function getSettings(): Promise<Partial<SettingsPayload>> {
  const [instance, login, password] = await Promise.all(
    SETTING_KEYS.map((key) => SecureStore.getItemAsync(key))
  );
  return { instance, login, password };
}
