/**
 * More Infomation: 
 *   - https://quilljs.com/docs/modules/toolbar/
 *   - Example of all toolbar options: https://github.com/quilljs/quill/blob/develop/docs/_includes/standalone/full.html
 */

import React from 'react';

const CustomToolbar = () => (
    <div id="toolbar">
        <span className="ql-formats">
            <button className="ql-header" value="1"></button>
            <button className="ql-header" value="2"></button>
                
            <button className="ql-bold"></button>
            <button className="ql-italic"></button>
            <button className="ql-underline"></button>     
        
            <button className="ql-list" value="ordered"></button>
            <button className="ql-list" value="bullet"></button>
            <select className="ql-align"></select>      
        
            <button className="ql-link"></button>
            <button className="ql-image"></button>
            {/* <button className="ql-video"></button> */}
        </span>
        <span className="ql-formats">
            <button className="ql-insertMath"></button>
        </span>
    </div>
)

export default CustomToolbar;
  

/*
const customModules = {
      toolbar: [
        [{ 'header': [1, 2, 3, false] }],
        ['bold', 'italic', 'underline'],
        ['link'],
        [{ 'list': 'ordered'}, { 'list': 'bullet' }],
        //['blockquote', 'strike'],
        //['image'],
        [{ 'align': [] }],
        ['clean'],
      ]
    }
*/