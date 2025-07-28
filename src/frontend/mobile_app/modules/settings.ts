import * as SecureStore from 'expo-secure-store';
import { AppError } from './errors';

export interface SettingsPayload {
  instance: string;
  username: string;
  password: string;
}

export type SettingKey = keyof SettingsPayload;

// XXX: should we store only instance, username & computed bearer?
export const SETTING_KEYS: SettingKey[] = ['instance', 'username', 'password'];

export async function resetAll() {
  await Promise.all(
    SETTING_KEYS.map((key) => SecureStore.deleteItemAsync(key))
  );
}

export async function saveSettings(values: SettingsPayload) {
  try {
    await Promise.all(
      SETTING_KEYS.map((key) => {
        if (typeof values[key] !== 'string' || values[key]?.length === 0) {
          return SecureStore.deleteItemAsync(key);
        }

        return SecureStore.setItemAsync(key, values[key] as string);
      })
    );
  } catch (e) {
    throw new AppError('Unable to save settings');
  }
}

export async function getSettings({ full }: { full?: boolean } = {}): Promise<
  Partial<SettingsPayload> | SettingsPayload | undefined
> {
  const [instance, username, password] = (
    await Promise.all(SETTING_KEYS.map((key) => SecureStore.getItemAsync(key)))
  )
    // force result to be set or undefined (not null)
    .map((item) => item || undefined);

  if (full && ![instance, username, password].some(Boolean)) {
    return undefined;
  }
  return { instance, username, password };
}

export const setBearer = async (token: string) => {
  await SecureStore.setItemAsync('bearer', token);
};

export const getBearer = async (): Promise<null | string> => {
  return SecureStore.getItemAsync('bearer');
};
