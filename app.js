var express = require("express");
var bodyParser = require('body-parser');

const httpStatus = require('http-status-codes');

var app = express();

const employeeRouter = require('./routes/employeeRoutes');

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// Enable Cross Origin Resource Sharing
app.all('/*', function (req, res, next) {
    // CORS headers
    if (req.method === 'OPTIONS') {
        res.header('Access-Control-Allow-Origin', req.headers.origin);
        res.header('Access-Control-Allow-Headers', 'Content-Type,X-Access-Token');
        return res.sendStatus(httpStatus.OK).end();
    } else {
        res.header('Access-Control-Allow-Origin', req.headers.origin);
        next();
    }
});

//Api Path
const API = '/api/v1/';
app.use(API + 'employee', employeeRouter);

app.use(function (req, res, next) {
    // catch 404 and forward to error handler
    return res.status(httpStatus.NOT_FOUND).send({ err: 'Not found' });
});

app.listen(3500);
console.log('[Server] Start at Port Number 3500');

