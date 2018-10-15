  function vfun(){

  	var name1 = document.forms["myform"]["name1"].value;
  	var pass1 = document.forms["myform"]["pass1"].value;

  	if(name1==null || name1=="" ) {

  		document.getElementById("errorbox").innerHTML =
  		 "enter the user name";
  		return false;
  	}

  	if  (pass1==null || pass1=="" ) {

  		document.getElementById("errorbox").innerHTML =
  		"enter the password";
  		return false;
  	}

  	if (name1 != '' && pass1 != '' ) {

  		alert("Login succesfully");
  	}
  }
  
  function vfun1(){

    var uname1 = document.forms["myform2"]["uname1"].value;
  	var email1 = document.forms["myform2"]["email1"].value;
    var upswd1 = document.forms["myform2"]["upswd1"].value;
  	var upswd2 = document.forms["myform2"]["upswd2"].value;

     if(uname1==null || uname1==""){
     	document.getElementById("errorbox").innerHTML = "enter the user name"
     	return false;
     }

     if(email1==null || email1==""){
     	document.getElementById("errorbox").innerHTML = "enter the email"
     	return false;
     }

     if(upswd1==null || upswd1==""){
     	document.getElementById("errorbox").innerHTML = "enter the password"
     	return false;
     }

     if(upswd2==null ||upswd2==""){
     	document.getElementById("errorbox").innerHTML = "enter the password"
     	return false;
     }

     if(upswd1 != upswd2){
     	document.getElementById("errorbox").innerHTML = "password dont match"
     	return false;

     }

     if(uname1 != '' && upswd1 != '' && upswd2 != '' && email1 != '' ){

     	alert("Register succesfully")
     }

  }
