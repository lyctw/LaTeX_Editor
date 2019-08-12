import React, { Component } from 'react'
import ReactQuill from 'react-quill'

import 'react-quill/dist/quill.snow.css'

class RichEditor extends Component {
  constructor(props) {
    super(props)
  }

  render() {
    const customModules = {
      toolbar: [
        [{ 'header': [1, 2, 3, false] }],
        ['bold', 'italic', 'underline'],
        ['link'],
        [{ 'list': 'ordered'}, { 'list': 'bullet' }],
        //['blockquote', 'strike'],
        //['image'],
        ['clean'],
      ]
    }
    return (
      <ReactQuill
        id="quill"
        theme="snow"
        modules={customModules}
        ref={this.props.editorRef}
        bounds="#right-nav"
        placeholder={this.props.placeholder}
        preserveWhitespace
        onChange={this.props.onChange}
        value={this.props.value}
      />
    )
  }
}

export default RichEditor
