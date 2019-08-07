const fs = require('fs')

let data = fs.readFileSync('./set7.txt', 'utf8').split('\n');
const set7 = data.map(e => e.trim())



console.log(set7)