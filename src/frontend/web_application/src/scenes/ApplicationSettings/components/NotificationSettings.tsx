import { useLingui } from '@lingui/react';
import * as React from 'react';
import { Field } from 'redux-form';
import {
  CheckboxFieldGroup as CheckboxFieldGroupBase,
  SelectFieldGroup as SelectFieldGroupBase,
  FormGrid,
  FormRow,
  FormColumn,
} from 'src/components';
import renderReduxField from 'src/services/renderReduxField';

const SelectFieldGroup = renderReduxField(SelectFieldGroupBase);
const CheckboxFieldGroup = renderReduxField(CheckboxFieldGroupBase);

const MESSAGE_PREVIEW = ['off', 'always'];
const DELAY_DISAPPEAR = [0, 5, 10, 30];

function NotificationForm() {
  const { i18n } = useLingui();

  const translations = {
    off: i18n._(
      /* i18n */ 'settings.notification.message_preview.options.off',
      undefined,
      {
        message: 'Off',
      }
    ),
    always: i18n._(
      /* i18n */ 'settings.notification.message_preview.options.always',
      undefined,
      { message: 'Always' }
    ),
  };

  const getOptionsFromArray = (options) =>
    options.map((value) => ({
      value,
      label: translations[value] || value,
    }));

  const messagePreviewOptions = getOptionsFromArray(MESSAGE_PREVIEW);
  const delayDisappearOptions = DELAY_DISAPPEAR.map((delay) => ({
    value: delay,
    label: i18n._(
      /* i18n */ 'settings.notification.delay_disappear.options.second',
      { 0: delay },
      { message: '{0} Seconds' }
    ),
  }));

  return (
    <FormGrid className="m-contacts-form">
      <FormRow>
        <FormColumn rightSpace={false} bottomSpace>
          <Field
            component={CheckboxFieldGroup}
            type="checkbox"
            name="notification_enabled"
            label={i18n._(
              /* i18n */ 'settings.notification.enabled.label',
              undefined,
              {
                message: 'Enabled',
              }
            )}
          />
        </FormColumn>
        <FormColumn rightSpace={false} bottomSpace>
          <Field
            component={CheckboxFieldGroup}
            type="checkbox"
            name="notification_sound_enabled"
            label={i18n._(
              /* i18n */ 'settings.notification.sound_enabled.label',
              undefined,
              {
                message: 'Sound enabled',
              }
            )}
          />
        </FormColumn>
        <FormColumn rightSpace={false} bottomSpace>
          <Field
            component={SelectFieldGroup}
            name="notification_message_preview"
            label={i18n._(
              /* i18n */ 'settings.notification.message_preview.label',
              undefined,
              { message: 'Message preview' }
            )}
            options={messagePreviewOptions}
            expanded
          />
        </FormColumn>
        <FormColumn rightSpace={false}>
          <Field
            component={SelectFieldGroup}
            name="notification_delay_disappear"
            label={i18n._(
              /* i18n */ 'settings.notification.delay_disappear.label',
              undefined,
              { message: 'Display delay' }
            )}
            options={delayDisappearOptions}
            expanded
          />
        </FormColumn>
      </FormRow>
    </FormGrid>
  );
}

export default NotificationForm;
