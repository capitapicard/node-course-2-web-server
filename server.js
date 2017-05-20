'use strict'

const express = require('express');

//const hbs = require('hbs');
const port = process.env.PORT || 3000;

var app = express();

//app.set('view engine', 'hbs');

app.get('/', (req,res) => {
  res.send('Hello World');
});

app.get('/about', (req,res) => {
//  res.render('about.hbs');
});

app.listen(port, () => {
  console.log('Listening to port:', port);
});
