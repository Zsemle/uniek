import { shallow, ShallowWrapper } from 'enzyme';
import React from 'react';
import AppHeader from './AppHeader';

describe('the header component', () => {
  it('renders the component', () => {
    const wrapper:ShallowWrapper = shallow(<AppHeader />);
    expect(wrapper).toMatchSnapshot();
  });
});
