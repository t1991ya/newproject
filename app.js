var express = require('express');
var app = express();
var router = require('./routes/index.js');
var hbs = require('hbs');



hbs.registerPartials(__dirname+'/views/partials')
app.use(express.static('public'));

app.set('view engine', 'hbs');

app.use(router)

app.listen('3000', () => {
    console.log('app started on port 3000')
})
