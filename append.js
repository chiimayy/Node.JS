const fs = require('fs');
fs.appendFile('python.txt','appended text', (err)=>{
    console.log('text appended');
});