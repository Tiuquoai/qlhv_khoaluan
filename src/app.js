// framework express
const express = require('express');
// bodyparser để lấy dữ liệu từ form
const bodyParser = require('body-parser');
// session
const session = require('express-session');
const morgan = require('morgan');
// nơi lưu trữ session
// const FileStore = require('session-file-store')(session);
// nơi điều hành chính
const app = express();
// .env
require('dotenv').config();

// cookie
const cookieParser = require('cookie-parser');

app.use(cookieParser());

const port = process.env.PORT || 6969;

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded());

// parse application/json
app.use(bodyParser.json());

// các file tỉnh cố định
app.use(express.static('public'));

app.use(morgan('dev'));

// require router admin 
// const adminRouters = require('./routers/adminRouters');
// app.use('/admin', adminRouters);


const clientRouters = require('./routers/clientRouters');
app.use('/' , clientRouters );


app.listen(port, () => {
    console.log(`Example app listening on port http://127.0.0.1:${port}`)
});