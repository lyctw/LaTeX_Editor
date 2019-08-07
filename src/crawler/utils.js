const fs = require('fs');
const request = require('request');

const codeCogs = 'https://latex.codecogs.com/svg.latex?';

var download = function(uri, filename, callback){
    request.head(uri, function(err, res, body){
      // console.log('content-type:', res.headers['content-type']);
      // console.log('content-length:', res.headers['content-length']);
  
      request(uri).pipe(fs.createWriteStream(filename)).on('close', callback);
    });
};
  
  
module.exports = (tex, setName) => {
    return new Promise((resolve, reject) => {
        download(`${codeCogs}${tex}`, `./${setName}/${tex.replace("\\", "_")}.svg` , function(){
            resolve(`[DONE] ./${setName}/${tex.replace("\\", "_")}.svg`);
        });
    });
}

