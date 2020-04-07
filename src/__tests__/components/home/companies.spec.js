import React from 'react';
import { shallow } from 'enzyme';
import Companies from '../../../components/Home/Companies';

describe('Companies component', () => {
    it('renders successfully', () => {
    const wrapper = shallow(<Companies />);
    expect(wrapper).toMatchSnapshot();
    })
});
