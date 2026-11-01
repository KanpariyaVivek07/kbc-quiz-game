var http = require('node:http');
var fs=require("fs");
var path=require("path");
const { url } = require('node:inspector');
server = http.createServer((req, res) => {
    res.writeHead(200, { 'Content-Type': 'text/html' })
    if (req.url == '/') {
        res.end('Enter in url /page1 to / page10');
    }
    else if (req.url == '/page1') {
       const url1 = path.join(__dirname, "quiz.html");
       fs.readFile(url1,(err,data)=>
    {
        // if (err) {
        //     res.end(err);
        // }
        res.end(data.toString());
        // console.log(data);
        
    })
       
    // }
    // else if (req.url == '/page2') {
    //      const url1 = path.join(__dirname, "page2.html");
    //    fs.readFile(url1,(err,data)=>
    // {
    //     // if (err) {
    //     //     res.end(err);
    //     // }
    //     res.end(data.toString());
    //     // console.log(data);
        
    // })
    // }
    // else if (req.url == '/page3') {
    //      const url1 = path.join(__dirname, "page3.html");
    //    fs.readFile(url1,(err,data)=>
    // {
    //     // if (err) {
    //     //     res.end(err);
    //     // }
    //     res.end(data.toString());
    //     // console.log(data);
        
    // })
    // }
    // else if (req.url == '/page4') {
    //      const url1 = path.join(__dirname, "page4.html");
    //    fs.readFile(url1,(err,data)=>
    // {
    //     // if (err) {
    //     //     res.end(err);
    //     // }
    //     res.end(data.toString());
    //     // console.log(data);
        
    // })
    // }
    // else if (req.url == '/page5') {
    //      const url1 = path.join(__dirname, "page5.html");
    //    fs.readFile(url1,(err,data)=>
    // {
    //     // if (err) {
    //     //     res.end(err);
    //     // }
    //     res.end(data.toString());
    //     // console.log(data);
        
    // })
    // }
    // else if (req.url == '/page6') {
    //      const url1 = path.join(__dirname, "page6.html");
    //    fs.readFile(url1,(err,data)=>
    // {
    //     // if (err) {
    //     //     res.end(err);
    //     // }
    //     res.end(data.toString());
    //     // console.log(data);
        
    // })
    // }
    // else if (req.url == '/page7') {
    //      const url1 = path.join(__dirname, "page7.html");
    //    fs.readFile(url1,(err,data)=>
    // {
    //     // if (err) {
    //     //     res.end(err);
    //     // }
    //     res.end(data.toString());
    //     // console.log(data);
        
    // })
    // }
    // else if (req.url == '/page8') {
    //      const url1 = path.join(__dirname, "page8.html");
    //    fs.readFile(url1,(err,data)=>
    // {
    //     // if (err) {
    //     //     res.end(err);
    //     // }
    //     res.end(data.toString());
    //     // console.log(data);
        
    // })
    // }
    // else if (req.url == '/page9') {
    //     const url1 = path.join(__dirname, "page9.html");
    //    fs.readFile(url1,(err,data)=>
    // {
    //     // if (err) {
    //     //     res.end(err);
    //     // }
    //     res.end(data.toString());
    //     // console.log(data);
        
    // })
    // }
    // else if (req.url == '/page10') {
    //      const url1 = path.join(__dirname, "page10.html");
    //    fs.readFile(url1,(err,data)=>
    // {
    //     // if (err) {
    //     //     res.end(err);
    //     // }
    //     res.end(data.toString());
    //     // console.log(data);
        
    // })
    }
    else {
        res.end("error 404 Not Found")
    }
});
server.listen(7000, () => {
    console.log('Server running at http:localhost:7000')
});   