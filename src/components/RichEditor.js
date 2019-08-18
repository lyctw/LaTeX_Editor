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
      open: false,
      selectedIndex: 0,
      // if use LaTexEditor, LaTexPreviewer should be disable and vise versa
      useLaTexEditor: false,
      useLaTexPreviewer: false
    }
  }

  handleButtonClick = () => {
    this.setState((state) => {
      return { open: !state.open }
    })
  };

  handleInsert = (latex) => {
    const imgTag = (latex) ? `<img src="https://latex.codecogs.com/svg.latex?${latex}">` : '';
    this.setState((prevState) => {
      return {
        open: false, 
        useLaTexEditor: false,
        useLaTexPreviewer: false,
        content: `${prevState.content} ${imgTag}`
      }
    })
  }

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
            this.props.getDocument(this.state.content)
          }}
          value={this.state.content}
        />

        {this.renderMathModel()}
        
      </div>
    )
  }
}

export default RichEditor
