import React from 'react'
import { shallow } from 'enzyme'
import LaTexEditor from '../../components/LaTexEditor'
import toJson from 'enzyme-to-json';

test('should render LaTexEditor', () => {
    const wrapper = shallow(<LaTexEditor />);
    expect(toJson(wrapper)).toMatchSnapshot();
});