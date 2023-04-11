// import http from "http";
// // import gfName from "./feature.js"
// // import { gfName2 } from "./feature.js";
// // import * as myObj from "./feature.js";
// import {generateRandomNumber}  from "./feature.js";
// import fs from "fs";

// console.log(generateRandomNumber());

// const home = fs.readFileSync("./index.html");

// const server = http.createServer((req,res)=> {
//     if(req.url == "/about"){
//         res.end(`<h1> Love is ${generateRandomNumber()} <h1>`)
//     }
//     else if(req.url == "/"){
//         res.end(`${home}`)
//     }
//     else if (req.url == "/contact"){
//         res.end("<h1> Contract page <h1>")
//     }
//     else{
//         res.end("<h1> Page not found <h1>")
//     }
// })


// server.listen(5000,()=>{
//     console.log("Server is working")
// })