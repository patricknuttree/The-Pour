express = require('express');
router = express.Router();
const asyncHandler = require('express-async-handler');

const db = require('../db/models');
const { User, Whiskey} = db;

router.get('/'), asyncHandler( async(req, res, next) => {
  const userWhiskey = Whiskey.findAll();
  return res.json(userWhiskey);
})

