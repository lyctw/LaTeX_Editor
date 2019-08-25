import React from 'react';
import { Button } from '@instructure/ui-buttons'
import { ToggleDetails } from '@instructure/ui-toggle-details/lib/ToggleDetails'

const syntax_set1 = ['x^{a}', 'x_{a}', 'x_{b}^{a}', '{x_{b}}^{a}', 
                     String.raw`_{b}^{a}\textrm{C}`, String.raw`\frac{a}{b}`, 
                     String.raw`x\tfrac{b}{a}`, String.raw`\frac{\partial }{\partial x}`,
                     String.raw`\frac{\partial^2 }{\partial x^2}`, String.raw`\frac{\mathrm{d} }{\mathrm{d} x}`,
                     String.raw`\int`, String.raw`\int_{b}^{a}`, 
                     String.raw`\oint`, String.raw`\oint_{b}^{a}`, String.raw`\iint_{b}^{a}`,                     String.raw`\bigcap`,
                     String.raw`\bigcap_{a}^{b}`, String.raw`\bigcup`, String.raw`\bigcup_{a}^{b}`,
                     String.raw`\lim_{x \rightarrow 0} `,  String.raw`\sum`, String.raw`\sum_{a}^{b}`,
                     String.raw`\sqrt{x}`, String.raw`\sqrt[n]{x}`, String.raw`\prod`,
                     String.raw`\prod_{a}^{b}`, String.raw`\coprod`, String.raw`\coprod_{a}^{b}`,
                    ];

const Shortcut = ({handleAppendTex}) => {
    return (
        <div>
            <ToggleDetails
                summary="Shortcuts"
            >                
                {/* <Button variant="ghost" size="small"  margin="0 x-small 0 0" onClick={(e) => {e.preventDefault(); handleAppendTex(String.raw` x^{a}`)}}><img src={'https://latex.codecogs.com/svg.latex?x^{a}'} /></Button> */}
                {syntax_set1.map((code) => (<Button key={code} variant="ghost" size="small"  margin="x-small x-small x-small x-small" onClick={(e) => {e.preventDefault(); handleAppendTex(code)}}><img src={`https://latex.codecogs.com/svg.latex?${code}`} height={'27px'} /></Button>))}
            </ToggleDetails>
        </div>
    );
}

export default Shortcut;