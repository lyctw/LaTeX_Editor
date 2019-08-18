import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import RichEditor from './components/RichEditor'

const App = () => {

  let [content, setContent] = useState(''); // html string


  return (
      <div>
      
        <RichEditor 
          // bounds={this.props.bounds}
          // editorRef={this.props.editorRef}
          placeholder={'請在此輸入您的回覆'}
          // value={}
          // onChange={(val) => {setContent(val)}}
          getDocument={(html) => {setContent(html)}}
        />
        <p>END</p>

      </div>
  )
};

ReactDOM.render(<App />, document.getElementById('app'));
