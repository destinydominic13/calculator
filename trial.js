const text = document.querySelector(".text");
const email = document.querySelector(".email");
const password = document.querySelector(".password");
const confirmpassword = document.querySelector(".confirmpassword");
const submit = document.querySelector(".submit");
const error = document.querySelector(".error");
const erraddress = document.querySelector(".erroraddress");
const errpassword = document.querySelector(".errorpassword");
const errconfirm = document.querySelector(".errorconfirm");


console.log(text,email,password,confirmpassword,submit);


submit.addEventListener('click', function(e){
    e.preventDefault()
  
    if(text.value == ''){
        error.classList.add('shake','block');

    }else{
        error.classList.remove('block');
    } 
    setTimeout(()=>{ //remove shake class after 500ms
        error.classList.remove("shake");
        erraddress.classList.remove("shake");
        errpassword.classList.remove("shake");
    }, 500);
    if(email.value == ''){
        erraddress.classList.add('shake','block');
    }else{
        erraddress.classList.remove('block');
        checkEmail()

    }
    if(password.value == ''){
        errpassword.classList.add('block','shake');

    }else{
        errpassword.classList.remove('block');
    }
   if( confirmpassword.value != password.value){
        errconfirm.classList.add('block','shake');
   }else{
        errconfirm.classList.remove('block','shake');
   }
    

    //let's create a function
    function checkEmail(){
        let pattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/; //pattern to validate email
        if(!email.value.match(pattern)){ // if pattern not matched with user entered value
            erraddress.classList.add("block","shake");
            let email = document.querySelector(".erroraddress");
            (email.value != "") ? email.innerHTML = "Enter a valid email address" :email.innerHTML = "Email can't be blank";
        }else{
            erraddress.classList.remove("block");
        }
    }


})