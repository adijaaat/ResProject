var express=require('express')
const DAL = require('./Actions/DAL.js')
var mysql = require('mysql');
var bodyParser=require('body-parser')
var app=express()

let _dal=new DAL();

app.use(express.static('views'));
app.use('/views', express.static('views'))
app.use('/css', express.static('css'))
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
console.log("success: "+_success)
    res.send(_success);
})
})

app.post('/searchRestorent',function(req,res) {
let _success=false;
_dal.SearchRestorents(req.body.filter,function(data){
  console.log(data)
  var arrData=[]
  if(data.length > 0)
 data.map(function(item){
   arrData.push(item)
})
    res.send(arrData);
})
})

app.listen(8081,function(){
  console.log('listen')
})
