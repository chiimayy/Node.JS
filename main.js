const f1 = require('fs');
var MyText='hello this is python file containing python related text';
f1.writeFile('python.txt', MyText, (err)=>{
if (err) throw err
console.log('file successful');
});