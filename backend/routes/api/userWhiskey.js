const express = require('express')
const asyncHandler = require('express-async-handler');
const { db } = require('../../config');
const { User, Whiskey } = require('../../db/models');

const router = express.Router();

//Whiskeys
router.get('/whiskeys', asyncHandler(async (req, res, next) => {
  console.log ("USER LOG", User)
  const userId = 1;
  const userWhiskeys = await Whiskey.findAll({
    where: {
      userId 
    },
    include: {
      model: User
    }
  })
  console.log('BACKEND ROUTE', userWhiskeys)
  return res.json(userWhiskeys)
  // console.log('BACKEND USERWHISKEYS',userWhiskeys)
}))

// fetch('/api/profile', {
//   method: 'GET',
// }).then(res => res.json()).then(data => console.log(data));

module.exports = router