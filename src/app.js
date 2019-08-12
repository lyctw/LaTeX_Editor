import React from 'react';
import ReactDOM from 'react-dom';
import LaTexPreviewer from './components/LaTexPreviewer'
import LaTexEditor from './components/LaTexEditor'

const App = () => {
  return (
      <>
      
          <LaTexEditor />

          <hr/>

          <LaTexPreviewer />

      </>
  )
};

ReactDOM.render(<App />, document.getElementById('app'));
