function togglePassword(){

let password = document.getElementById("password")

if(password.type === "password"){
password.type="text"
}else{
password.type="password"
}

}


function toggleRegPassword(){

let password = document.getElementById("regPassword")

if(password.type === "password"){
password.type="text"
}else{
password.type="password"
}

}


function showRegister(){

document.querySelector(".login-card").style.display="none"

document.getElementById("registerCard").style.display="block"

}


function showLogin(){

document.querySelector(".login-card").style.display="block"

document.getElementById("registerCard").style.display="none"

}