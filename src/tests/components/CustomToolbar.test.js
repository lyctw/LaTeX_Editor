import React from 'react'
import { shallow } from 'enzyme'
import CustomToolbar from '../../components/CustomToolbar'
import toJson from 'enzyme-to-json';
 
test('should render CustomToolbar', () => {
    const wrapper = shallow(<CustomToolbar />);
    expect(toJson(wrapper)).toMatchSnapshot();
});

test('should have a math button', () => {
    const wrapper = shallow(<CustomToolbar />);
    expect(wrapper.find('button.math').length === 1).toBe(true)
});