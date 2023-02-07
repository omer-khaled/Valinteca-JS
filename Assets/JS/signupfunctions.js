let dangers = [...(document.getElementsByClassName('danger'))];
let uservalid = false;
let Emailvalid = false;
let Passwordvalid = false;
let Confirmvalid = false;
let Username = '';
let Email = '';
let Password = '';
let Confirm = '';
const Submit = async(e)=>{
    e.preventDefault();
    validationuser(Username)
    validationEmail(Email);
    validationPassword(Password);
    validationConfirmvalid();
    if(uservalid&&Emailvalid&&Passwordvalid&&Confirmvalid){
        const obj ={
            username:Username,
            email:Email,
            password:Password,
            password_confirmation:Confirm,
        };
        let send = await fetch('https://goldblv.com/api/hiring/tasks/register',{
            method:"POST",
            headers: {
                Accept: "application/json",
                'Content-Type': 'application/json'
            },
            body:JSON.stringify(obj)
        });
        let res = await send.json();
        if(res.id!==undefined){
            localStorage.setItem("user",JSON.stringify(res));
            sessionStorage.setItem("user",JSON.stringify(res));
            window.location.href='../../success.html';
        }
    }
}
const validationuser = (value)=>{
    let reg = /^((?!_)[a-zA-z])([a-zA-z0-9](?!_)){3,13}([a-zA-z](?!_))$/;
    if(reg.test(value)){
        uservalid = true;
        dangers[0].innerHTML = '';
    }else{
        dangers[0].innerHTML = 'should be in this formla (start with character {character or digits (3 to 13)} wnd with character';
    }
}
const validationEmail = (value)=>{
    let reg = /^\w+(@gmail.com)$/;
    if(reg.test(value)){
        Emailvalid=true;
        dangers[1].innerHTML = '';
    }else{
        dangers[1].innerHTML = 'should be in this formla (Any_characters@gmail.com)';
    }
}
const validationPassword = (value)=>{
    let reg = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
    if(reg.test(value)){
        Passwordvalid=true;
        dangers[2].innerHTML = '';
    }else{
        dangers[2].innerHTML ='should conatin one upper,lower , digi , symbol , at least 8character ';
    }
}
const validationConfirmvalid = ()=>{
    if(Confirm===Password && Confirm!==''){
        Confirmvalid=true;
        dangers[3].innerHTML = '';
    }else{
        dangers[3].innerHTML = 'should the same password and not empty';
    }
}
const setUsername = (e)=>{
    Username = e.target.value;
}
const setEmail = (e)=>{
    Email =e.target.value;
}
const setPassword = (e)=>{
    Password =e.target.value;
}
const setConfirm = (e)=>{
    Confirm =e.target.value;
}
export {Submit,setUsername,setEmail,setPassword,setConfirm};