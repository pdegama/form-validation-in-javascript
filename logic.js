const uFullname = document.getElementById("u_fullname")
const uEmail = document.getElementById("u_email")
const uPass = document.getElementById("u_password")
const uPass2 = document.getElementById("u_password2")
const uPhone = document.getElementById("u_phone")
const uSid = document.getElementById("u_sid")
const uBid = document.getElementById("u_bid")
const uIssue = document.getElementById("u_issue")
const uReturn = document.getElementById("u_return")


const eFullname = document.getElementById("u_err_fullname")
const eEmail = document.getElementById("u_err_email")
const ePassword = document.getElementById("u_err_password")
const ePassword2 = document.getElementById("u_err_password2")
const ePhone = document.getElementById("u_err_phone")
const eSid = document.getElementById("u_err_sid")
const eBid = document.getElementById("u_err_bid")
const eIssue = document.getElementById("u_err_issue")
const eReturn = document.getElementById("u_err_return")

const formGo = document.getElementById("form_go")

document.getElementsByClassName("form")[0].reset()

uSid.onkeyup = (e) => {
    eSid.innerHTML = ""
    if (e.target.value !== '' && e.target.value) {
        if (e.target.value.length === 15) {
            e.target.fValid = true;
        } else {
            eSid.innerHTML = `Student ID Have 15 Characters`
            e.target.fValid = false;
        }
    } else {
        e.target.fValid = false;
    }
    validForm();
}

uBid.onkeyup = (e) => {
    eBid.innerHTML = ""
    if (e.target.value !== '' && e.target.value) {
        if (e.target.value.length === 6) {
            e.target.fValid = true;
        } else {
            eBid.innerHTML = `Book ID Have 6 Characters`
            e.target.fValid = false;
        }
    } else {
        e.target.fValid = false;
    }
    validForm();
}

uFullname.onkeyup = (e) => {
    nameReg = /^[a-zA-Z ]+$/
    eFullname.innerHTML = ""
    if (e.target.value !== '' && e.target.value) {
        if (nameReg.test(e.target.value)) {
            e.target.fValid = true;
        } else {
            eFullname.innerHTML = `'${e.target.value}' Is Invalid Name`
            e.target.fValid = false;
        }
    } else {
        e.target.fValid = false;
    }
    validForm();
}

uEmail.onkeyup = (e) => {
    emailReg = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    eEmail.innerHTML = ""
    if (e.target.value !== '' && e.target.value) {
        if (emailReg.test(e.target.value)) {
            e.target.fValid = true;
        } else {
            eEmail.innerHTML = `'${e.target.value}' Is Invalid Email Address`
            e.target.fValid = false;
        }
    } else {
        e.target.fValid = false;
    }
    validForm();
}

uPass.onkeyup = (e) => {
    cReEnterPass(e);
    ePassword.innerHTML = ""
    if (e.target.value !== '' && e.target.value) {
        let c1, c2, c3, c4

        if (e.target.value.length > 7) {
            c1 = true;
        } else {
            ePassword.innerHTML += "Minimum Password Length 8 Characters"
            c1 = false;
        }

        spReg = /[*@$#%]/
        if (spReg.test(e.target.value)) {
            c2 = true;
        } else {
            ePassword.innerHTML += ((ePassword.innerHTML !== "") ? "<br>" : "") + "Minimum 1 Special Characters"
            c2 = false;
        }

        numReg = /[0-9]/
        if (numReg.test(e.target.value)) {
            c3 = true;
        } else {
            ePassword.innerHTML += ((ePassword.innerHTML !== "") ? "<br>" : "") + "Minimum 1 Numeric Characters"
            c3 = false;
        }

        upperReg = /[A-Z]/
        if (upperReg.test(e.target.value)) {
            c4 = true;
        } else {
            ePassword.innerHTML += ((ePassword.innerHTML !== "") ? "<br>" : "") + "Minimum 1 Uppercase Characters"
            c4 = false;
        }

        if (c1 && c2 && c3 && c4) {
            e.target.fValid = true;
        } else {
            e.target.fValid = false;
        }

    } else {
        e.target.fValid = false;
    }
    validForm();
}

uPass2.onkeyup = (e) => {
    cReEnterPass(e)
}

const cReEnterPass = (e) => {
    ePassword2.innerHTML = ""
    if (uPass2.value !== '' && uPass2.value) {
        if (uPass.value === uPass2.value) {
            uPass2.fValid = true;
        } else {
            ePassword2.innerHTML = `Password Not Match`
            uPass2.fValid = false;
        }
    } else {
        uPass2.fValid = false;
    }
    validForm();
}

uPhone.onkeyup = (e) => {
    phoneReg = /^(\+\d{1,3}\s)?\(?\d{3}\)?[\s.-]?\d{3}[\s.-]?\d{4}$/;
    ePhone.innerHTML = ""
    if (e.target.value !== '' && e.target.value) {
        if (phoneReg.test(e.target.value)) {
            e.target.fValid = true;
        } else {
            ePhone.innerHTML = `'${e.target.value}' Is Invalid Phone No.`
            e.target.fValid = false;
        }
    } else {
        e.target.fValid = false;
    }
    validForm();
}

const validForm = () => {
    if (uSid.fValid &&
        uBid.fValid &&
        uFullname.fValid &&
        uEmail.fValid &&
        uPass.fValid &&
        uPass2.fValid &&
        uPhone.fValid) {
        formGo.removeAttribute("disabled")
    } else {
        formGo.setAttribute("disabled", "")
    }
}
