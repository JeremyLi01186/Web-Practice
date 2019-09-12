// your js code goes here...
function validation()
　　{
  var U_span = document.createElement("span");
  var usrnode = document.getElementById("username");
      U_span.setAttribute("id", "span1");
      usrnode.insertAdjacentElement('afterend', U_span);

  var P_span = document.createElement("span");
  var pswnode = document.getElementById("password");
      P_span.setAttribute("id","span2");
      pswnode.insertAdjacentElement('afterend', P_span);

  var E_span = document.createElement("span");
  var emailnode = document.getElementById("email");
      E_span.setAttribute("id", "span3");
      emailnode.insertAdjacentElement('afterend', E_span);
　　}
　　window.onload = validation;
 



//Focus Function
    
username.onfocus = function() 
{
    var U_span = document.getElementById("span1");
    U_span.innerHTML = "The username field must contain only alphanumeric characters.";
    U_span.className ="info"
    U_span.style.display = "";
}

password.onfocus = function()
{
    var P_span = document.getElementById("span2");
    P_span.innerHTML = "The password field should be at least six characters long.";
    P_span.className = "info"
    P_span.style.display = "";
}

email.onfocus = function()
{
    var E_span = document.getElementById("span3");
    E_span.innerHTML = "The email field should be a valid email address (abc@def.xyz). ";
    E_span.className = "info"
    E_span.style.display = "";
}




// Blur Function

username.onblur = function() 
{
    var U_span = document.getElementById("span1");
    var usr = document.getElementById("username")
    if(!this.value)
    {
      U_span.style.display="none";
      U_span.className = "info"; 
    }
    else
    {
      var regex = new RegExp("^[a-zA-Z0-9\s]+$");
      var str = String(this.value);

      if (regex.test(str) ) 
      { 
        U_span.innerHTML = "OK";
        U_span.className = "ok";
      } 
      else 
      { 
        U_span.innerHTML = "error";
        U_span.className = "error";
        input.focus();
      }
    }
}


email.onblur = function() 
{
    var E_span = document.getElementById("span3");
    var email = document.getElementById("email")
    if(!this.value)
    {
      E_span.className = "info"
      E_span.style.display = "none";
    }
    else
    {
      if (this.value.includes('@')) 
      { 
        E_span.innerHTML = "OK";
        E_span.className = "ok";
      } 
      else
      { 
        E_span.innerHTML = "error";
        E_span.className = "error";
        input.focus();
      }
    }
}



password.onblur = function() 
{
    var P_span = document.getElementById("span2");
    var pwd = document.getElementById("email")
    if(!this.value)
    {
      P_span.className = "info"
      P_span.style.display = "none";
    }
    else
    {
      var str = String(this.value);
      if (str.length<6) 
      { 
        P_span.innerHTML = "error";
        P_span.className = "error";
        input.focus();
      } 
      else 
      { 
        P_span.innerHTML = "OK";
        P_span.className = "ok";
      }
    }
}



