import * as React from 'react';
import { Field } from 'redux-form';
import { useLingui } from '@lingui/react';
import {
  SelectFieldGroup as SelectFieldGroupBase,
  FormGrid,
  FormRow,
  FormColumn,
} from 'src/components';
import renderReduxField from 'src/services/renderReduxField';

const SelectFieldGroup = renderReduxField(SelectFieldGroupBase);
const DISPLAY_FORMAT = ['given_name, family_name', 'family_name, given_name'];
const DISPLAY_ORDER_BY = ['given_name', 'family_name'];

function ContactsForm() {
  const { i18n } = useLingui();

  const translations = {
    'given_name, family_name': i18n._(
      /* i18n */ 'settings.contact.display_format.options.first_last',
      undefined,
      { message: 'Firstname, Lastname' }
    ),
    'family_name, given_name': i18n._(
      /* i18n */ 'settings.contact.display_format.options.last_first',
      undefined,
      { message: 'Lastname, Firstname' }
    ),
    given_name: i18n._(
      /* i18n */ 'settings.contact.display_order_by.options.firstname',
      undefined,
      { message: 'Firstname' }
    ),
    family_name: i18n._(
      /* i18n */ 'settings.contact.display_order_by.options.lastname',
      undefined,
      { message: 'Lastname' }
    ),
  };

  const getOptionsFromArray = (options) =>
    options.map((value) => ({
      value,
      label: translations[value] || value,
    }));

  const displayFormatOptions = getOptionsFromArray(DISPLAY_FORMAT);
  const displayOrderByOptions = getOptionsFromArray(DISPLAY_ORDER_BY);

  return (
    <FormGrid className="m-contacts-form">
      <FormRow>
        <FormColumn rightSpace={false} bottomSpace>
          <Field
            component={SelectFieldGroup}
            name="contact_display_format"
            label={i18n._(
              /* i18n */ 'settings.contacts.display.label',
              undefined,
              {
                message: 'Display',
              }
            )}
            options={displayFormatOptions}
            expanded
          />
        </FormColumn>
        <FormColumn rightSpace={false}>
          <Field
            component={SelectFieldGroup}
            name="contact_display_order"
            label={i18n._(
              /* i18n */ 'settings.contacts.order.label',
              undefined,
              {
                message: 'Order by',
              }
            )}
            options={displayOrderByOptions}
            expanded
          />
        </FormColumn>
      </FormRow>
    </FormGrid>
  );
}

export default ContactsForm;
