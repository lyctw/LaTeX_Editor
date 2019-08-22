import React, { Component } from 'react'
import LaTexEditor from './LaTexEditor'
import LaTexPreviewer from './LaTexPreviewer'
import ReactQuill from 'react-quill'
import CustomToolbar from './CustomToolbar'
import '@instructure/canvas-theme'
import { Modal } from '@instructure/ui-overlays/lib/Modal'
import { Button, CloseButton } from '@instructure/ui-buttons'
import { Heading } from '@instructure/ui-elements/lib/Heading'
import { Tabs } from '@instructure/ui-tabs'
// import { Text } from '@instructure/ui-elements'
import 'react-quill/dist/quill.snow.css'


class RichEditor extends Component {
  constructor(props) {
    super(props)
    this.state = {
      content: '',
      cursorPosition: 0,
      open: false,
      selectedIndex: 0,
      // if use LaTexEditor, LaTexPreviewer should be disable and vise versa
      useLaTexEditor: false,
      useLaTexPreviewer: false
    }

    // ref:　https://github.com/zenoamaro/react-quill#methods
    this.quillRef = null;      // Quill instance
    this.reactQuillRef = null; // ReactQuill component
  }

  componentDidMount() {
    this.attachQuillRefs()
  }
  
  componentDidUpdate() {
    this.attachQuillRefs()
  }
  
  attachQuillRefs = () => {
    if (typeof this.reactQuillRef.getEditor !== 'function') return;
    this.quillRef = this.reactQuillRef.getEditor();
  }

  // updateCursorPosition = () => {
  //   this.state.cursorPosition = (this.quillRef.getSelection()) ? this.quillRef.getSelection().index : this.state.cursorPosition;
  // }
  
  handleInsert = (latex) => {
    const imgTag = (latex) ? `<img src="https://latex.codecogs.com/svg.latex?${latex}">` : '';
    // var range = this.quillRef.getSelection();
    // let position = range ? range.index : 0;
    this.quillRef.clipboard.dangerouslyPasteHTML(this.state.cursorPosition, imgTag)
    // this.setState((prevState) => ({cursorPosition: prevState.cursorPosition + 1});
    this.setState((prevState) => ({
        cursorPosition: prevState.cursorPosition + 1,
        open: false, 
        useLaTexEditor: false,
        useLaTexPreviewer: false
    }))
    this.quillRef.setSelection(4); // doesn't work !?!?
  }

  // handleInsert = (latex) => {
  //   const imgTag = (latex) ? `<img src="https://latex.codecogs.com/svg.latex?${latex}">` : '';
  //   this.setState((prevState) => {
  //     return {
  //       open: false, 
  //       useLaTexEditor: false,
  //       useLaTexPreviewer: false,
  //       content: `${prevState.content} ${imgTag}`
  //     }
  //   })
  // }

  handleButtonClick = () => {
    this.setState((state) => {
      return { open: !state.open }
    })
  };

  renderMathModel() {
    return (
      <div style={{ padding: '0 0 0 0', margin: '0 auto' }}>
        <Modal
          as="form"
          open={this.state.open}
          onDismiss={() => { this.setState({ open: false }) }}
          onSubmit={this.handleFormSubmit}
          size="large"
          label="Modal Dialog: Hello World"
          shouldCloseOnDocumentClick
        >
          <Modal.Header padding="small">
            <CloseButton
              placement="end"
              offset="medium"
              variant="icon"
              onClick={this.handleButtonClick}
            >
              Close
            </CloseButton>
            <Heading>Math Editor</Heading>
          </Modal.Header>
          <Modal.Body padding="small">
              <Tabs
                margin="auto"
                padding="medium"
                onRequestTabChange={(event, { index, id }) => {
                  this.setState({
                    selectedIndex: index
                  })
                }}
              >
                <Tabs.Panel 
                  id="tabA"
                  renderTitle="Edit Mode" 
                  // padding="large" 
                  isSelected={this.state.selectedIndex === 0}
                  isDisabled={false}
                >
                  <LaTexEditor 
                    handleInsert={this.handleInsert}
                    enableLatexEditor={() => {this.setState({useLaTexEditor: true})}}
                    disableLatexEditor={() => {this.setState({useLaTexEditor: false})}}
                  /> 
                </Tabs.Panel>
                <Tabs.Panel 
                  id="tabB" 
                  renderTitle="Preview Mode" 
                  isSelected={this.state.selectedIndex === 1}
                  isDisabled={false}
                >
                  <LaTexPreviewer 
                    handleInsert={this.handleInsert}
                    enableLatexPreviewer={() => {this.setState({useLaTexPreviewer: true})}}
                    disableLatexPreviewer={() => {this.setState({useLaTexPreviewer: false})}}
                  />
                </Tabs.Panel>
              </Tabs>
          </Modal.Body>
          {/* <Modal.Footer>
            <Button onClick={this.handleButtonClick}>Close</Button>&nbsp;
            <Button variant="primary" type="submit">Submit</Button>
          </Modal.Footer> */}
        </Modal>
      </div>
    )
  }

  render() {

    const customModules = {
      toolbar: {
        container: '#toolbar'
      }
    }

    return (
      <div>
        <CustomToolbar 
          onToggleModal={this.handleButtonClick}
        />
        <ReactQuill
          ref={(el) => { this.reactQuillRef = el }}
          id="quill"
          theme="snow"
          modules={customModules}
          // ref={this.props.editorRef}
          bounds="#right-nav"
          placeholder={this.props.placeholder}
          preserveWhitespace
          onChange={(content, delta, source, editor) => {
            // Need to store cursorPosition bacause editor will blur when Modal open 
            // and this.quillRef.getSelection() will be null
            const cursorPosition = (this.quillRef.getSelection()) ? this.quillRef.getSelection().index : this.state.cursorPosition;
            this.setState({
              content,
              cursorPosition
            });
            console.log(this.state.content);
            this.props.getDocument(this.state.content);
          }}
          onChangeSelection={() => {
            const cursorPosition = (this.quillRef.getSelection()) ? this.quillRef.getSelection().index : this.state.cursorPosition;
            this.setState({cursorPosition});
          }}
          value={this.state.content}
        />

        {this.renderMathModel()}
        
      </div>
    )
  }
}

export default RichEditor
