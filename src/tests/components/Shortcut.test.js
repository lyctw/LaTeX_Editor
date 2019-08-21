import React from 'react'
import { shallow } from 'enzyme'
import Shortcut from '../../components/Shortcut'
import toJson from 'enzyme-to-json';
 
test('should render Shortcut', () => {
    const wrapper = shallow(<Shortcut />);
    expect(toJson(wrapper)).toMatchSnapshot();
});
