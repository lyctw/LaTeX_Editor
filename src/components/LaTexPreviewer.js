import React, { useState } from 'react';
import Shortcut from './Shortcut'
import { Button } from '@instructure/ui-buttons'
import { TextArea } from '@instructure/ui-forms'


export default class LaTexPreviewer extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        latex: ''
      }
    }
  
    handleLatexChange = event => {
      this.setState({latex: event.target.value});
      if(this.state.latex) {
        this.props.enableLatexPreviewer();
      }
      else {
        this.props.disableLatexPreviewer();
      }
    }

    handleAppendTex = (_tex) => {
      this.setState((prevState) => ({latex: prevState.latex + _tex}))
    } 
  
    render() {
      return (
        <div>
          {/* <img src={"https://i.imgur.com/Nbvxf0C.png"} /> */}

          <Shortcut handleAppendTex={this.handleAppendTex}/>
          <br/>
          <TextArea 
            value={this.state.latex} 
            onChange={this.handleLatexChange}
            placeholder="E = mc^2"
            label="Input LaTeX"
          />
          <div id="present-tex">
              <p>Preview:</p>
              <img src={String.raw`https://latex.codecogs.com/svg.latex?\LARGE ${this.state.latex}`} />
          </div>

          <Button 
              onClick={() => { 
                  this.props.handleInsert(this.state.latex);
              }}
          >Add</Button> 
        </div>
      )
    }
};

