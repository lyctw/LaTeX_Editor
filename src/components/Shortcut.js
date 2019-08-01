import React from 'react';
import add_svg from '../img/set1/add.svg'
import minus_svg from '../img/set1/minus.svg'
import times_svg from '../img/set1/times.svg'
import div_svg from '../img/set1/div.svg'  

const Shortcut = ({handleAddTex}) => {
    return (
        <>
            <details><summary>Set1</summary>

                <button onClick={() => {handleAddTex(' + ')}}><img src={add_svg} /></button>
                <button onClick={() => {handleAddTex(' - ')}}><img src={minus_svg} /></button>
                <button onClick={() => {handleAddTex(String.raw`\times `)}}><img src={times_svg} /></button>
                <button onClick={() => {handleAddTex(String.raw`\div `)}}><img src={div_svg} /></button>

            
            </details>
        </>
    );
}

export default Shortcut;