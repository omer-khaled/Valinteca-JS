let user = JSON.parse(localStorage.getItem('user'));
let email_p = document.querySelector('.App>.succes>.info>#email');
if(user===null){
    window.location.href='../../signup.html';
}else{
    email_p.innerHTML = user.email;
}
