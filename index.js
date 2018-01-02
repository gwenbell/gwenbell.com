var express = require('express');

var app = express();

app.use(express.static('build/'))
app.use(express.static('./../books/build'))
app.use(express.static('/static/reserva'))

app.listen(2525);
console.log('listening at http://localhost:2525/');
