const axios = require('axios');
const url = ('https://rickandmortyapi.com/api/character')

const getCharById = async (req, res) => {
    try {
        const {id} = req.params;
        const response = await axios.get(`${url}/${id}`)
        const { data } = await response

        const saveChar = {
            id: data.id,
            name: data.name,
            gender: data.gender,
            species: data.species,
            origin: data.origin.name,
            image: data.image,
            status: data.status
        }
        return res.status(200).json(saveChar)
        
    } catch (error) {
        return res.status(500).json({error: error.message})
    }

}

module.exports = getCharById;