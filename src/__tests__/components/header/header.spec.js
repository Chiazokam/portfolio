import React from 'react';
import { shallow } from 'enzyme';
import Header from '../../../components/Header';

describe('Header component', () => {
    it('renders successfully', () => {
    const wrapper = shallow(<Header />);
    expect(wrapper).toMatchSnapshot();
    })
});
