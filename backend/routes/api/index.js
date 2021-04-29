const router = require('express').Router();
const sessionRouter = require('./session.js');
const usersRouter = require('./users');
const userWhiskey = require('./userWhiskey')

const asyncHandler = require('express-async-handler');
const { setTokenCookie } = require('../../utils/auth.js');
const { User } = require('../../db/models');


router.get('/set-token-cookie', asyncHandler(async (req, res) => {
    const user = await User.findOne({
        where: {
            username: 'Demo-lition'
        },
    })
    setTokenCookie(res, user);
    return res.json({ user });
}));

const { restoreUser } = require('../../utils/auth.js');
router.get(
    '/restore-user',
    restoreUser,
    (req, res) => {
        return res.json(req.user);
    }
);

const { requireAuth } = require('../../utils/auth.js');
router.get(
    '/require-auth',
    requireAuth,
    (req, res) => {
        return res.json(req.user);
    }
);

// router.get('/whiskeys', asyncHandler(async (req, res, next) => {
//     console.log ("USER LOG", User)
//     const userId = 1;
//     const userWhiskeys = await Whiskey.findAll({
//       where: {
//         userId 
//       },
//       include: User
//     })
//     return res.json(userWhiskeys)
//     // console.log('BACKEND USERWHISKEYS',userWhiskeys)
//   }))

router.use('/session', sessionRouter);
router.use('/users', usersRouter)
router.use('/profile', userWhiskey)

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