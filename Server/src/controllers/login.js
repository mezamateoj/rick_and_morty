const { User } = require("../db_connection");


const login = async (req, res) => {
    const { email, password } = req.query;
    try {

        if (!email || !password) {
            throw Error('Missing Data')
        }

        const user = await User.findOne({
            where: {
                email: email,
                password: password
            }
        })

        if (!user) {
            throw Error('User not valid')
        }

        res.status(200).json({ access: true })

    } catch (error) {
        res.status(500).json({ error: error.message })

    }
}

module.exports = login;