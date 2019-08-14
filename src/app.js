import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import RichEditor from './components/RichEditor'

const App = () => {

  let [content, setContent] = useState(''); // html string


  return (
      <>

        <RichEditor 
          // bounds={this.props.bounds}
          // editorRef={this.props.editorRef}
          placeholder={'enter'}
          // value={}
          // onChange={(val) => {setContent(val)}}
        />

      </>
  )
};

ReactDOM.render(<App />, document.getElementById('app'));
