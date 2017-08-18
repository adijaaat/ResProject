import $ from 'jquery';

let CreatePromise=function(url,method,inputParams){
  return new Promise(function(resolve,reject){
    $.ajax({
      url:url,
      type:method,
      data:JSON.stringify(inputParams),
      contentType:'application/json',
      success:function(data){
        resolve(data);
      },
      error:function(ex,status){
        reject(ex)
      }
    });
  })
}

export default CreatePromise;
