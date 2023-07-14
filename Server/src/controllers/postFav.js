const { Favorite } = require("../db_connection");

const postFav = async (req, res) => {
    const { id, name, origin, status, image, species, gender } = req.body;


    try {

        if (!id || !name || !status || !image || !species || !gender) {
            throw Error('Missing or invalid data')
        }

        const favorite = await Favorite.create({
            id, name, status, image, species, gender
        })

        const findAllFav = await Favorite.findAll()
        res.status(201).json(findAllFav)

    } catch (error) {
        if (error.message === 'Missing data') {
            return res.status(400).json({ error: error.message })
        }

        return res.status(500).json({ error: error.message })
    }
}

module.exports = postFav;