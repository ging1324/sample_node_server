var mysql_db = require('../db/mysql')();
var connection = mysql_db.init();
mysql_db.test_open(connection);

function basicAPI (req, res) {
    res.status(200).json(
        {
            "success": true
        }
    )
}

function testAPI (req, res) {
    var qry = 'select user_name from user_info'
    connection.query(qry, function (err, result) {
        console.info('err', err);
        console.info('result', result[0].user_name);
        res.status(200).json({
            "result": result[0]
        })
    }) 
}

function postTestAPI (req, res) {
    const user_message = req.body.message;
    console.info("post req", req.body)
    res.status(200).json({
        "message": user_message
    })
}

function addUser (req, res) {
    const user_info = req.body;
    let qry = 'insert into user_info(user_id, user_passwd, user_name, user_address, user_birthday, user_sex) values(?,?,?,?,?,?)'
    let param = [user_info.user_id, user_info.user_passwd, user_info.user_name, user_info.user_address, user_info.user_birthday, user_info.user_sex ]
    connection.query(qry, param, function (err, result) {
        console.info('err', err);
        console.info('result', result);
        res.status(200).json({
            "result": result
        })
    }) 
}

function login (req, res) {
    let qry = 'select count(*) as cnt, user_name, user_id, uid from user_info where user_id = ? and user_passwd = ?';
    let param = [req.query.user_id, req.query.user_passwd];
    connection.query(qry, param, function (err, result){
        if(err)
        console.error(err)

        if(result[0].cnt !== 1){
            res.status(200).json({
                "result": {
                    "status": "fail"
                }
            })
        }else{
            res.status(200).json({
                "result": {
                    "status": "success",
                    "user_name": result[0].user_name,
                    "user_id": result[0].user_id,
                    "uid" : result[0].uid
                }
            })
        }
    })
}

function getUserInfo (req, res) {
    let qry = 'select user_id, user_name, user_address, user_birthday, user_sex, user_created from user_info where user_id = "'+req.query.user_id+'"';
    connection.query(qry, function (err, result) {
        if(err)
        console.error('err : ', error)

        res.status(200).json({
            "result": result[0]
        })
    })
}

module.exports = {
    basicAPI: basicAPI,
    testAPI: testAPI,
    postTestAPI: postTestAPI,
    addUser: addUser,
    login: login,
    getUserInfo: getUserInfo
}