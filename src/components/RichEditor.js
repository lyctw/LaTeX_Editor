import React, { Component } from 'react'
import LaTexEditor from './LaTexEditor'
import LaTexPreviewer from './LaTexPreviewer'
import ReactQuill from 'react-quill'
import CustomToolbar from './CustomToolbar'
import '@instructure/canvas-theme'
import { Modal } from '@instructure/ui-overlays/lib/Modal'
import { CloseButton } from '@instructure/ui-buttons'
import { Heading } from '@instructure/ui-elements/lib/Heading'
import { Tabs } from '@instructure/ui-tabs'
// import { Text } from '@instructure/ui-elements'
import 'react-quill/dist/quill.snow.css'


export default class RichEditor extends Component {
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
  
  handleInsert = (latex) => {
    const imgTag = (latex) ? `<img src="https://latex.codecogs.com/svg.latex?${latex}">` : '';
    this.quillRef.clipboard.dangerouslyPasteHTML(this.state.cursorPosition, imgTag);
    this.setState({
        open: false, 
        useLaTexEditor: false,
        useLaTexPreviewer: false
    })
    // console.log(this.quillRef.setSelection)
    // this.quillRef.setSelection(this.state.cursorPosition); // doesn't work !?!?
    this.quillRef.blur();
  }

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
          label="Modal Dialog"
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
                  isDisabled={this.state.useLaTexPreviewer}
                >
                  <LaTexEditor 
                    handleInsert={this.handleInsert}
                    setEditorActivation={(latex) => {
                      if(latex) {
                        this.setState({
                          useLaTexEditor: true,
                          useLaTexPreviewer: false
                        });
                      } else {
                        this.setState({ 
                          useLaTexEditor: false,
                          useLaTexPreviewer: false
                        });
                      }
                    }}
                  /> 
                </Tabs.Panel>
                <Tabs.Panel 
                  id="tabB" 
                  renderTitle="Preview Mode" 
                  isSelected={this.state.selectedIndex === 1}
                  isDisabled={this.state.useLaTexEditor}
                >
                  <LaTexPreviewer 
                    handleInsert={this.handleInsert}
                    setPreviewerActivation={(latex) => {
                      if(latex !== '') {
                        this.setState({
                          useLaTexEditor: false,
                          useLaTexPreviewer: true
                        });
                      } else {
                        this.setState({ 
                          useLaTexEditor: false,
                          useLaTexPreviewer: false
                        });
                      }
                    }}
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
            this.props.onDocumentChange(this.state.content); 
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
