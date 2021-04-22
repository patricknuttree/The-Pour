const express = require('express');
const router = express.Router();
const apiRouter = require('./api');

router.use('/api', apiRouter);


//TEST ROUTE FOR SETTING UP BACKEND. 
// router.get('/hello/world', function(req, res) {
//   res.cookie('XSRF-Token', req.csrfToken());
//   res.send('Hello World!')
// })

module.exports = router