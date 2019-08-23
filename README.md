# Symphony-RichEditor 

Customized Quill React component for Symphony module, using [instructure-ui](https://instructure.design).



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
          placeholder={'1d23'}
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