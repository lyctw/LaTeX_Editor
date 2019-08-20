/**
 * More Infomation: 
 *   - https://quilljs.com/docs/modules/toolbar/
 *   - Example of all toolbar options: https://github.com/quilljs/quill/blob/develop/docs/_includes/standalone/full.html
 */

import React from 'react'
import fx_svg from '../img/fx.svg'


export default class CustomToolbar extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div id="toolbar">
                <span className="ql-formats">
                    <select className="ql-header" defaultValue={""} onChange={e => e.persist()}>
                        <option value="1"></option>
                        <option value="2"></option>
                        <option></option>
                    </select>
                
                    <button className="ql-bold"></button>
                    <button className="ql-italic"></button>
                    <button className="ql-underline"></button>     
                
                    <button className="ql-list" value="ordered"></button>
                    <button className="ql-list" value="bullet"></button>
                    <select className="ql-align"></select>      
                
                    <button className="ql-link"></button>
                    {/* <button className="ql-image"></button> */}
                    {/* <button className="ql-video"></button> */}
        
                    <button className="math" onClick={() => {
                        // alert('click')
                        this.props.onToggleModal();
                    }}>
                        <img src={fx_svg} />
                    </button>
                </span>
            </div> 
        ) 
    }
} 
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