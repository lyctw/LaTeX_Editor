import React, { Component } from 'react'
import '@instructure/canvas-theme'
import LaTexEditor from './LaTexEditor'
import LaTexPreviewer from './LaTexPreviewer'
import ReactQuill from 'react-quill'
import 'react-quill/dist/quill.snow.css'
import CustomToolbar from './CustomToolbar'
import { Modal } from '@instructure/ui-overlays/lib/Modal'
import { CloseButton } from '@instructure/ui-buttons'
import { Heading } from '@instructure/ui-elements/lib/Heading'
import { Tabs } from '@instructure/ui-tabs'
import ImgUploader from './ImgUploader'



export default class RichEditor extends Component {
  constructor(props) {
    super(props)
    this.state = {
      content: '',
      cursorPosition: 0,
      openMath: false,
      openImg:  false,
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
    const imgTag = (latex) ? `<img src="https://latex.codecogs.com/gif.latex?${latex}">` : '';
    this.quillRef.clipboard.dangerouslyPasteHTML(this.state.cursorPosition, imgTag);
    this.setState({
        openMath: false, 
        useLaTexEditor: false,
        useLaTexPreviewer: false
    })
    // console.log(this.quillRef.setSelection)
    // this.quillRef.setSelection(this.state.cursorPosition); // doesn't work !?!?
    this.quillRef.blur();
  }

  handleInsertImg = (img_url) => {
    const imgTag = (img_url) ? `<img src="${img_url}">` : '';
    this.quillRef.clipboard.dangerouslyPasteHTML(this.state.cursorPosition, imgTag);
    this.setState({
        openImg: false
    })
    // console.log(this.quillRef.setSelection)
    // this.quillRef.setSelection(this.state.cursorPosition); // doesn't work !?!?
    this.quillRef.blur();
  }


  // CustomToolbar props 
  handleMathButtonClick = () => {
    this.setState((state) => {
      return { 
        openMath: !state.openMath,
        useLaTexEditor: false,
        useLaTexPreviewer: false
      }
    })
  };

  handleImgButtonClick = () => {
    this.setState((state) => {
      return { 
        openImg: !state.openImg
      }
    })
  }

  renderMathModel() {
    return (
      <div style={{ padding: '0 0 0 0', margin: '0 auto' }}>
        <Modal
          as="form"
          open={this.state.openMath}
          onDismiss={() => { this.setState({ openMath: false }) }}
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
              onClick={this.handleMathButtonClick}
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
            <Button onClick={this.handleMathButtonClick}>Close</Button>&nbsp;
            <Button variant="primary" type="submit">Submit</Button>
          </Modal.Footer> */}
        </Modal>
      </div>
    )
  }

  renderImgModel() {
    return (
      <div style={{ padding: '0 0 0 0', margin: '0 auto' }}>
        <Modal
          as="form"
          open={this.state.openImg}
          onDismiss={() => { this.setState({ openImg: false }) }}
          onSubmit={() => {}}
          size="large"
          label="Modal Dialog - Img"
          shouldCloseOnDocumentClick
        >
          <Modal.Header padding="small">
            <CloseButton
              placement="end"
              offset="medium"
              variant="icon"
              onClick={this.handleImgButtonClick}
            >
              Close
            </CloseButton>
            <Heading>Image Uploader</Heading>
          </Modal.Header>
          <Modal.Body>
            <ImgUploader 
              onImageUpload={(imgUrl) => {
                console.log(`app img: ${imgUrl}`)
              }}
              handleInsertImg={this.handleInsertImg}
            />
          </Modal.Body>
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
          onToggleMathModal = { this.handleMathButtonClick }
          onToggleImgModal  = { this.handleImgButtonClick }
        />

        <ReactQuill

          ref={(el) => { this.reactQuillRef = el }}
          id="quill"
          theme="snow"
          modules={customModules}
          // ref={this.props.editorRef}
          bounds={this.props.bounds} //"#right-nav"
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

        { this.renderMathModel() }
        
        { this.renderImgModel() }
        

      </div>
    )
  }
}
