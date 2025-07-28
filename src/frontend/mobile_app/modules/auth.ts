import { Buffer } from 'buffer';

import { login } from './api';
import { SettingsPayload, getSettings, setBearer } from './settings';
import { AppError } from './errors';

function computeBearer(userId: string, token: string) {
  return Buffer.from(`${userId}:${token}`).toString('base64');
}

export const authenticate = async () => {
  const settings = await getSettings({ full: true });

  if (!settings) {
    throw new AppError('Auth failed (setting not fully set)');
  }

  const response = await login(settings as SettingsPayload);

  if (response.status !== 200) {
    throw new AppError('Auth failed');
  }

  const {
    tokens: { access_token },
    user_id,
  } = await response.json();

  await setBearer(computeBearer(user_id, access_token));
};
