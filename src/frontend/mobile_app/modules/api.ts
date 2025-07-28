import { getSignatureHeaders } from '@caliopen/core';
import { deviceManager, getDevice } from './device';
import { AppError } from './errors';
import { SettingsPayload, getBearer, getSettings } from './settings';

export const fetchUser = async () => {
  const settings = await getSettings({ full: true });

  if (!settings) {
    throw new AppError('Settings are not set');
  }
  const fetchConfig = {
    url: `${settings.instance}/api/v1/me`,
    method: 'GET',
    // params: undefined,
    // data: undefined,
  };
  const signatureHeaders = await getSignatureHeaders(
    fetchConfig,
    deviceManager
  );

  const bearer = (await getBearer()) || '';

  return fetch(`${settings.instance}/api/v1/me`, {
    method: 'GET',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
      Authorization: `Bearer ${bearer}`,
      ...signatureHeaders,
    },
  });
};

export const login = async ({
  instance,
  username,
  password,
}: SettingsPayload) => {
  const device = await getDevice();

  const response = fetch(`${instance}/api/v1/authentications`, {
    credentials: 'omit', // includes set-cookie header
    method: 'POST',
    body: JSON.stringify({
      username,
      password,
      device,
    }),
  });

  return response;
};
