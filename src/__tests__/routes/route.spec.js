import React from 'react';
import { shallow } from 'enzyme';
import Routes from '../../routes';

describe('Routes component', () => {
    it('renders successfully', () => {
    const wrapper = shallow(<Routes />);
    expect(wrapper).toMatchSnapshot();
    })
});
