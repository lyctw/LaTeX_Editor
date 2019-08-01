# LaTeX Editor React Component

## 1

TBD

## 2

爬取codecogs的latex語法圖片

```js
const fs = require('fs'),
    request = require('request');

const codeCogs = 'https://latex.codecogs.com/svg.latex?';

const set1 = [String.raw`\cap`, String.raw`\pm`, String.raw`\cup`, String.raw`\cdot`, String.raw`\uplus`, String.raw`\Cup`, String.raw`\Cap`, String.raw`\mp`, String.raw`\times`, String.raw`\sqcap`, String.raw`\sqcup`, String.raw`\bigsqcup`, String.raw`\ast`, String.raw`\wedge`, String.raw`\vee`, String.raw`\bigtriangleup`, String.raw`\div`, String.raw`\barwedge`, String.raw`\veebar`, String.raw`\bigtriangledown`, String.raw`\star`, String.raw`\triangleright`, String.raw`\triangleleft`, String.raw`\setminus`, String.raw`\dotplus`, String.raw`\lozenge`, String.raw`\blacklozenge`, String.raw`\bigstar`, String.raw`\bigcirc`, String.raw`\bullet`, String.raw`\circ`, String.raw`\amalg`, String.raw`\dagger`, String.raw`\square`, String.raw`\blacksquare`, String.raw`\bigoplus`, String.raw`\bigotimes`, String.raw`\blacktriangle`, String.raw`\triangle`, String.raw`\ddagger`, String.raw`\wr`, String.raw`\triangledown`, String.raw`\blacktriangledown`, String.raw`\bigodot`, String.raw`\oplus`, String.raw`\ominus`, String.raw`\diamond`, String.raw`\circledcirc`, String.raw`\oslash`, String.raw`\otimes`, String.raw`\odot`, String.raw`\circleddash`, String.raw`\circledast`];

var download = function(uri, filename, callback){
  request.head(uri, function(err, res, body){
    // console.log('content-type:', res.headers['content-type']);
    // console.log('content-length:', res.headers['content-length']);

    request(uri).pipe(fs.createWriteStream(filename)).on('close', callback);
  });
};


const downloadPromise = (tex, setName) => {
    return new Promise((resolve, reject) => {
        download(`${codeCogs}${tex}`, `./${setName}/${tex.split("\\")[1]}.svg` , function(){
            resolve(`[DONE] ./${setName}/${tex.split("\\")[1]}.svg`);
        });
    });
}

// set 1
(async (list, setName) => {
    for(let i = 0; i < list.length; i++) {
        let msg = await downloadPromise(list[i], setName);
        console.log(msg)
    }
})(set1, 'set1');
```