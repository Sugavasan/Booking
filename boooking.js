function cab(){
    let user=  document.getElementById("recipient-name1").value;
    let recipient = document.getElementById("recipient1").value;
    let contact = document.getElementById("contact1").value;
    let pickup = document.getElementById("pickup1").value;
    let date = document.getElementById("time1").value;
    let time = document.getElementById("date1").value;
    let droplace = document.getElementById("droplace1").value;
    let close = document.getElementById("reset1");
  
    const confirmationMessage = `Cab booked:\nCustomer: ${user}\nContact No: ${contact}\nEmail:${recipient}\n
    pickup place:${pickup}\nDate:${date}\nTime:${time}\ndrop:${droplace}`;
    if(user==='' || recipient === '' ||
    contact === ''||pickup === ''|| date === '' ||
    time === ''||droplace === ''){
      return false;
    }else{
      alert(confirmationMessage)
      close.reset();
    };
    
   }
    
   //flight booking
   function flight(){
    var name = document.getElementById("username2").value;
    var email = document.getElementById("email2")
    var date = document.getElementById("date2").value;
    var time= document.getElementById("Time2").value;
    var child = document.getElementById("child");
    var adult = document.getElementById("adult");
    var contact = document.getElementById("contact")
    var city = document.getElementById("city2").value;
    var state = document.getElementById("state2").value;
    var check = document.getElementById("check");
    var out = document.getElementById("out");
    var close = document.getElementById("reset2");

if(name==='' || email === '' ||time ===''||city ===''||state ===''||
date === '' || contact ===''){
return false;
}else{
    alert("registration sucess")
    close.reset()
  }
};

//train booking

function train(){
  var name = document.getElementById("username3").value;
  var email = document.getElementById("email3").value;
  var date = document.getElementById("date3").value;
  var time= document.getElementById("Time3").value;
  var child = document.getElementById("child");
  var adult = document.getElementById("adult");
  var contact = document.getElementById("contact")
  var city = document.getElementById("city3").value;
  var state = document.getElementById("state3").value;
  var check = document.getElementById("check");
  var out = document.getElementById("out");
  var close = document.getElementById("reset3");

if(name==='' || email === '' ||time ===''||city ===''||state ===''||
date === '' || contact ===''){
return false;
}

if(!/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(email)){
alert("check your email")
return false;
}else{
alert("registration sucess")
close.reset()
}
};


//sign up

         
function signup(){
  var name = document.getElementById("username5").value;
  var email = document.getElementById("email5").value;
  var password1 = document.getElementById("password15").value;
  var confirmpassword = document.getElementById("cpassword5").value;

  var close = document.getElementById("reset5");

  if(
    name === ""||
    email === ""||
    password1 ===""||
    confirmpassword ===""

  ){
    return false;
  }
  if(password1 !== confirmpassword){
    alert("password did not match");
    return false;
  }
  if(!/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(email)){
    alert("check your email")
     return false;
   }else{
   alert("Registered sucess")
   close.reset()
}
};

//login
function login(){
  var name = document.getElementById("username6").value;
  var email = document.getElementById("email6").value;
  var password1 = document.getElementById("password16").value;
  var close = document.getElementById("reset6")
  if(
    name === ""||
    email === ""||
    password1 ===""){
    return false;
  }
  if(!/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(email)){
    alert("check your email")
     return false;
   }else{
   alert("login sucess")
   close.reset()
}   
};


//offer
function grab(){
  let message = prompt("Enter your Email id")
  let output = message ? "shortly,you will receive our message in your Email":"Please enter your Email correctly.";
  alert(output);
}
//feedback
function later(){
  alert("please try again later")
};
//contact
function contact(){
  var name = document.getElementById("username7").value;
  var email = document.getElementById("email7").value;
  var close = document.getElementById("reset7");
  
if(
name === ""||
email === ""
){
return false;
}  if(!/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(email)){
alert("check your email")
return false;
}else{
alert("Registered sucess")
close.reset()
}
};