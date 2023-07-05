const getCharById = require('../controllers/getCharById');
const { postFav, deleteFav } = require('../controllers/handleFavorites')
const loginInfo = require('../controllers/login')
// const createImg = require('./controllers/createAI')

const router = require('express').Router();


router.get('/character/:id', (req, res) => {
    getCharById(req, res)

})

// can also do this 
router.get('/login', loginInfo)


router.post('/fav', (req, res) => {
    postFav(req, res)

})

router.delete('/fav/:id', (req, res) => {
    deleteFav(req, res)

})


module.exports = router;