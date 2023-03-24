'use strict';

const express = require('express');
const app = express();

// define endpoint for exercise 1 here
/*app.get('/math/circle/:r', (req, res) => {
    let r = parseInt(req.params.r);
    let area = Math.PI * Math.pow(r, 2);
    let circumference = Math.PI * 2 * r;
    res.json({ area, circumference });
  });*/
  app.get('/hello', function(req, res){
    res.type('text');
    res.send('Hello World!');
  });
// define endpoint for exercise 2 here


const PORT = process.env.PORT || 8000;
app.listen(PORT);