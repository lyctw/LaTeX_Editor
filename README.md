# Symphony-RichEditor 

Customized Quill React component for [NTU-COOL](https://cool.ntu.edu.tw/) Symphony module. Based on Quill.js and MathQuill.

:cat2: [instructure-ui](https://instructure.design) used.



## Install


```
npm i symphony-richeditor --save
```

or
```
yarn add symphony-richeditor
```

## Usage

Import the component
```js
import RichEditor from 'symphony-richeditor'; // ES6
import * as RichEditor from 'symphony-richeditor'; // Typescript
const RichEditor = require('symphony-richeditor'); // CommonJS
```


Use the component

```js
import React from 'react';
import RichEditor from 'symphony-richeditor';

class App extends React.Component {
  constructor(props) {
      super(props);
  }

  render() {
    return (
      <div>
        <RichEditor 
          placeholder={'Write something'}
          onDocumentChange={(html) => {
            console.log(html)
          }}
        />
      </div>
    );
  }
};

ReactDOM.render(<App />, document.getElementById('app'));
```