const express = require('express')
const asyncHandler = require('express-async-handler');
const { db } = require('../../config');
const { User, Whiskey } = require('../../db/models');

const router = express.Router();

//Whiskeys
router.get('/:id/whiskeys', asyncHandler(async (req, res, next) => {
  console.log ("USER LOG", User)
  const userId = req.params.id;
  const userWhiskeys = await Whiskey.findAll({
    where: {
      userId 
    },
    include: {
      model: User
    }
  })
  // console.log('BACKEND ROUTE', userWhiskeys)
  return res.json(userWhiskeys)
  // console.log('BACKEND USERWHISKEYS',userWhiskeys)
}))

router.post(
  '/create/whiskey', asyncHandler( async(req, res) =>{
    const { userId, name, distiller, drinkPhoto, rating, review } = req.body

    const whiskey = await Whiskey.build({
      userId,
      name,
      distiller,
      drinkPhoto,
      rating,
      review
    })
    await whiskey.save()
  })
)

// fetch('/api/profile', {
//   method: 'GET',
// }).then(res => res.json()).then(data => console.log(data));

module.exports = router