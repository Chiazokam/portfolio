import React from 'react';
import { shallow } from 'enzyme';
import Footer from '../../../components/Footer';

describe('Footer component', () => {
    it('renders successfully', () => {
    const wrapper = shallow(<Footer />);
    expect(wrapper).toMatchSnapshot();
    })
});
