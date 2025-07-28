import * as React from 'react';
import { Trans, useLingui } from '@lingui/react';
import { Icon, Button } from 'src/components';
import {
  notify,
  requestPermission,
  isSupported,
  PERMISSION_DENIED,
  PERMISSION_GRANTED,
} from 'src/services/browser-notification';
import './style.scss';

function DesktopNotificationSettings() {
  const { i18n } = useLingui();

  const [hasBrowserNotificationPermission, setPermission] = React.useState(
    isSupported ? Notification.permission : undefined
  );

  const handleRequestBrowserNotification = async () => {
    const permission = await requestPermission();
    setPermission(permission);
  };

  const handleClickTestBrowser = () =>
    notify({
      message: i18n._(
        /* i18n */ 'settings.desktop_notification.feedback.enabled',
        undefined,
        {
          message: 'Desktop notifications are enabled',
        }
      ),
      force: true,
    });

  const noSupport = (
    <div>
      <Trans
        id="settings.desktop_notification.no_support"
        message="Notifications are not supported by your browser"
      />
    </div>
  );

  const renderNotification = () => {
    if (hasBrowserNotificationPermission === PERMISSION_GRANTED) {
      return (
        <div>
          <span className="m-desktop-notifications--allowed">
            <Icon type="check" />{' '}
            <Trans
              id="settings.desktop_notification.desktop_notifications_enabled"
              message="Desktop notifications enabled"
            />{' '}
          </span>{' '}
          <Button onClick={handleClickTestBrowser} display="inline">
            <Trans
              id="settings.desktop_notification.action.test_desktop_notification"
              message="Check desktop notifications"
            />
          </Button>
        </div>
      );
    }

    if (hasBrowserNotificationPermission === PERMISSION_DENIED) {
      return (
        <div className="m-desktop-notifications--denied">
          <Icon type="remove" />{' '}
          <Trans
            id="settings.desktop_notification.disabled"
            message="Notifications are disabled, please check your browser settings"
          />
        </div>
      );
    }

    return (
      <div>
        <Button onClick={handleRequestBrowserNotification}>
          <Trans
            id="settings.desktop_notification.action.request-desktop_notification_permission"
            message="Enable desktop notifications"
          />
        </Button>
      </div>
    );
  };

  return <div>{isSupported ? renderNotification() : noSupport}</div>;
}

export default DesktopNotificationSettings;
