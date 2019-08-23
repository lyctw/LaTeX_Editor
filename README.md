# Symphony-RichEditor 

Customized Quill React component for Symphony module, using [instructure-ui](https://instructure.design).



## Install

npm
```
npm i symphony-richeditor --save
```

yarn 
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
return (
      <div>
      
        <RichEditor 
          // bounds={this.props.bounds}
          // editorRef={this.props.editorRef}
          placeholder={'請在此輸入您的回覆'}
          // value={}
          // onChange={(val) => {setContent(val)}}
          onDocumentChange={(html) => {
            console.log('doc:' + html)
          }}
        />

      </div>
  )
```