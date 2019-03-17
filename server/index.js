// Express here
const express = require('express');
const bodyparser = require ('body-parser');
const morgan = require('morgan');
const path = require('path');
const router = require('./router');


const server = express();
const port = 3000;

server.use(morgan('dev'));
server.use(bodyparser.json());

server.use('/', express.static(path.join(__dirname, '/../client/dist/')));

server.use('/api', router);

// server.get('/name', (req, res) => {
//     res.send('Charlie');
// })

server.listen(port, () => console.log(`Connected to port ${port}`));