var connection = require('../db/db')

module.exports.employeeAdd = function (req, res) {
    var users = {
        "fname": req.body.fname,
        "lname": req.body.lname,
        "addr": req.body.addr
    };
    connection.query('INSERT INTO employee SET ?', users, function (error, results, fields) {
        if (error) {
            res.json({
                message: 'There are some error with query'
            })
        } else {
            res.json({
                message: 'Employee Registered Sucessfully',
                data: results
            })
        }
    });
};

module.exports.getAllEmployee = function (req, res) {
    connection.query('SELECT * FROM employee ', function (error, results, fields) {
        if (error) {
            res.json({
                message: 'There are some error with query'
            })
        } else {
            if (results.length > 0) {
                    res.json({
                        status: true,
                        data: results,
                        message: 'Successfully Authenticated'
                    })
            }
            else {
                res.json({
                    status: false,
                    message: "Empty dB"
                });
            }
        }
    });
};
