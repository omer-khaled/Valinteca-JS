import {Submit,setUsername,setEmail,setPassword,setConfirm} from './signupfunctions.js';
let user = JSON.parse(localStorage.getItem('user'));
if(user!==null){
    window.location.href='../../success.html';
}
const form = document.forms[0];
form.addEventListener('submit',Submit);
const input_user_name = document.forms[0]['username'];
const input_email = document.forms[0]['email'];
const input_password = document.forms[0]['password'];
const input_confirm_password = document.forms[0]['confirm'];
input_user_name.addEventListener('change',setUsername);
input_email.addEventListener('change',setEmail);
input_password.addEventListener('change',setPassword);
input_confirm_password.addEventListener('change',setConfirm);









