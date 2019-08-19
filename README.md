// TESTING BRANCH
# LaTeX Editor React Component

[TODO]
~~把Editor、Previewer，當成不同的功能，都能insert `<img>` with latex
TEST~~
Testing

## Directory

* crawler: 爬取codecogs的svg檔
* src\components\mathquill-0.10.1\ : 放mathquill原生library，目前沒用到，現在是用react-mathquill，感覺沒在維護，之後可自己寫個wrapper component

## Quill

* 為了客製化Button 使用HTML Custom Toolbar 綁定

## LaTeX Syntax Svg Crawler

<details><summary>Syntax Sets</summary>


### Set1

```
\cap \pm \cup \cdot \uplus \Cup \Cap \mp \times \sqcap \sqcup \bigsqcup \ast \wedge \vee \bigtriangleup \div \barwedge \veebar \bigtriangledown \star \triangleright \triangleleft \setminus \dotplus \lozenge \blacklozenge \bigstar \bigcirc \bullet \circ \amalg \dagger \square \blacksquare \bigoplus \bigotimes \blacktriangle \triangle \ddagger \wr \triangledown \blacktriangledown \bigodot \oplus \ominus \diamond \circledcirc \oslash \otimes \odot \circleddash \circledast
```

### Set2

```
\therefore \partial \mathbb{P} \angle \because \imath \mathbb{N} \measuredangle \sphericalangle \mathbb{Z} \jmath \cdots \ddots \Re \mathbb{I} \varnothing \vdots \Im \mathbb{Q} \S \infty \forall \mathbb{R} \mho \P \exists \mathbb{C} \wp \copyright \top 
```

### Set3

```
\aa \AA \ae \AE \l \L \o \O \oe \OE \ss \SS \$ \pounds \cent \euro 
```

### Set 4

```
\sqsubset \sqsupset \sqsubseteq \sqsupseteq \subset \supset \subseteq \supseteq \nsubseteq \nsupseteq \subseteqq \supseteqq \nsubseteq \nsupseteqq \in \ni \notin
```

### Set 5

```
{a}' {a}'' \dot{a} \ddot{a} \hat{a}  \check{a} \grave{a} \acute{a} \tilde{a} \breve{a} \bar{a} \vec{a} \not{a} a^{\circ}
```

### Set 6

```
\widetilde{abc} \widehat{abc} \overleftarrow{abc} \overrightarrow{abc} \overline{abc} \underline{abc} \overbrace{abc} \underbrace{abc} \overset{a}{abc} \underset{a}{abc}
```

### Set 7

```
\mapsto \to \leftarrow \rightarrow \Leftarrow \Rightarrow \leftrightarrow\Leftrightarrow \leftharpoonup \rightharpoonup \leftharpoondown \rightharpoondown \leftrightharpoons \rightleftharpoons \xleftarrow[a]{b} \xrightarrow[a]{b} \overset{a}{\leftarrow} \overset{a}{\rightarrow} \underset{a}{\leftarrow} \underset{a}{\rightarrow}
```

### Set8

```
x^{a} x_{a} x_{b}^{a} {x_{a}}^{b} _{a}^{b}\textrm{C} \frac{a}{b} x\tfrac{a}{b} \frac{\partial }{\partial x} \frac{\partial^2 }{\partial x^2} \frac{\mathrm{d} }{\mathrm{d} x} \int \int_{a}^{b} \oint \oint_{a}^{b} \iint_{a}^{b} \bigcap \bigcap_{a}^{b} \bigcup \bigcup_{a}^{b} \lim_{x \to 0} \sum \sum_{a}^{b} \sqrt{x} \sqrt[n]{x} \prod \prod_{a}^{b} \coprod \coprod_{a}^{b}
```

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




</details>


