const form=document.getElementById('form');
const email=document.getElementById('email');
const password=document.getElementById('password');
const password2=document.getElementById('password2');
const username=document.getElementById('username');

form.addEventListener('submit',(e)=>{
   var flag=0; 

checkSubmit();
if(flag>0){
    // const butn=document.getElementById('button')
    // butn.disabled=true;
    // e.preventDefault();
    
}
else{
    e.preventDefault();
}


})
function checkSubmit(){
    const usernameValue=username.value.trim();
    const emailValue=email.value.trim();
    const passwordValue=password.value.trim();
    const password2Value=password2.value.trim();
    console.log(usernameValue);
    if(usernameValue==''){
        setError(username,"Enter the username");
        flag++;
    }
    else{
        setSucces(username);
    }


    if(emailValue==''){
        setError(email,"Enter the email");
        flag++;
    }
    else if(!validateEmail(emailValue)){
        setError(email,"Enter a valid email");
        flag++;
    }
    else{
        setSucces(email);
    }


    if(passwordValue==''){
        setError(password,"Enter the password");
        flag++;
    }
    else{
        setSucces(password);
    }


    if(passwordValue!=password2Value){
        setError(password2,"Password is not matching");
        flag++;
    }
    else{
        setSucces(password2);
    }
}
function setError(userinput,message){
    const formControl=userinput.parentElement;
    const small=formControl.querySelector('small');
    small.innerText=message;
    formControl.className='form-control error';
   
}
function setSucces(userinput){
    const formControl=userinput.parentElement;
    formControl.className='form-control succes'
    
}
function validateEmail(email) {
    const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(email);
}
