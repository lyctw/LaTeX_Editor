import React from 'react';
import MathQuill, { addStyles as addMathquillStyles } from 'react-mathquill'
import '@instructure/canvas-theme'
import { Button } from '@instructure/ui-buttons'

addMathquillStyles()



export default class LaTexEditor extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      latex: ''
    }

    this.mathQuillEl = null

    // this.resetField = () => {
    //   this.mathQuillEl.latex(initialLatex)
    // }
  }

  render() {
    return (
      <div>
        <b>Input LaTeX: </b>
        <MathQuill
          className="mathquill-field"
          style={{ width: '100%' }}
          latex={this.state.latex}
          onChange={mathField => {
            const latex = mathField.latex()
            this.setState({ latex })
            this.props.setEditorActivation(this.state.latex);
          }}
          mathquillDidMount={el => {
            this.mathQuillEl = el
          }}
        />
        <br/><br/>
        
        <Button 
            onClick={() => { 
                const currentTex = this.mathQuillEl.latex();
                this.mathQuillEl.latex('')
                this.props.handleInsert(currentTex);
            }}
        >Add</Button> 
        
      </div>
    )
  }
}