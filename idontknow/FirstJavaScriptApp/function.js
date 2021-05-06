
 let name = "Kevin", age = 32, gender = true;
 alert("Hi...JavaScript！");
 alert(`${name}, ${age}, ${gender}`);
 setTimeout(displayMessage, 1000);
 function displayMessage() {
    genderChinese = gender == true ? "男" : "女";
    alert("Hi...JavaScript！");
    //alert(`${name}, ${age}, ${gender}`);
    alert(`${name}, ${age}, ${genderChinese}`);
 }