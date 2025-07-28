import { useLingui } from '@lingui/react';
import * as React from 'react';
import { Field } from 'redux-form';
import {
  SelectFieldGroup as SelectFieldGroupBase,
  FormGrid,
  FormRow,
  FormColumn,
} from 'src/components';
import renderReduxField from 'src/services/renderReduxField';

const SelectFieldGroup = renderReduxField(SelectFieldGroupBase);

const DISPLAY_FORMATS = ['rich_text', 'plain_text'];

function PresentationForm() {
  const { i18n } = useLingui();
  const translations = {
    rich_text: i18n._(
      /* i18n */ 'settings.message.display_format.options.rich_text',
      undefined,
      { message: 'Rich text' }
    ),
    plain_text: i18n._(
      /* i18n */ 'settings.message.display_format.options.plain_text',
      undefined,
      { message: 'Plain text' }
    ),
  };
  const getOptionsFromArray = (options) =>
    options.map((value) => ({
      value,
      label: translations[value] || value,
    }));

  const displayFormatOptions = getOptionsFromArray(DISPLAY_FORMATS);

  return (
    <FormGrid className="m-settings-message-form">
      <FormRow>
        <FormColumn rightSpace={false}>
          <Field
            component={SelectFieldGroup}
            name="message_display_format"
            label={i18n._(
              /* i18n */ 'settings.message.display_format.label',
              undefined,
              {
                message: 'Display',
              }
            )}
            options={displayFormatOptions}
            expanded
          />
        </FormColumn>
      </FormRow>
    </FormGrid>
  );
}

export default PresentationForm;
