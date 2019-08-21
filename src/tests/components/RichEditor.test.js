import React from 'react'
import { shallow, mount, render } from 'enzyme'
import RichEditor from '../../components/RichEditor'
import toJson from 'enzyme-to-json';
import { JestEnvironment } from '@jest/environment';
 
test('should render RichEditor', () => {
    const wrapper = shallow(<RichEditor />);
    expect(toJson(wrapper)).toMatchSnapshot();
});

// test('should write Quill on input change', () => {
//     const text = '<p>something</p>';
//     const wrapper = shallow(<RichEditor />);
//     wrapper.find('Quill').simulate('change', {
//         content: text
//     });
//     expect(wrapper.state('content').toBe(text));
// });

test('should state.open is false by default', () => {
    const wrapper = shallow(<RichEditor />);
    expect(wrapper.state('open')).toBeFalsy();
});

test('should have a math button', () => {
    const wrapper = render(<RichEditor />);
    expect(wrapper.find('button.math').length === 1).toBe(true)
});


// // mount quill problem: see https://github.com/zenoamaro/react-quill/issues/434
// //                          https://stackoverflow.com/questions/48809753/testing-mutationobserver-with-jest
// test('should state.open is true if math button is clicked', () => {
//     const wrapper = mount(<RichEditor placeholder={'請在此輸入您的回覆'} getDocument={(html) => {jest.fn()}}/>);
//     wrapper.find('button.math').simulate('click', );
//     expect(wrapper.state('open')).toBeTruthy();
// });