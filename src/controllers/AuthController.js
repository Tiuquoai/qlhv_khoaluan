const bcrypt = require('bcrypt');
const saltRounds = 10;
const authService = require('../services/AuthService');
const jwt = require('jsonwebtoken');


class AuthController {
    static login = async (req, res) => {
        const { username , password } = req.body;
        const user = await authService.findUser(username , '');

        if(!user) {
            return res.status(401).json({
                'message' : 'Tên đăng nhập hoặc mật khẩu không đúng thử lại sau !!!',
                'statusCode' : 401
            })
        }

        if(!bcrypt.compareSync(password, user.matkhau)) {
            return res.status(401).json({
                'message' : 'Tên đăng nhập hoặc mật khẩu không đúng thử lại sau !!!',
                'statusCode' : 401
            }) 
        }

        // console.log(user)
        const secretKey = process.env.KEY_JWT;
        const payload = {
            'name' : user.hovaten,
            'role' : user.vaitro,
            'sex' : user.gioitinh,
            'email' : user.email,
            'anh' : user.anh
        }
        const token = jwt.sign(payload, secretKey, { expiresIn: '7h' });
     
        return res.status(200).json({
            message: 'Đăng nhập thành công !!!',
            statusCode: 200,
            token: token
        });
    }
}

module.exports = AuthController