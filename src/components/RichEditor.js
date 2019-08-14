import React, { Component } from 'react'
import LaTexPreviewer from './LaTexPreviewer'
import LaTexEditor from './LaTexEditor'
import ReactQuill from 'react-quill'

import 'react-quill/dist/quill.snow.css'

class RichEditor extends Component {
  constructor(props) {
    super(props)
    this.state = {
      content: ''
    }
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
        [{ 'align': [] }],
        ['clean'],
      ]
    }
    return (
      <div>
        <ReactQuill
          id="quill"
          theme="snow"
          modules={customModules}
          // ref={this.props.editorRef}
          bounds="#right-nav"
          placeholder={this.props.placeholder}
          preserveWhitespace
          onChange={(content, delta, source, editor) => {
            this.setState({content})
            console.log(this.state)
            // console.log(editor.getHTML())
          }}
          value={this.state.content}
        />

        <LaTexEditor />
        
      </div>
    )
  }
}

export default RichEditor
