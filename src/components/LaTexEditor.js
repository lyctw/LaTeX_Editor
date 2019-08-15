import React from 'react';
import MathQuill, { addStyles as addMathquillStyles } from 'react-mathquill'
 
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
        {/* <p style={{color: "cadetblue"}}>DEMO 1: 和word輸入方程式相同，輸入LaTeX語法按空白鍵會自動渲染，並可以在編輯其中的變數，使用範例如下</p>
        <img src={"https://cloud.githubusercontent.com/assets/225809/15163580/1bc048c4-16be-11e6-98a6-de467d00cff1.gif"} width="150px"/><br/> */}
        Math field:{' '}
        <MathQuill
          className="mathquill-field"
          latex={this.state.latex}
          onChange={mathField => {
            const latex = mathField.latex()
            // const text = mathField.text()  // fetch math text
            console.log('latex changed:', latex)
            this.setState({ latex })
          }}
          mathquillDidMount={el => {
            this.mathQuillEl = el
          }}
        />
        <br/>
        <button 
            onClick={() => { 
                const currentTex = this.mathQuillEl.latex();
                this.mathQuillEl.latex('')
                this.props.handleInsert(currentTex);
            }}
        >Insert LaTeX</button> 
      </div>
    )
  }
}