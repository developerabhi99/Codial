const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost:27017/MajorProject');

const db=mongoose.connection;

db.on('error',console.error.bind(console,"error occured"));

db.once('open',function(){
 console.log("Mongo DB connected succefully");
});

module.exports=db;