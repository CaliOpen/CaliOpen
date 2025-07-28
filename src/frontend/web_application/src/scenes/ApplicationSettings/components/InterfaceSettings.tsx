import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { Field } from 'redux-form';
import {
  SelectFieldGroup as SelectFieldGroupBase,
  FormGrid,
  FormRow,
  FormColumn,
} from 'src/components';
import renderReduxField from 'src/services/renderReduxField';
import { AVAILABLE_LOCALES } from 'src/modules/i18n';
import { useLingui } from '@lingui/react';

const languages = {
  fr_FR: 'Français',
  en_US: 'English',
  de_DE: 'Deutsch',
};
const SelectFieldGroup = renderReduxField(SelectFieldGroupBase);

function InterfaceSettings() {
  const { i18n } = useLingui();
  const getOptionsFromArray = (options) =>
    options.map((value) => ({
      value,
      label: languages[value] || value,
    }));

  const languageOptions = getOptionsFromArray(AVAILABLE_LOCALES);

  return (
    <FormGrid className="m-interface-form">
      <FormRow>
        <FormColumn rightSpace={false}>
          <Field
            component={SelectFieldGroup}
            name="default_locale"
            label={i18n._(
              /* i18n */ 'settings.interface.language.label',
              undefined,
              {
                message: 'Language',
              }
            )}
            options={languageOptions}
            expanded
          />
        </FormColumn>
      </FormRow>
    </FormGrid>
  );
}

export default InterfaceSettings;
