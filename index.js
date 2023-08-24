const form = document.getElementById("form");
const uid = document.getElementById("userid");
const uidError = document.getElementById("uidError");
const fname = document.getElementById("fname");
const lname = document.getElementById("lname");
const male = document.getElementById("male");
const dob = document.getElementById("dob");
const email = document.getElementById("email");
const phone = document.getElementById("phone");
const pass = document.getElementById("password");
const confirm = document.getElementById("confirmPassword");

form.addEventListener("submit", (e) => {
    e.preventDefault();
    validate();
})

const validate = () => {
    if(uidValidate()){
        if(fnameValidate()){
            if(lnameValidate()){
                if(dobValidate()){
                    if(emailValidate()){
                        if(phoneValidate()){
                            if(passValidate()){
                                if(confirmValidate()){
                                    return true;
                                }
                            }
                        }
                    }
                }
            }
        }
    }
}

const uidValidate = () => {
    const uidRegex = /[a-zA-Z0-9]w+/g;
    const uidval = uid.value.trim();
    if(uidval == ""){
        uidError.innerHTML = "Userid not be empty";
        uid.focus();
        return false;
    } else if(!uidRegex.test(uidval)){
        uidError.innerHTML = "No special characters allow";
        uid.focus();
        return false;
    } else if(uidval.length <= 5){
        uidError.innerHTML = "Userid graterthen 5 char"
    } else{
        uidError.innerHTML = "";
        fname.focus();
        return false;
    }
}