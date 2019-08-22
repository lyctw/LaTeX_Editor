import React from 'react';
import { Button } from '@instructure/ui-buttons'
// import add_svg from '../img/set1/add.svg'
// import minus_svg from '../img/set1/minus.svg'
import times_svg from '../img/set1/times.svg'
import div_svg from '../img/set1/div.svg'  
import amalg_svg from '../img/set1/amalg.svg'
import star_svg from '../img/set1/star.svg'
import pm_svg from '../img/set1/pm.svg'

const Shortcut = ({handleAppendTex}) => {
    return (
        <div>
            <details><summary>Shortcut</summary>

                <Button variant="ghost" size="small"  margin="0 x-small 0 0" onClick={(e) => {e.preventDefault(); handleAppendTex(String.raw` \times `)}}><img src={times_svg} /></Button>
                <Button variant="ghost" size="small"  margin="0 x-small 0 0" onClick={(e) => {e.preventDefault();handleAppendTex(String.raw` \div `)}}><img src={div_svg} /></Button>
                <Button variant="ghost" size="small"  margin="0 x-small 0 0" onClick={(e) => {e.preventDefault();handleAppendTex(String.raw` \amalg `)}}><img src={amalg_svg} /></Button>
                <Button variant="ghost" size="small"  margin="0 x-small 0 0" onClick={(e) => {e.preventDefault();handleAppendTex(String.raw` \star `)}}><img src={star_svg} /></Button>
                <Button variant="ghost" size="small"  margin="0 x-small 0 0" onClick={(e) => {e.preventDefault();handleAppendTex(String.raw` \pm `)}}><img src={pm_svg} /></Button>
                
            
            </details>
        </div>
    );
}

export default Shortcut;