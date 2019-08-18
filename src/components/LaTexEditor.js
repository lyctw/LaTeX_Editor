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
        {'Input LaTeX: '}
        <MathQuill
          className="mathquill-field"
          style={{ width: '125px' }}
          latex={this.state.latex}
          onChange={mathField => {
            const latex = mathField.latex()
            // const text = mathField.text()  // fetch math text
            // console.log('latex changed:', latex)
            this.setState({ latex })
            if(this.state.latex) {
              this.props.enableLatexEditor();
            }
            else {
              this.props.disableLatexEditor();
            }
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