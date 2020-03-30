import React from 'react';
import { shallow } from 'enzyme';
import Test from '../../components/TestComponent';

describe('Test tests', () => {

  it('should render correctly', () => {
    const tree = shallow(<Test  />);
    expect(tree).toMatchSnapshot();
  });
});
