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

var span2=document.createElement("span");
span2.setAttribute("id","span2");

var span3=document.createElement("span");
span3.setAttribute("id","span3");


span1.innerHTML = "The username field must contain only alphanumeric characters";
span1.className = "info";

span2.innerHTML = "The password field should be at least six characters long";
span2.className = "info";

span3.innerHTML = "The email field should be a valid email address (abc@def.xyz)";
span3.className = "info";


var username = document.getElementById("username");
username.parentNode.insertBefore(span1, username.nextSibling);

var password = document.getElementById("password");
password.parentNode.insertBefore(span2, password.nextSibling);

var email = document.getElementById("email");
email.parentNode.insertBefore(span3, email.nextSibling);



/*
username.focus = function(){
document.getElementById("username").style.backgroundColor = "yellow";
}
*/


function check_password() {
        
        var password_confirm = ("password").val().length;
        if ( password_confirm < 6) {
            ("password").after(error);
            (".ok").hide();

        } else {
            (".error").hide();
            ("password").after(ok);
        }
    }


    function check_username() {
       
        var oUname = ("username").val();
        var reg = /^[0-9]|[a-z]|[A-Z]*$/g;
        if (!reg.test(oUname)) {
            ("username").after(error);
            (".ok").hide();
        } else {
            (".error").hide();
            ("username").after(ok);

        }


    }

    function check_email() {
        
        var oUemail = ("#email").val();
        var reg = /^([a-zA-Z]|[0-9])+@[a-zA-Z0-9]+\.([a-zA-Z]{3})$/;

        if (!reg.test(oUemail)) {
            ("email").after(error);
            (".ok").hide();

        } else {
            (".error").hide();
            ("email").after(ok);

        }

