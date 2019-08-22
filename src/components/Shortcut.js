import React from 'react';
// import add_svg from '../img/set1/add.svg'
// import minus_svg from '../img/set1/minus.svg'
// import times_svg from '../img/set1/times.svg'
import div_svg from '../img/set1/div.svg'  
import amalg_svg from '../img/set1/amalg.svg'
import star_svg from '../img/set1/star.svg'
import pm_svg from '../img/set1/pm.svg'

const Shortcut = ({handleAppendTex}) => {
    return (
        <div>
            <details><summary>Shortcut</summary>

                {/* <button onClick={(e) => {e.preventDefault();handleAppendTex(' + ')}}><img src={add_svg} /></button> */}
                {/* <button onClick={(e) => {e.preventDefault();handleAppendTex(' - ')}}><img src={minus_svg} /></button> */}
                <button onClick={(e) => {e.preventDefault(); handleAppendTex(String.raw` \times `)}}><img src={div_svg} /></button>
                <button onClick={(e) => {e.preventDefault();handleAppendTex(String.raw` \div `)}}><img src={div_svg} /></button>
                <button onClick={(e) => {e.preventDefault();handleAppendTex(String.raw` \amalg `)}}><img src={amalg_svg} /></button>
                <button onClick={(e) => {e.preventDefault();handleAppendTex(String.raw` \star `)}}><img src={star_svg} /></button>
                <button onClick={(e) => {e.preventDefault();handleAppendTex(String.raw` \pm `)}}><img src={pm_svg} /></button>
                
            
            </details>
        </div>
    );
}

export default Shortcut;