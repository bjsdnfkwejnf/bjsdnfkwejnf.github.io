const promise1 = new Promise(function(resolve,reject){
    setTimeout(()=>{
        resolve('執行成功');
    },3000);
});

promise1
    .then(result=>{
        console.log(result);
    })
    .catch(ex=>{
        console.log('Error :'+ex);
    })
    .finally(()=>{
        console.log('Promise finally 完成')
    });



        
        

        