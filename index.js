const express = require('express');
const app = express();
const port = 8080;

const route = require('./routes');
app.use('/',route);



app.listen(port,function(error){
   if(error){
    console.log(`Error occured at ${error}`);
   }
   console.log(`Server is up and running at port : ${port}`);
})