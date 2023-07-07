const fs = require('fs');
fs.unlink('python.txt', (err) => {
    console.log('deleted successfully');
});