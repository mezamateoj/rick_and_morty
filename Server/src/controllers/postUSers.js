const { User } = require("../db_connection");

const postUser = async (req, res) => {
    const { email, password } = req.body;

    try {

        if (!email || !password) {
            throw Error('Missing Data')
        }

        const user = await User.create({
            email, password
        })

        res.status(201).json(user)

    } catch (error) {
        if (error.message === 'Missing data') {
            res.status(400).json({ error: error.message })
        }

        res.status(500).json({ error: error.message })
    }
}

module.exports = postUser;