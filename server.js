var express=require('express')
const DAL = require('./Actions/DAL.js')
var mysql = require('mysql');
var bodyParser=require('body-parser')
var app=express()

let _dal=new DAL();

app.use(express.static('views'));
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended:false}))

app.get('/',function(req,res) {
    res.sendFile( __dirname + "/views/" + "index.html" );
})

app.post('/saveData',function(req,res) {
  var a=req.body.username;
  var b=req.body.password;
    console.log(req.body)
let _success=false;
_dal.SignInData(a,b,function(data){
  console.log(data)
  if(data.length > 0)
_success=true;
})
console.log("success: "+_success)
    res.send(_success);
})


app.listen(8081,function(){
  console.log('listen')
})
