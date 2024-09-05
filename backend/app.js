const express = require('express');
const app = express();
app.get("/",(req,res)=>{
    res.send(" hello my name is piyush!");
})

app.listen(3000,()=>{
    console.log("app is running at port 3000")
})