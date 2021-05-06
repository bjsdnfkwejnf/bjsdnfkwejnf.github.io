// let friends = ['David', 'Mary', 'John'];
// friends=[]; //重新指派⼀個空陣列
// friends.length=0; //將length設為0
// friends.splice(0, friends.length); //移除N個陣列元素

// let fruits =['apple','banana','cherry'];
// let p="";
// fruits.forEach((i) => {
//     p+=i;
// });
// console.log(p);

// let friends=[];
// friends.push("emily","DD","TT");
// console.log(friends);
// friends.pop();
// console.log(friends);

// var array1 = ['a', 'b', 'c'];
// var array2 = ['d', 'e', 'f'];
// var array3 = array1.concat(array2);
// console.log(array3);

// let Cars = ['BMW', 'Benz', 'Audi', 'Lexus'];
// // title('sort()升冪排序');
// console.log(Cars.sort());
// console.log(Cars.reverse());
// // title('sort().reverse()降冪排序');
// console.log(Cars.sort().reverse()); 

// let car = Cars.find((c) => c=='BMW');
// console.log(car);
// let car1 = Cars.indexOf((c) => c=='Benz');
// console.log(car1);
// let car2 = Cars.findIndex((c) => c=='Audi');
// console.log(car2);
// let Prices = [280, 320, 250, 210]; 
// console.log(Prices.findIndex((p) => p>300));

let Cars = ['BMW', 'Benz', 'Audi', 'Lexus'];
let Prices = [280, 320, 250, 210]; 
Prices.filter(function(item, index){
    if(item > 250){
    console.log(Cars[index] + "'s price is " + item + ", it'slarger 250." )
    }
}); 
   