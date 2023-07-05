const info = require('../utils/users')


const loginInfo = (req, res) => {
    const { email, password } = req.query;

    const userInfo = info.find((user) => user.email === email && user.password === password)

    userInfo
    ? res.status(200).json({access: true})
    : res.status(200).json({access: false})

//  same as above
//  if (userInfo) {
//         return res.status(200).json({access:true})
//   }
//   return res.status(200).json({access:false})
}

module.exports = loginInfo;
