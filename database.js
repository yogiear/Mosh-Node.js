var mysql = require('mysql');

var con = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "123456",
    database: "nodedb"
});

con.connect(function(err) {
    if (err) throw err;
    console.log("Connected!");
    var sql = "INSERT INTO customers (name, address) VALUES ?";
    var values = [
    ['Wall-E', 'Collonel 71'],
    ];
    con.query(sql, [values], function(err, result) {
        if (err) throw err;
        console.log(result);
    });
});