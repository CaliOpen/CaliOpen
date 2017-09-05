import React from 'react';
import { shallow } from 'enzyme';
import Recipient from './presenter';

describe('component Recipient', () => {
  const noop = str => str;

  it('render', () => {
    const participant = {
      address: 'foo@bar.tld',
      label: 'foobar',
    };
    const comp = shallow(
      <Recipient participant={participant} __={noop} />
    );

    expect(comp.find('Badge').length).toEqual(1);
  });
});
