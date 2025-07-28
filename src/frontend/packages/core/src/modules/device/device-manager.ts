import { v4 as uuidV4 } from "uuid";
import { ec } from "elliptic";

import {
  CURVE_TYPE,
  CURVE_TYPE_ASSOC,
  generateKeypair,
  getKeypair,
  HASH_NAME,
} from "./ecdsa";

export interface DeviceConfig {
  id: string;
  priv: string;
  hash: string;
  curve: string;
}

export interface ConfigBag {
  get: () => Promise<void | DeviceConfig>;
  save: (config: DeviceConfig) => Promise<void | DeviceConfig>;
}

export interface EcdsaKey {
  curve: string;
  hash: string;
  x: string;
  y: string;
}

export interface PublicDevice {
  device_id: string;
  ecdsa_key: EcdsaKey;
}

export class DeviceManager {
  constructor(configBag: ConfigBag) {
    this.configBag = configBag;
  }

  configBag: ConfigBag;

  initConfig = async (): Promise<DeviceConfig> => {
    const id = uuidV4();
    // XXX: need to await?
    const keypair = generateKeypair();

    await this.configBag.save({
      id,
      curve: CURVE_TYPE,
      hash: HASH_NAME,
      priv: keypair.getPrivate("hex"),
    });

    const config = await this.configBag.get();

    if (!config) {
      throw new Error("Unable to save and retrieve device config");
    }

    return config;
  };

  computePublicDevice = (id: string, keypair: ec.KeyPair) => {
    const pub = keypair.getPublic();

    return {
      device_id: id,
      ecdsa_key: {
        curve: CURVE_TYPE_ASSOC[CURVE_TYPE],
        hash: HASH_NAME,
        x: pub.getX().toString("hex"),
        y: pub.getY().toString("hex"),
      },
    };
  };

  getPublicDevice = async (): Promise<PublicDevice> => {
    let config = await this.configBag.get();

    if (!config) {
      config = await this.initConfig();
    }

    const { id, priv } = config;
    const keypair = getKeypair(priv);

    return this.computePublicDevice(id, keypair);
  };
}
