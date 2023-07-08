const express = require('express');
const app = express();

const cookieParser = require('cookie-parser');
const port = 8080;

const db = require('./config/mongoose');

const expressLayout = require('express-ejs-layouts');

app.use(expressLayout);

app.use(cookieParser());

app.use(express.urlencoded({extended:false}));

app.use(express.static('./assets'));

app.set('layout extractStyles',true);

app.set('layout extractScripts',true);


const route = require('./routes');
app.use('/',route);

app.set('view engine', 'ejs');
app.set('views', './views');




app.listen(port,function(error){
   if(error){
    console.log(`Error occured at ${error}`);
   }
   console.log(`Server is up and running at port : ${port}`);
})


// const express = require('express');
// const { query, matchedData, validationResult } = require('express-validator');
// const app = express();

// app.use(express.json());
// app.get('/hello', query('person').notEmpty().escape(), (req, res) => {
//   const result = validationResult(req);
//   if (result.isEmpty()) {
//     const data = matchedData(req);
//     return res.send(`Hello, ${data.person}!`);
//   }

//   res.send({ errors: result.array() });
// });

// app.listen(3000);