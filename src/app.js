import React from 'react';
import ReactDOM from 'react-dom';
import RichEditor from './components/RichEditor'

const App = () => {
  return (
      <div>
      
        <RichEditor 
          // bounds={this.props.bounds}
          // editorRef={this.props.editorRef}
          placeholder={'請在此輸入您的回覆'}
          // value={}
          // onChange={(val) => {setContent(val)}}
          // getDocument={(html) => {console.log(html)}}
        />

      </div>
  )
};

ReactDOM.render(<App />, document.getElementById('app'));
