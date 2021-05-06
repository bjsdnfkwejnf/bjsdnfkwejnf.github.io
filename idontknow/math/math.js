//Ex1 - max() & min()最⼤最⼩值
console.log(Math.max(1, 3, 5, 7, 9));
console.log(Math.min(-1, -3, -5, -7, 9));
//Ex2 - round()
console.log(Math.round(3.1415962, 4));
//Ex3 - abs()
console.log(Math.abs(-3.1415962));
//Ex4 - 陣列計算要⽤Rest Paramerter
var array1 = [1, 3, 5, 7, 9];
console.log(Math.max(...array1)); 

//Ex1 - random()產⽣0-1之⼩數點亂數
console.log(Math.random());
//Ex2 - floor()無條件捨去⼩數位
console.log(Math.floor(3.1415962));
console.log(Math.floor(-3.1415962));
//Ex3 - 撰寫取得⼀個Range範圍內的整數亂數
function getRandom(min, max) {
 return Math.floor(Math.random() * max + min);
}
console.log(getRandom(1, 100)); 


