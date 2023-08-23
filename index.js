const uid = document.getElementById("userid");
const fname = document.getElementById("fname");
const lname = document.getElementById("lname");
const male = document.getElementById("male");
const dob = document.getElementById("dob");
const email = document.getElementById("email");
const phone = document.getElementById("phone");
const pass = document.getElementById("password");
const confirm = document.getElementById("confirmPassword");

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
    const uidRegex = /^[a-zA-Z0-9]{6,}$/;
    if(uidRegex.test(uid)){
        fname.focus();
        return true;
    } else{
        document.getElementById("useridError").innerHTML = "Use above 5 char spcial char not allowed";
        uid.focus();
        return false;

    }
}