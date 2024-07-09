const fs = require('fs');
const axios = require('axios');
const request = require('request');


// fs.readFile('./data.txt', 'utf-8', (err, data)=>{
//     if(err) throw err;
//     fs.writeFile('./newData.txt', `Data is modified ${data}`, err2=>{
//         if(err2) throw err2;
//         console.log(`Data has been saved into a new file: ${data}`);
//         request('https://jsonplaceholder.typicode.com/posts', (error, response, body)=>{
//             if(error) throw error;
//             const posts = JSON.parse(body);
//             console.log(posts);
//         })
//     })
// })

// PROMISE

const getSinglePost = async (postId)=>{
   try {
   const data = await axios.get(`https://jsonplaceholder.typicode.com/posts`);
   const posts = data.data
   console.log(posts[10].id);
    // return data.data

   } catch (error) {
    console.log(error);
   }
};

// console.log(getSinglePost(1))
getSinglePost()

// axios.get('https://jsonplaceholder.typicode.com/posts/1')
// .then(res=>{
//     console.log(res.data.title);
// })