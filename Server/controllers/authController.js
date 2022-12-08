 const jwt = require('jsonwebtoken')
require('dotenv')

exports.login = (req, res) => {
    const {username , password} = req.body
    if(process.env.PASSWORD_ADMIN === password){
        const token = jwt.sign({username}, process.env.JWT_SECRET,{expiresIn:'1d'})
        return res.json({
            token,
            username
        })
    }else{
        res.status(400).json({err:"username or password is wrong!!"})
    }
}