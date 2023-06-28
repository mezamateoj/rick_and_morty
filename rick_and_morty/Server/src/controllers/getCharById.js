const axios = require('axios');

function getCharById(res, id) {
    axios.get(`https://rickandmortyapi.com/api/character/${id}`)
    // first promise for the axios request
    .then((res) => {
        // console.log(res.data)
        // console.log(res.data.results)
        return res.data;
    })
    // second promise to extract the data we want
    .then((data) => {
        const saveChar = {
            id: data.id,
            name: data.name,
            gender: data.gender,
            species: data.species,
            origin: data.origin.name,
            image: data.image,
            status: data.status
        }
        return saveChar;
    })
    .then((saveChar) => {
        console.log(saveChar)
        res.writeHead(200, { 'Content-Type': 'application/json' })
        res.end(JSON.stringify(saveChar));
    })
    .catch((err) => {
        res.write(500, { 'Content-Type': 'text/plain' });
        res.end(err);
    })
}

module.exports = getCharById;