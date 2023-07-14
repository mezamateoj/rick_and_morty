const { Favorite } = require("../db_connection");

const deleteFav = async (req, res) => {
    const { id } = req.params;

    try {
        const character = await Favorite.findByPk(id)
        if (!character) throw Error("Character doesn't exist")
        await character.destroy()

        const newFav = await Favorite.findAll()

        res.status(201).json(newFav)

    } catch (error) {
        res.status(500).json({ error: error.message })
    }
}

module.exports = deleteFav;