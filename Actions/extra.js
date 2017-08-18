function abc (input, callback){
  if(input)
     callback(input);
}


this.abc('hi',function(x){
  alert(x);
})
