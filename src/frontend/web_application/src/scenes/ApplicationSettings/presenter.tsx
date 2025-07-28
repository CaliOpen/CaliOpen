import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { Trans } from '@lingui/react';
import { I18n } from '@lingui/core';
import { Section, PageTitle, Button, FieldErrors } from '../../components';
import InterfaceSettings from './components/InterfaceSettings';
import MessageSettings from './components/MessageSettings';
import ContactSettings from './components/ContactSettings';
import NotificationSettings from './components/NotificationSettings';
import DesktopNotificationSettings from './components/DesktopNotificationSettings';
import './style.scss';

interface Props {
  handleSubmit: (any) => any;
  requestSettings: () => void;
  notifyError: (any) => void;
  notifySuccess: (any) => void;
  errors: Record<string, any>;
  i18n: I18n;
}

class ApplicationSettings extends PureComponent<Props> {
  static propTypes = {
    handleSubmit: PropTypes.func.isRequired,
    requestSettings: PropTypes.func.isRequired,
    notifyError: PropTypes.func.isRequired,
    notifySuccess: PropTypes.func.isRequired,
    errors: PropTypes.shape({}),
    i18n: PropTypes.shape({ _: PropTypes.func }).isRequired,
  };

  static defaultProps = {
    errors: {},
  };

  handleSubmit = (ev) => {
    /* TODO: autosave settings */
    const { handleSubmit } = this.props;
    handleSubmit(ev).then(this.handleSuccess, this.handleError);
  };

  handleSuccess = async () => {
    const { i18n, notifySuccess, requestSettings } = this.props;
    await requestSettings();

    return notifySuccess({
      message: i18n._(
        /* i18n */ 'settings.form.feedback.successfull',
        undefined,
        {
          message: 'Settings successfully updated!',
        }
      ),
    });
  };

  handleError = () => {
    const { i18n, notifyError } = this.props;
    notifyError({
      message: i18n._(
        /* i18n */ 'settings.form.feedback.unexpected-error',
        undefined,
        {
          message: 'Error when updating settings.',
        }
      ),
    });
  };

  render() {
    const { errors, i18n } = this.props;

    return (
      <form
        method="post"
        className="s-application-settings"
        name="settings_application_form"
        onSubmit={this.handleSubmit}
      >
        <PageTitle />
        {errors.global && errors.global.length !== 0 && (
          <FieldErrors errors={errors.global} />
        )}
        <div className="s-application-settings__col-sections">
          <Section
            title={i18n._(/* i18n */ 'settings.interface.title', undefined, {
              message: 'Customize your interface',
            })}
          >
            <InterfaceSettings />
          </Section>
        </div>
        <div className="s-application-settings__col-sections">
          <Section
            title={i18n._(/* i18n */ 'settings.message.title', undefined, {
              message: 'Messages settings',
            })}
          >
            <MessageSettings />
          </Section>
        </div>
        <div className="s-application-settings__col-sections">
          <Section
            className="s-application-settings__section"
            title={i18n._(/* i18n */ 'settings.contact.title', undefined, {
              message: 'Contact settings',
            })}
          >
            <ContactSettings />
          </Section>
        </div>
        <div className="s-application-settings__col-sections">
          <Section
            title={i18n._(/* i18n */ 'settings.notification.title', undefined, {
              message: 'Notifications settings',
            })}
          >
            <NotificationSettings />
          </Section>
          <Section
            title={i18n._(
              /* i18n */ 'settings.desktop_notification.title',
              undefined,
              {
                message: 'Desktop notifications settings',
              }
            )}
          >
            <DesktopNotificationSettings />
          </Section>
        </div>

        <div className="s-application-settings__action">
          <Button type="submit" shape="plain" icon="check">
            <Trans
              id="settings.presentation.update.action"
              message="Save settings"
            />
          </Button>
        </div>
      </form>
    );
  }
}

export default ApplicationSettings;
