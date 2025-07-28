import * as SecureStore from 'expo-secure-store';
import {
  DeviceManager,
  ConfigBag,
  DeviceConfig,
  PublicDevice,
} from '@caliopen/core';

const configKeys: Array<keyof DeviceConfig> = ['id', 'priv', 'hash', 'curve'];

const configBag: ConfigBag = {
  get: async () => {
    // @ts-ignore: config has been filtered
    const config: Array<string> = (
      await Promise.all(configKeys.map((key) => SecureStore.getItemAsync(key)))
    ).filter(Boolean);

    if (config.length !== configKeys.length) {
      return undefined;
    }

    const [id, priv, hash, curve] = config;
    return {
      id,
      priv,
      hash,
      curve,
    };
  },
  save: async (config) => {
    await Promise.all(
      configKeys.map((key) => SecureStore.setItemAsync(key, config[key]))
    );

    return configBag.get();
  },
};

export const deviceManager = new DeviceManager(configBag);

export async function getDevice(): Promise<PublicDevice> {
  return deviceManager.getPublicDevice();
}
