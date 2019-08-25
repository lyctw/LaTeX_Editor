const fs = require('fs')

let data = fs.readFileSync('./set1.txt', 'utf8').split('\n');
const set1 = data.map(e => e.trim())[0].split(' ')

// console.log(set1)
// console.log(`length = ${set1.length}`)

// let res1 = set1.map((e) => {
//     const code = e.replace('\\', '');
//     return `import ${code}_svg from '../img/set1/${code}.svg' `
// })

// console.log(` res1 length = ${res1.length}`)
// console.log(res1)

// <Button variant="ghost" size="small"  margin="0 x-small 0 0" onClick={(e) => {e.preventDefault(); handleAppendTex(String.raw` \times`)}}><img src={times_svg} /></Button>
let res2 = set1.map((e) => {
    const code = e.replace('\\', '');
    return '<Button variant="ghost" size="small"  margin="0 x-small 0 0" onClick={(e) => {e.preventDefault(); handleAppendTex(String.raw \\' + code +')}}><img src={'+ code +'_svg} /></Button>'
})

// console.log(` res1 length = ${res1.length}`)
console.log(res2)