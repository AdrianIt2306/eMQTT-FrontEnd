// index.js
var path = require('path');
const express = require('express');
const app = express();
const cors = require('cors');
const logger = require('./lib/logger');
const PORT = process.env.PORT || 3001;

app.use(express.json());
app.use(cors());
// add routes
const router = require('./routes/router');
app.use('/', router);

// Static Middleware
app.use(express.static('/eMQTT/eMQTT-FrontEnd/public'));

// run server
app.listen(PORT, () => logger.info(`Server running on port ${PORT}`));