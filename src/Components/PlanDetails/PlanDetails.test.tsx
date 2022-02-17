import { shallow, ShallowWrapper } from 'enzyme';
import React from 'react';
import PlanDetails, { PlanDetailsProps } from './PlanDetails';
import categories from '../../mocks/categories';
import notes from '../../mocks/notes';

describe('the plan details component', () => {
  it('renders the component with a lot of mock data', () => {
    const props:PlanDetailsProps = {
      categories,
      notes,
    };
    const wrapper:ShallowWrapper = shallow(<PlanDetails {...props} />);
    expect(wrapper).toMatchSnapshot();
  });

  it('renders the component when the user has no categories', () => {
    const props:PlanDetailsProps = {
      categories: [],
      notes: [],
    };
    const wrapper:ShallowWrapper = shallow(<PlanDetails {...props} />);
    expect(wrapper).toMatchSnapshot();
  });
});
