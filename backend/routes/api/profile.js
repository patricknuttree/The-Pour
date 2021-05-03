express = require('express');
router = express.Router();


const asyncHandler = require('express-async-handler');

const db = require('../db/models');
const { User, Whiskey} = db;

router.get('/:id'), asyncHandler( async(req, res, next) => {
  const whUserId = parseInt(req.params.id, 10);
  const userWhiskey = Whiskey.findAll({
    where: {
      userId: {
        whUserId
      }
    },
    include: [name, drinkPhoto, rating ]
  });
  
  return res.json(userWhiskey);
})

