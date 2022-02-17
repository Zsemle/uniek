import { shallow, ShallowWrapper } from 'enzyme';
import React from 'react';
import UniekApp from './UniekApp';

describe('the app layout component', () => {
  it('renders the component', () => {
    const wrapper:ShallowWrapper = shallow(<UniekApp />);
    expect(wrapper).toMatchSnapshot();
  });
});
