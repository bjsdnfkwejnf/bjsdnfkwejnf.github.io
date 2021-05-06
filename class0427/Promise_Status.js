const promise1 = new Promise(function(resolve,reject){
    setTimeout(()=>{
        resolve('執行成功');
    },3000);
    // resolve('執行成功');
});
console.log(promise1);
promise1
    .then(result=>{
        console.log('成功');
        console.log(result);
    })
    .catch(ex=>{
        console.log('失敗');
        console.log('Error :'+ex);
    })
    .finally(()=>{
        console.log('Promise finally 完成')
    });
    console.log(promise1);