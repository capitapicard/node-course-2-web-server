'use strict'

const express = require('express');

//const hbs = require('hbs');

var app = express();

//app.set('view engine', 'hbs');

app.get('/', (req,res) => {
  res.send('Hello World');
});

app.get('/about', (req,res) => {
//  res.render('about.hbs');
});

app.listen(3000);
