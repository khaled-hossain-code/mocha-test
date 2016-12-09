const express = require("express");
const app = express();
const http = require("http");

const server = http.createServer(app);

app.get('/', (req, res, next)=>{
    res.send('Hello');
});


server.listen(port=3000, ()=>{
    console.log(`Server is running on port ${port}`);
});