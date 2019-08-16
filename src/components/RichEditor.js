import React, { Component } from 'react'
import LaTexEditor from './LaTexEditor'
import ReactQuill from 'react-quill'
import CustomToolbar from './CustomToolbar'
import '@instructure/canvas-theme'
import { Modal } from '@instructure/ui-overlays/lib/Modal'
import { Button, CloseButton } from '@instructure/ui-buttons'
import { Heading } from '@instructure/ui-elements/lib/Heading'
import { Tabs } from '@instructure/ui-tabs'
import { Text } from '@instructure/ui-elements'
import 'react-quill/dist/quill.snow.css'


class RichEditor extends Component {
  constructor(props) {
    super(props)
    this.state = {
      content: '',
      open: false,
      selectedIndex: 0
    }
  }

  // 1.BEGIN
  handleButtonClick = () => {
    this.setState(function (state) {
      return { open: !state.open }
    })
  };

  handleFormSubmit = e => {
    e.preventDefault()
    console.log('form submitted')
    this.setState(state => ({ open: false }))
  }

  renderMathModel() {
    return (
      <div style={{ padding: '0 0 11rem 0', margin: '0 auto' }}>
        {/* <Button onClick={this.handleButtonClick}>
          {this.state.open ? 'Close' : 'Open'} the Modal
        </Button> */}
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
              {/* <LaTexEditor 
                handleInsert={(latex) => {
                  const imgTag = (latex) ? `<img src="https://latex.codecogs.com/svg.latex?${latex}">` : '';
                  this.setState((prevState) => {
                    return {
                      open: false, 
                      content: `${prevState.content} ${imgTag}`
                    }
                  })
                }}
              /> */}
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
                  renderTitle="Tab A" 
                  // padding="large" 
                  selected={this.state.selectedIndex === 0}
                >
                  aaa
                </Tabs.Panel>
                <Tabs.Panel 
                  id="tabB" 
                  renderTitle="Tab B" 
                  selected={this.state.selectedIndex === 1}
                >
                  123
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
  // 1.END

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
          }}
          value={this.state.content}
        />

        {this.renderMathModel()}
        
      </div>
    )
  }
}

export default RichEditor
