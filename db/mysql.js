
var mysql = require('mysql')
var config = require('./mysql_info').local;

module.exports = function () {
    return {
        init: function () {
            return mysql.createConnection({
                host: config.host,
                port: config.port,
                user: config.user,
                password: config.password,
                database: config.database,
            })
        },
        test_open: function (con) {
            con.connect(function (err) {
                if(err) {
                    console.error('error data : '+err);
                }
                else{
                    console.info('mysql connected success!!');
                }
            })
        }
    }
}
// var connection = mysql.createConnection({
//     host: '127.0.0.1',
//     user: 'root',
//     password: '1324',
//     database: 'test',
// })
// connection.connect();

// connection.query("select * from user_info", function (error, res, field) {
//     if(error){
//         // throw error;
//         console.info('err', error);
//     }
//     console.info('result', res)
// });

// connection.end();