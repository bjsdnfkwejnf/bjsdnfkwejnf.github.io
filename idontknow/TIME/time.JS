// function displayTime(){ 
//     let date = new Date(); 
//     let h = date.getHours(); 
//     let m = date.getMinutes(); 
//     let s = date.getSeconds(); 
//     document.write(`${h}:${m}:${s}<br/>`); 
   
// }


// const print = function(... Args){ 
//     console.log(typeof Args); 
//     console.log(Args instanceof Array); 
//     console.log(Args[0]); 
//     console.log(Args[1]); 
//     console.log(Args[2]); 
//     console.log(Args.join()); 
//    } 
//    print("昔⼈已乘黃鶴去"
//    , 
//    "此地空餘黃鶴樓"
//    , 
//    "黃鶴⼀去不復返"
//    , 
//    "雲千載空悠悠"); 

class Rectangle { 
    constructor(height, width) { 
    this.name = '四邊形'; 
    this.height = height; 
    this.width = width; 
    } 
    get area(){ 
    return this.height * this.width; 
    } 
   } 
   var r = new Rectangle(6, 3); 
   console.log(r); 
   console.log(r.area);