// your js code goes here...

//when the page load ready
function loadfun()
　　{
  	 //do something
   //  alert("ok");
   var usr_span=document.createElement("span");
     var usrnode = document.getElementById("username");
	usr_span.setAttribute("id","span1");
	usr_span.innerHTML = "•The username field must contain only alphanumeric characters";
	usr_span.className = "info";
	usr_span.style.display="none";
    usrnode.insertAdjacentElement('afterend', usr_span);

   var psw_span=document.createElement("span");
     var pswnode = document.getElementById("password");
	psw_span.setAttribute("id","span2");
	psw_span.innerHTML = "•The password field should be at least six characters long.";
	psw_span.className = "info";
	psw_span.style.display="none";
    pswnode.insertAdjacentElement('afterend', psw_span);

     var email_span=document.createElement("span");
     var emailnode = document.getElementById("email");
	email_span.setAttribute("id","span3");
	email_span.innerHTML = "•The email field should be a valid email address (abc@def.xyz). In simplest form, it should contain “@” character.";
	email_span.className = "info";
	email_span.style.display="none";
    emailnode.insertAdjacentElement('afterend', email_span);
　　}
　　/*load page loadfun()*/
　　window.onload = loadfun;
 
//-------------------------------email
  email.onfocus =function() {
	var email_span = document.getElementById("span3");
	email_span.innerHTML = "•The email field should be a valid email address (abc@def.xyz). In simplest form, it should contain “@” character.";
   	email_span.style.display="";
   	email_span.className="info"
  }


email.onblur = function() {
	 var email_span = document.getElementById("span3");
	 var email=document.getElementById("email")
	 if(!this.value){
	 	email_span.innerHTML = "•The email field should be a valid email address (abc@def.xyz). In simplest form, it should contain “@” character.";
   		email_span.className="info"
  		email_span.style.display="none";
	 }else{
	 	  if (!this.value.includes('@')) { // not email
     		 // show the error
     		email_span.innerHTML="error";
     		email_span.className="error";
     		// ...and put the focus back
      		input.focus();
      	    } else { //yes it's email
      			email_span.innerHTML="OK";
     		email_span.className="ok";
           }
	    }
	}


//------------------------------username
  username.onfocus =function() {
	var usr_span = document.getElementById("span1");
	usr_span.innerHTML = "•The username field must contain only alphanumeric characters.";
   	usr_span.style.display="";
   	usr_span.className="info"
  }


username.onblur = function() {
	 var usr_span = document.getElementById("span1");
	 var usr=document.getElementById("username")
	 if(!this.value){
	 	usr_span.innerHTML = "•The username field must contain only alphanumeric characters.";
   		usr_span.className="info"
  		usr_span.style.display="none";
	 }else{
	 	  var regex = new RegExp("^[a-zA-Z0-9\s]+$");
	 	  var str = String(this.value);
	 	  
	 	  if (!regex.test(str) ) { // not username
     		 // show the error
     		usr_span.innerHTML="error";
     		usr_span.className="error";
     		// ...and put the focus back
      		input.focus();
      	    } 
      	    else { //yes it's username
      			usr_span.innerHTML="OK";
     		    usr_span.className="ok";
            }
	 }
	}


//---------------------------------------passwd
  password.onfocus =function() {
	var pwd_span = document.getElementById("span2");
	pwd_span.innerHTML = "•The password field should be at least six characters long.";
   	pwd_span.style.display="";
   	pwd_span.className="info"
  }


password.onblur = function() {
	 var pwd_span = document.getElementById("span2");
	 var pwd=document.getElementById("email")
	 if(!this.value){
	 	pwd_span.innerHTML = "•The email field should be a valid email address (abc@def.xyz). In simplest form, it should contain “@” character.";
   		pwd_span.className="info"
  		pwd_span.style.display="none";
	 }else{
	 	  var str = String(this.value);

	 	  if (str.length<6) { // <6
     		 // show the error
     		pwd_span.innerHTML="error";
     		pwd_span.className="error";
     		// ...and put the focus back
      		input.focus();
      	    } else { //yes >=6
      		pwd_span.innerHTML="OK";
     		pwd_span.className="ok";
         }
	 }
  }




