function togglePassword(){

let pass = document.getElementById("password")

pass.type = pass.type === "password" ? "text" : "password"

}

function showRegister(){

document.getElementById("loginCard").style.display="none"

document.getElementById("registerCard").style.display="block"

}

function showLogin(){

document.getElementById("loginCard").style.display="block"

document.getElementById("registerCard").style.display="none"

}


/* REGISTER → SEND DATA TO GOOGLE SHEETS */

document.getElementById("registerForm")
.addEventListener("submit",function(e){

e.preventDefault()

let data = {

first:document.getElementById("first").value,
last:document.getElementById("last").value,
email:document.getElementById("regEmail").value,
phone:document.getElementById("phone").value,
address:document.getElementById("address").value,
pincode:document.getElementById("pincode").value,
password:document.getElementById("regPass").value

}


fetch("YOUR_GOOGLE_SCRIPT_URL",{

method:"POST",
body:JSON.stringify(data)

})

.then(res=>res.text())
.then(res=>{

alert("Registration saved")

showLogin()

})

})



/* LOGIN PROCESS */

document.getElementById("loginForm")
.addEventListener("submit",function(e){

e.preventDefault()

let email = document.getElementById("email").value

localStorage.setItem("vmk_user",email)

window.location.href="index.html"

}) 