import React from 'react'
import { shallow } from 'enzyme'
import LaTexPreviewer from '../../components/LaTexPreviewer'
import toJson from 'enzyme-to-json';
 
test('should render LaTexPreviewer', () => {
    const wrapper = shallow(<LaTexPreviewer />);
    expect(toJson(wrapper)).toMatchSnapshot();
});
