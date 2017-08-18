'use strict';
var mysql = require('mysql');

 var con = mysql.createConnection({
   host: "localhost",
   user: "root",
   password: "adichhotu",
   database : 'resproject'
 });

class DAL {
  constructor(){
  }
SignUpData(a,b){
    let sq="insert into Users(UserId,UPassword) values('"+a+"','"+b+"')";
    console.log(sq);
    con.query(sq, function (err1, result) {
    if (err1) console.log(err1);
    console.log("1 record inserted");
  });
}
SignInData(a,b,callback){
    let sq="select * from Users where UserId='"+a+"' and UPassword='"+b+"'";
    console.log(sq);
    let data;
    con.query(sq, function (err1, result) {
    if (err1) console.log(err1);
    callback(result)
  });
}
}

module.exports= DAL;
