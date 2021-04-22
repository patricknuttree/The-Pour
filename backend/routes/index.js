const express = require('express');
const router = express.Router();

router.get('/hello/world', function(req, res) {
  res.cookie('XSRF-Token', req.csrfToken());
  res.send('Hello World!')
})

module.exports = router