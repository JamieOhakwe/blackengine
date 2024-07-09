// Query a file

const fs = require('fs');

// const data = fs.readFileSync('./data.txt', 'utf-8');
// console.log(`Data one: ${data}`);

// const update = `Adding this new content in a new file. ${data}\n Data was created on ${new Date()}`
// fs.writeFileSync('./newFile.txt', update, 'utf-8');

// const data2 = fs.readFileSync('./newFile.txt', 'utf-8')
// console.log(`Data two: ${data2}`);

fs.readFile('./newFile.txt', 'utf-8', function(err, data){
    if(err) throw err;
    console.log(`Data two: ${data}`);
})

