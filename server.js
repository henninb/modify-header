const express = require('express');
const path = require('path');
const morgan = require('morgan');
const bodyParser = require('body-parser');
const fs = require('fs');
//const { createProxyMiddleware } = require('http-proxy-middleware');
//const http2 = require('http2'); //for http/2
const http2 = require('http2'); //for http/2
const https = require('https'); // for http/1

// const cors = require('cors');
const jwt = require('jsonwebtoken');
const secretKey = 'your-secret-key'; // Replace with your actual secret key

const port = 8080;
const app = express();

const options = {
  key: fs.readFileSync('ssl/key.pem'),
  cert: fs.readFileSync('ssl/cert.pem'),
  // allowHTTP1: true
};

const server = https.createServer(options, app);
//const server = http2.createServer(options, app);

// app.use(favicon(__dirname + '/public/favicon.ico'));

app.use(morgan('combined'));
// app.use(cors());

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());


// website that will be allowed to connect
// app.use(cors({origin: 'http://localhost:3000'}));
//app.use('/', express.static(path.join(__dirname, './build')));
app.use(function (_request, response, next) {
  // express.static(path.join(__dirname, 'public'));
  // bodyParser.urlencoded({limit: '5000mb', extended: true, parameterLimit: 100000000000})
  // express.json();
  // console.log('set content security policy header');
  //response.setHeader('Content-Security-Policy', updatedCSP);
  response.setHeader('Content-Security-Policy', "default-src 'self' http: https:;");
  next();
});

app.use(express.static(path.join(__dirname, 'public'), {
}));

server.listen(port, () => {
  console.log(`app is listening to port ${port} with https`);
});

