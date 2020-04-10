import React from 'react';
import { shallow } from 'enzyme';
import Home from '../../../components/Home';

describe('Home component', () => {
    it('renders successfully', () => {
    const wrapper = shallow(<Home />);
    expect(wrapper).toMatchSnapshot();
    })
});
