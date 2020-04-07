import React from 'react';
import { shallow } from 'enzyme';
import SoftSkills from '../../../components/Home/SoftSkills';

describe('SoftSkills component', () => {
    it('renders successfully', () => {
    const wrapper = shallow(<SoftSkills />);
    expect(wrapper).toMatchSnapshot();
    })
});
