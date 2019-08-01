import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import Shortcut from './components/Shortcut'


const LaTexEditor = () => {
    const [tex, setTex] = useState('');
  
    const handleTexChange = event => {
      setTex(event.target.value);
    };

    const handleAddTex = (_tex) => {
        setTex(tex + _tex)
    } 
  
    return (
      <>
        <img src={"https://i.imgur.com/Nbvxf0C.png"} />

        <Shortcut handleAddTex={handleAddTex}/>

        <h3>Input LaTeX: </h3>
        <input value={tex} onChange={handleTexChange} />
        <div id="present-tex">
            <h3>Preview:</h3>
            <img src={"https://latex.codecogs.com/svg.latex?" + tex} />
        </div>
      </>
    );
};



ReactDOM.render(<LaTexEditor />, document.getElementById('app'));
