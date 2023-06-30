const express = require('express')


let myFavorites = []

const postFav = express.Router()

postFav.post('/fav', (req, res) => {
    console.log(req.body)
    if(req.body) {
        myFavorites.push(req.body)
        return res.json(myFavorites)
    }
})

const deleteFav = express.Router()

deleteFav.delete('/fav/:id', (req, res) => {
    const {id} = req.params

    const charIndex = myFavorites.findIndex(char => char.id === parseInt(id))
    if (charIndex > -1) {
        myFavorites.splice(charIndex, 1)
        return res.json(myFavorites)
    }
})

module.exports = {
    postFav,
    deleteFav
}