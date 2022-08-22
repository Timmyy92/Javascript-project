let arr = []
let firstName = document.getElementById('firstName');
let lastName = document.getElementById('lastName');
let email = document.getElementById('email');
let password = document.getElementById('password');
let confirmPassword = document.getElementById('confirmPassword');
let phoneNumber = document.getElementById('phoneNumber');
const nameErr = document.querySelector(".name-error");
const emailErr = document.querySelector(".email-error");
const passErr = document.querySelector(".password-error");
const retypeErr = document.querySelector(".passwordmatch-error");
const phoneErr = document.querySelector(".phonenum-error");


let getuser = JSON.parse(localStorage.getItem("signup"))
    if (getuser != null) {
        arr = getuser       
    }

let regex = /[a-z0-9]+@[a-z]+\.[a-z]{2,3}/
let passRegex = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/
    
email.addEventListener("input", () => {
    emailErr.classList.remove("hidden")
    
    if (email.value.match(regex)) {
        emailErr.innerHTML = "Valid Email"
        emailErr.style.color = "green"
    } else if (email.value === "") {
        emailErr.classList.add("hidden")
    }
    
    else {
        emailErr.innerHTML = "Invalid Email"
        emailErr.style.color = "red"
    }
   
})


password.addEventListener("input", () => {
    passErr.classList.remove("hidden")
    
    if (password.value.match(passRegex)) {
        passErr.innerHTML = "Password Okay"
        passErr.style.color = "green"
    }
    else if (password.value === "") {
        passErr.classList.add("hidden")
    }
    else {
        passErr.innerHTML = "Password must contain Minimum eight characters, at least one letter and one number"
    }
})

function createAccount(event) {
    event.preventDefault()

   if (!email.value){
       emailErr.classList.remove("hidden")
        phoneErr.classList.remove("hidden")  
   } 
   else if(!password.value){
    passErr.classList.remove("hidden") 
   }
   else if(!confirmPassword.value){
    retypeErr.classList.remove("hidden") 
   }
   else if(!phoneNumber.value){
    phoneErr.classList.remove("hidden") 
   }
   else if(password.value !== confirmPassword.value){
    retypeErr.classList.remove("hidden") 
   }
       
       
    

   else {
       let getuser = JSON.parse(localStorage.getItem('signup'))
       console.log(getuser);

    //    let userdata = getuser.find( f => {
    //        return f.email === email.value 
    //    })
    //    if (userdata) {
    //        alert('Aleady existing Account')
    //        return
    //    }
    //    else {
        arr.push({
            firstname: firstName.value,
            surname: lastName.value,
            email: email.value,
            password: password.value,
            lastPassword: confirmPassword.value,
            phoneNumber: phoneNumber.value
        })
           localStorage.setItem("signup", JSON.stringify(arr))
           alert("Succesfully Registered")
           console.log("Succesfully Registered")

           window.location.href = 'index.html'
       }
       
    
    
       
    
//    }
}
let modalOpen = false

const toggleAuth = () => {
    modalOpen = !modalOpen
    modalOpen ? document.querySelector('.signup').style.display = 'none' : document.querySelector('.signup').style.display = 'flex'
}

let signinemail = document.querySelector('.signinemail');
let signinpassword = document.querySelector('.signinpassw');



function signin() {
    if (signinemail.value == '' || signinpassword.value == '' ) {
        alert('fill in your details')
        return
    }

    let getuser = JSON.parse(localStorage.getItem('signup'))

    let userdata = getuser.find( s => {
        return s.email === signinemail.value 
    })
    if (!userdata) {
        alert('incorrent email and password')
    }
    else {
        if (userdata.password == signinpassword.value) {
            window.location.href = 'index.html'
            alert('login successful')
            signinpassword.value = ''
            signinemail.value  = ''
        }
    }
}

