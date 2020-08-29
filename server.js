//@ Importing Packages
require('dotenv').config()
const mongoose = require('mongoose');
const express = require('express');
const app = express();
const hbs = require('express-handlebars').create({
   defaultLayout : null,
   extname : ".hbs"
})
app.set('view enigine',"hbs");
app.engine('hbs',hbs.engine)

//@ Routes



//@ Database Connection
mongoose.connect(process.env.MONGO_URI,{ useNewUrlParser :true, useUnifiedTopology:true},()=>{
   console.log("Database Connection Successful")
})

//@ Listening Port
app.listen(process.env.PORT,()=>{
   console.log(`Server running on http://localhost:${process.env.PORT}`);
})