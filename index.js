const express = require('express');
const app = express();

//we need to put in a get request here
app.get('/', (req, res) => {
    //this bit sends index.html to whoever connects to the server, I think
    //it only sends one file so I have combined html, css and js in a terrible index.html mess
    res.sendFile(__dirname + '/index.html')
})

app.listen(3000, () => {
    console.log('Hi everyone, it is me, Server')
})