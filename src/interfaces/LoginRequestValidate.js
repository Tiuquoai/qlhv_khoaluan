const { body, validationResult } = require('express-validator');

const validateLogin = [
    body('username')
        .notEmpty()
        .withMessage('Tên đăng nhập không được để trống'),

    body('password')
        .notEmpty()
        .withMessage('Mật khẩu không được để trống'),

    (req, res, next) => {
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            return res.status(400).json({
                message: 'Dữ liệu không hợp lệ',
                statusCode: 400,
                errors: errors.array()
            });
        }
        next();
    }
];

module.exports = validateLogin;