const fs = require('fs');
const axios = require('axios');
const request = require('request');


fs.readFile('./data.txt', 'utf-8', (err, data)=>{
    if(err) throw err;
    fs.writeFile('./newData.txt', `Data is modified ${data}`, err2=>{
        if(err2) throw err2;
        console.log(`Data has been saved into a new file: ${data}`);
    })
})