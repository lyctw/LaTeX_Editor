import React from 'react';
import ReactDOM from 'react-dom';
import RichEditor from './components/RichEditor'

const App = () => {
  return (
      <div>
        <RichEditor 
          bounds={'#right-nav'}
          placeholder={'請在此輸入您的回覆'}
          onDocumentChange={(html) => {
            console.log('doc:' + html)
          }}
        />
      </div>
  )
};

ReactDOM.render(<App />, document.getElementById('app'));
