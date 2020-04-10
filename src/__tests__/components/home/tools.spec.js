import React from 'react';
import { shallow } from 'enzyme';
import Tools from '../../../components/Home/Tools';

describe('Tools component', () => {
    it('renders successfully', () => {
    const wrapper = shallow(<Tools />);
    expect(wrapper).toMatchSnapshot();
    })
});
