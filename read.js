const fs = require('fs');
var info = 'python.txt';
fs.readFile(info, (err, data) =>{
    if (err) throw err
    console.log('message read');
});