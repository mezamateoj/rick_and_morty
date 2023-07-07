
let myFavorites = []

const postFav = (req, res) => {
    if (req.body) {
        myFavorites.push(req.body)
        return res.status(200).json(myFavorites)
    }
}

const deleteFav = (req, res) => {
    const {id} = req.params;

    const charIndex = myFavorites.findIndex(char => char.id === parseInt(id))
    if (charIndex > -1) {
        myFavorites.splice(charIndex, 1)
        return res.json(myFavorites)
    }
}

module.exports = {
    postFav,
    deleteFav
}