const router = require('express').Router();
const sessionRouter = require('./session.js');
const usersRouter = require('./users');

router.use('/session', sessionRouter);
router.use('/users', usersRouter)

module.exports = router;



























//STUFF FOR TESTING DURING INITIAL SET UP. 
// const asyncHandler = require('express-async-handler');
// const { setTokenCookie, requireAuth } = require('../../utils/auth.js');
// const { User } = require('../../db/models');

// router.get('/set-token-cookie', asyncHandler(async (rea, res) => {
//   const user = await User.findOne({
//     where:{
//       username: 'Demo-lition'
//     },
//   })
//   setTokenCookie(res, user);
//   return res.json({ user })
// }))

// router.get(
//   '/require-auth',
//   requireAuth,
//   (req, res) => {
//     return res.json(req.user);
//   }
// );


// router.post('/test', function(req, res) {
//   res.json({ requestBody: req.body });
// });








module.exports = router;