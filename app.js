const path = require('path');
const express= require('express');
const app= express();


app.use(express.static(path.join(__dirname, 'public')));
// use express router
app.use('/', require('./routes/app.js'));

// setup view engine--ejs
app.set('view engine', 'ejs');
app.set('views', './views');

app.listen('3000',function(){
  console.log("Server started at port 3000!");
});