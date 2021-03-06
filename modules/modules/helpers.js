function $g(selector){
    //判斷是否為id
    if( selector.includes("#") && !selector.includes(" ")){
        return document.querySelector(selector);
    }

    //回傳nodelist
    let nodelist = document.querySelectorAll(selector);
    return nodelist.length == 1 ? nodelist[0] : nodelist; 

}
function $genul(liarray){
    let ul = document.createElement("ul");

    liarray.forEach((item,index) => {
        let li = document.createElement("li");
        li.innerText = item; 
        ul.appendChild(li);
     });
     return ul;
}

function getrandom(min,max){
    return Math.floor(Math.random() * max + min)
}

export { $g , $genul,getrandom};