import Enzyme from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

Enzyme.configure({
    adapter: new Adapter()
});


// https://github.com/zenoamaro/react-quill/issues/434
global.MutationObserver = class {
    constructor(callback) {}
    disconnect() {}
    observe(element, initObject) {}
    takeRecords() {return []}
};
global.document.getSelection = function() {}