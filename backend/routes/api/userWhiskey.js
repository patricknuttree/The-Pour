const express = require('express')
const asyncHandler = require('express-async-handler');
const { db } = require('../../config');
const { User, Whiskey } = require('../../db/models');

const router = express.Router();

//Whiskey
console.log ("USER LOG", User)
router.get('/profile', asyncHandler(async (req, res, next) => {
  const userId = req.body.id;
  const userWhiskeys = await db.Whiskey.findAll({
    where: {
      userId: {
        [Op.eq] : userId
      }
    },
    include: db.User
  })
  console.log('BACKEND USERWHISKEYS',userWhiskeys)
}))

