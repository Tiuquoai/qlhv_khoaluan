const pool = require('../database/client');
const User = require('../models/user');

class AuthService {
    findUser = async (username = '', id = '') => {
        let sql = 'SELECT * FROM users ';

        if (username) {
            sql += 'WHERE tendangnhap = ?';
        } else {
            sql += 'WHERE user_id = ?';
        }

        try {
            const bien = username ? username : id;

            const [rows] = await pool.execute(sql, [bien]);

            if (rows.length > 0) {
                const user = rows[0];
                console.log(user.tendangnhap);
                return new User(
                    user.user_id,
                    user.tendangnhap,
                    user.matkhau,
                    user.vaitro,
                    user.email,
                    user.cccd,
                    user.anh,
                    user.ttguimailtk,
                    user.gioitinh,
                    user.diachi,
                    user.hovaten,
                    user.ngaysinh
                );
            }

            return null;
        } catch (err) {
            console.error(err);
            return null;
        }
    }
}

module.exports = new AuthService();