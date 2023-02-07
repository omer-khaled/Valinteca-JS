let user = JSON.parse(localStorage.getItem('user'));
const navigate = ()=>{
    if(user!==null){
        window.location.href='../../success.html';
    }else{
        window.location.href='../../singup.html';
    }
}
const btn = document.getElementsByTagName('button')[0];
btn.addEventListener('click',navigate);
