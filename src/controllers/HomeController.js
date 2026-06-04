const bcrypt = require('bcrypt');
const saltRounds = 10;

class HomeController {
    static index  = (req, res) => {
        // const salt = bcrypt.genSaltSync(saltRounds);
        // const hash = bcrypt.hashSync('123', salt);
        // data.password = hash;
        return res.json({ 'message' : 'hehehehehhehehehehheheheheheheee' })
    }
}

module.exports = HomeController