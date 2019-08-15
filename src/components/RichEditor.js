import React, { Component } from 'react'
import LaTexEditor from './LaTexEditor'
import ReactQuill from 'react-quill'
import CustomToolbar from './CustomToolbar'
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
      toolbar: {
        container: '#toolbar'
      }
    }
    return (
      <div>
        <CustomToolbar />
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

        <LaTexEditor 
          handleInsert={(latex) => {
            const imgTag = `<img src="https://latex.codecogs.com/svg.latex?${latex}">`;
            this.setState((prevState) => {
              return {content: `${prevState.content} ${imgTag}`}
            })
          }}
        />
        
      </div>
    )
  }
}

export default RichEditor
