# LaTeX Editor React Component

> issue1 solved! :+1:

## 1

TBD

## 2

## Syntax Sets

### Set1

\cap \pm \cup \cdot \uplus \Cup \Cap \mp \times \sqcap \sqcup \bigsqcup \ast \wedge \vee \bigtriangleup \div \barwedge \veebar \bigtriangledown \star \triangleright \triangleleft \setminus \dotplus \lozenge \blacklozenge \bigstar \bigcirc \bullet \circ \amalg \dagger \square \blacksquare \bigoplus \bigotimes \blacktriangle \triangle \ddagger \wr \triangledown \blacktriangledown \bigodot \oplus \ominus \diamond \circledcirc \oslash \otimes \odot \circleddash \circledast 

### Set2

\therefore \partial \mathbb{P}\angle \because \imath \mathbb{N}\measuredangle \sphericalangle \mathbb{Z}\jmath \cdots \ddots \Re \mathbb{I}\varnothing \vdots \Im \mathbb{Q} \S \infty \forall \mathbb{R}\mho \P \exists \mathbb{C} \wp \copyright \top 

### Set3

\aa \AA \ae \AE \l \L \o \O \oe \OE \ss \SS \$ \pounds \cent \euro 

### Set 4

\sqsubset \sqsupset \sqsubseteq \sqsupseteq \subset \supset \subseteq \supseteq \nsubseteq \nsupseteq \subseteqq \supseteqq \nsubseteq \nsupseteqq \in \ni \notin 

### Set 5

{a}' {a}'' \dot{a} \ddot{a} \hat{a}  \check{a} \grave{a} \acute{a} \tilde{a} \breve{a} \bar{a} \vec{a} \not{a} a^{\circ}

### Crawler

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

