import React from 'react'
import ShallowRenderer from 'react-test-renderer/shallow';
import CustomToolbar from '../../components/CustomToolbar'

test('should shallow render CustomToolbar correctly', () => {
    const renderer = new ShallowRenderer();
    renderer.render(<CustomToolbar />)
    expect(renderer.getRenderOutput()).toMatchSnapshot();
    console.log(renderer.getRenderOutput())
})

