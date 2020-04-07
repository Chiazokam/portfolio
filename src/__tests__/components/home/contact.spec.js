import React from 'react';
import { shallow } from 'enzyme';
import Contact from '../../../components/Home/Contact';

describe('Contact component', () => {
    it('renders successfully', () => {
    const wrapper = shallow(<Contact />);
    expect(wrapper).toMatchSnapshot();
    })
});
