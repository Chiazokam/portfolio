import React from 'react';
import { shallow } from 'enzyme';
import About from '../../../components/Home/About';

describe('About component', () => {
    it('renders successfully', () => {
    const wrapper = shallow(<About />);
    expect(wrapper).toMatchSnapshot();
    })
});
