const axios = require('axios');
const url = ('https://rickandmortyapi.com/api/character')


// const getCharById = (req, res) => {
//     const {id} = req.params;
//     console.log(`${url}/${id}`)
//     axios.get(`${url}/${id}`)
//     .then(response => response.data)
//     .then((data) => {

//         if(data.name) {
//             const saveChar = {
//                 id: data.id,
//                 name: data.name,
//                 gender: data.gender,
//                 species: data.species,
//                 origin: data.origin.name,
//                 image: data.image,
//                 status: data.status
//             }
//             return res.status(200).json(saveChar);
//         }
//         return res.status(404).send('Not Found');

//     })
//     .catch((err) => {
//         return res.status(500).send(err.message)
//     })
// }

const getCharById = async (req, res) => {
    try {
        const {id} = req.params;
        const response = await axios.get(`${url}/${id}`)
        const { data } = await response
        // console.log(data)
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
        console.log(error.message)
        return res.status(500).send(error)
    }

}

module.exports = getCharById;