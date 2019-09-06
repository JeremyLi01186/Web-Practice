// your js code goes here...
/*
var error = "<span class='error'>Error</span>";
var ok = "<span class='ok'>ok</span>";
var info = "<span class='info'>info</span>";

var usn_info = "<span class='info' id='u'>The username field must contain only alphabetical or numeric characters</span>";
var psw_info = "<span class='info' id='p'>The password field should be at least six characters long</span>";
var email_info = "<span class='info' id='e'>The email field should be a valid email address (abc@def.xyz). </span>";
*/

var span1=document.createElement("span");
span1.setAttribute("id","span1");
//span1.style.display = "none";


//span1.innerHTML = "The username field must contain only alphanumeric characters";
//span1.className = "info";



var username = document.getElementById("username");
username.parentNode.insertBefore(span1, username.nextSibling);



document.getElementById("username").onfocus = function() {UFFunction()};
function UFFunction() {
  document.getElementById("span1").innerHTML = "The username field must contain only alphanumeric characters";
  span1.className = "info";
}

document.getElementById("username").onblur = function() {UBFunction()};
function UBFunction() {
  ocument.getElementById("span1").style.display="none";
  span1.className = "info";
}



function validateUsername(){ 
var input = document.myform.username.value; 
if(input.value < 6) { 
document.username.focus(); 
document.getElementById("span1").innerHTML="用户名不能为空!"; 
span1.className = "info";
return false; 
} 
}



