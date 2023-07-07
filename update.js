const fs = require('fs');

fs.readFile('python.txt', (err, data) => {
    console.log('file has been read successfully!!');
    var oldString = String(data) ;
    var newString='this is the updated text'
    fs.writeFile('python.txt', newString, (err)=>{
        console.log('successfully updated!!');
    });
});