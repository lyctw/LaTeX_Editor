const fs = require('fs');
    

const downloadPromise = require('./utils.js')



// const set1 = fs.readFileSync('./set1.txt', 'utf8').trim().split(' ');
// const set2 = fs.readFileSync('./set2.txt', 'utf8').trim().split(' ');
// const set3 = fs.readFileSync('./set3.txt', 'utf8').trim().split(' ');
// const set4 = fs.readFileSync('./set4.txt', 'utf8').trim().split(' ');
// const set5 = fs.readFileSync('./set5.txt', 'utf8').trim().split(' ');
// const set6 = fs.readFileSync('./set6.txt', 'utf8').trim().split(' ');

let data = fs.readFileSync('./set7.txt', 'utf8').split('\n');
const set7 = data.map(e => e.trim());


// set 1
// (async (list, setName) => {
//     // `setName` is the download path of the set 
//     for(let i = 0; i < list.length; i++) {
//         let msg = await downloadPromise(list[i], setName);
//         console.log(msg)
//     }
//     console.log(`${list.length} svg files have been download in ${setName}`)
// })(set1, 'set1'); 

//set2 
// (async (list, setName) => {
//     // `setName` is the download path of the set 
//     for(let i = 0; i < list.length; i++) {
//         let msg = await downloadPromise(list[i], setName);
//         console.log(msg)
//     }
//     console.log(`${list.length} svg files have been download in ${setName}`)
// })(set2, 'set2'); 

//set3
// (async (list, setName) => {
//     // `setName` is the download path of the set 
//     for(let i = 0; i < list.length; i++) {
//         let msg = await downloadPromise(list[i], setName);
//         console.log(msg)
//     }
//     console.log(`${list.length} svg files have been download in ${setName}`)
// })(set3, 'set3'); 

//set4
// (async (list, setName) => {
//     // `setName` is the download path of the set 
//     for(let i = 0; i < list.length; i++) {
//         let msg = await downloadPromise(list[i], setName);
//         console.log(msg)
//     }
//     console.log(`${list.length} svg files have been download in ${setName}`)
// })(set4, 'set4'); 

//set5 
// (async (list, setName) => {
//     // `setName` is the download path of the set 
//     console.log('[WARNING] Some of svg in set 5 have to download and check manually.')
//     for(let i = 0; i < list.length; i++) {
//         let msg = await downloadPromise(list[i], setName);
//         console.log(msg)
//     }
//     console.log(`${list.length} svg files have been download in ${setName}`)
// })(set5, 'set5'); 

//set6
// (async (list, setName) => {
//     // `setName` is the download path of the set 
//     for(let i = 0; i < list.length; i++) {
//         let msg = await downloadPromise(list[i], setName);
//         console.log(msg)
//     }
//     console.log(`${list.length} svg files have been download in ${setName}`)
// })(set6, 'set6'); 

// set 7
(async (list, setName) => {
    // `setName` is the download path of the set 
    for(let i = 0; i < list.length; i++) {
        let msg = await downloadPromise(list[i], setName);
        console.log(msg)
    }
    console.log(`${list.length} svg files have been download in ${setName}`)
})(set7, 'set7'); 