const express = require('express');
const bodyParser = require('body-parser');
const errorhandler = require('errorhandler');
const morgan = require('morgan');
const N = require('./nuve');
const fs = require('fs');
const https = require('https');
const port =process.env.PORT || 3000;
let app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
   extended:true
}));

app.listen(port,()=> console.log('Running on port: '+port));