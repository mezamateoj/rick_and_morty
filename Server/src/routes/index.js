const getCharById = require('../controllers/getCharById');
const postFav = require('../controllers/postFav')
// const loginInfo = require('../controllers/login')
// const createAI = require('../controllers/createAI')
const postUser = require('../controllers/postUSers')
const login = require('../controllers/login')
const deleteFav = require('../controllers/deleteFav')

const router = require('express').Router();

// can also do this 
router.get('/login', login)

router.post('/login', postUser)

router.get('/character/:id', (req, res) => {
    getCharById(req, res)

})

router.post('/fav', postFav)

router.delete('/fav/:id', (req, res) => {
    deleteFav(req, res)
})

// router.post('/create', (req, res) => {
//     createAI(req, res)
// })

module.exports = router;