import * as React from 'react';
import { Provider, ProviderProps } from 'react-redux';
import { I18nLoader } from './modules/i18n';
import { WithSettings } from './modules/settings';
import { DeviceProvider } from './modules/device';
import { InstallPromptProvider } from './modules/pwa';
import { SwitchWithRoutes, RoutingConsumer } from './modules/routing';
import RoutingProvider from './modules/routing/components/RoutingProvider';
import { PageTitle } from './components';
import { NotificationProvider } from './modules/notification';
import ErrorBoundary from './layouts/ErrorBoundary';
import './app.scss';

export interface AppProps {
  store: ProviderProps['store'];
}

export default function App({ store }: AppProps) {
  return (
    <InstallPromptProvider>
      <Provider store={store}>
        <WithSettings
          networkDisabled
          render={(settings) => (
            <I18nLoader locale={settings.default_locale}>
              <ErrorBoundary>
                <RoutingProvider settings={settings}>
                  <PageTitle />
                  <DeviceProvider>
                    <RoutingConsumer
                      render={({ routes }) => (
                        <SwitchWithRoutes routes={routes} />
                      )}
                    />
                  </DeviceProvider>
                  <NotificationProvider />
                </RoutingProvider>
              </ErrorBoundary>
            </I18nLoader>
          )}
        />
      </Provider>
    </InstallPromptProvider>
  );
}
