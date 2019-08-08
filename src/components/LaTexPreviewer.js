import React, { useState } from 'react';
// import ReactDOM from 'react-dom';
import Shortcut from './Shortcut'


const LaTexPreviewer = () => {
    const [tex, setTex] = useState('');
  
    const handleTexChange = event => {
      setTex(event.target.value);
    };

    const handleAppendTex = (_tex) => {
        setTex(tex + _tex)
    } 
  
    return (
      <>
        {/* <p>這個元件還在施工中 TODO: 爬下svg圖，完成shortcut按鈕，之後這個元件要能從mathQuill吃latex語法進來</p> */}
        <p style={{color: "cadetblue"}}>DEMO 2: 輸入latex語法，動態預覽，下面有欄位可打開讓使用者選擇LaTeX語法</p>
        {/* <img src={"https://i.imgur.com/Nbvxf0C.png"} /> */}

        <Shortcut handleAppendTex={handleAppendTex}/>
        <h3>Enter LaTeX: </h3>
        <textarea value={tex} onChange={handleTexChange} />
        <div id="present-tex">
            <h3>Preview:</h3>
            <img src={String.raw`https://latex.codecogs.com/svg.latex?\LARGE ${tex}`} />
        </div>

        <button onClick={
          () => {
            handleAppendTex(String.raw`\begin{bmatrix} 1 & 0\\ 0 & 1 \end{bmatrix}`)
          }
        }>test</button>
      </>
    );
};

export default LaTexPreviewer;