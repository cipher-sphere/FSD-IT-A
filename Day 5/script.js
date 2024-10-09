/*"use strict";
let a=12;
let $=1/3;
let _=2;
let c="hello";
let e={
    name:"Arun",
    id:12,
}
let f=true;
function display(){
    console.log(a)
}
display();
console.log($)
console.log(typeof _)
console.log(typeof $)
console.log(typeof c)
console.log(typeof e)
console.log(typeof f)
let x="12"/"6";
console.log(x)
let bol=true;
let str=String(bol)
console.log(str)
console.log(str.charAt(1))*/
// let str="12";
// let num=Boolean(str);
// console.log(typeof num)
// console.log(num)
//Iteraction:  alert ,prompt ,confirm
// function display(){
//     let x= confirm("Are you Sure");
//     alert("user selects",x);
//  }

function validate() {
    // Get the username and password input values
    var username = document.getElementById("login").value;
    var password = document.getElementById("password").value;
    var result = document.getElementById("result");
  
    // Clear previous result
    result.innerHTML = "";
  
    // Check if the username field is empty
    if (username === "") {
      result.innerHTML = "Please enter your username.";
      result.style.color = "red";
      return false;
    }
  
    // Check if the password field is empty
    if (password === "") {
      result.innerHTML = "Please enter your password.";
      result.style.color = "black";
      result.style.background-color = "red";
      return false;
    }
  
    // If both fields are filled, show success message
    if(username === "Admin" && password === "Admin"){
    result.innerHTML = "Login successful!";
    result.style.color = "green";
    }
  
    // You can perform further validation or form submission here
    return true;
  }
  
