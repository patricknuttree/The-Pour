const express = require('express');
const router = express.Router();
const apiRouter = require('./api');

router.use('/api', apiRouter);

if(process.env.NODE_ENV === 'production'){
  const path = require('path');
  router.get('/', (req, res) => {
    res.cookie('XSRF-TOKEN', req.csrfToken());
    return res.sendFile(
      path.resolve(__dirname, '../../frontend', 'build', 'index.html')
    );
  });

  router.use(express.static(path.resolve("../frontend/build")));

  router.get(/^(?!\/?api).*/, (req, res) => {
    res.cookie('XSRF-TOKEN', req.csrfToken());
    res.sendFile(
      path.resolve(__dirname, '../../frontend', 'build', 'index.html')
    );
  });
}

if(process.env.NODE_ENV !== 'production'){
  router.get('/api/csrf/restore', (req, res) => {
    res.cookie('XSRF-TOKEN', req.csrfToken());
    return res.status(201).json({});
  });
}

//TEST ROUTE FOR SETTING UP BACKEND. 
// router.get('/hello/world', function(req, res) {
//   res.cookie('XSRF-Token', req.csrfToken());
//   res.send('Hello World!')
// })

module.exports = router