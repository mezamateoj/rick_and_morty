const express = require('express')
const info = require('../utils/users')
const loginInfo = express.Router()

loginInfo.get('/login', (req, res) => {
    const {email, password} = req.query

    const userInfo = info.find(u => u.email === email && u.password === password)

    if (userInfo) {
        return res.status(200).json({access:true})
    }
    return res.status(200).json({access:false})
})

module.exports = loginInfo;
