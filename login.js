function validateEmail() {
    let emailField = document.getElementById("emailField");
    let emailFieldFeedback = document.getElementById("emailFieldFeedback");
    let mailRegExp = /^([A-Za-z0-9\.-]+)@([A-Za-z0-9\-]+).([a-z]{2,3})(.[a-z]{2,3})?$/;
    if (mailRegExp.test(emailField.value)) {
        emailFieldFeedback.innerHTML = "Valid";
        emailFieldFeedback.style.color = "green";
        return true;
    } else {
        emailFieldFeedback.innerHTML = "Not Valid";
        emailFieldFeedback.style.color = "red";
        return false;
    }
}

function validatePhone() {
    let PhoneNo = document.getElementById("phoneNo");
    let phoneNoFeedback = document.getElementById("phoneNoFeedback");
    let regexp = /^([0-9]{3})([\s]{0,1})([0-9]{3})([\s]{0,1})([0-9]{4})$/;
    let regexp2 = /^([0-9]{3})([\.-]{0,1})([0-9]{3})([\.-]{0,1})([0-9]{4})$/;
    if (regexp.test(PhoneNo.value)) {
        phoneNoFeedback.innerHTML = "Valid";
        phoneNoFeedback.style.color = "green";
        return true;
    } else if (regexp2.test(PhoneNo.value)) {
        phoneNoFeedback.innerHTML = "Valid";
        phoneNoFeedback.style.color = "green";
        return true;
    } else {
        phoneNoFeedback.innerHTML = "Not Valid";
        phoneNoFeedback.style.color = "red";
        return false;
    }
}

function confirmPass() {
    var password = document.getElementById("passwordField");
    var cpassword = document.getElementById("confirmPassword");
    var cpasfeed = document.getElementById("confirmPassFeedback");
    if (password.value === cpassword.value) {
        cpasfeed.innerHTML = "Password Matched";
        cpasfeed.style.color = "green";
        return true;
    } else {
        cpasfeed.innerHTML = "Password Not Matched";
        cpasfeed.style.color = "red";
        return false;
    }
}

function validatePassword() {
    let passwordField = document.getElementById("passwordField");
    let passwordFieldFeedback = document.getElementById("passFeedback");
    console.log(passwordField.value.length);
    let regexp = /^([A-Za-z0-9]{8})$/;
    if (
        passwordField.value.toString().match(regexp) &&
        passwordField.value.length > 10
    ) {
        passwordFieldFeedback.innerHTML = "Strong";
        passwordFieldFeedback.style.color = "green";
        return true;
    } else if (passwordField.value.length > 8) {
        passwordFieldFeedback.innerHTML = "Medium";
        passwordFieldFeedback.style.color = "yellow";
        return true;
    } else {
        passwordFieldFeedback.innerHTML = "Week";
        passwordFieldFeedback.style.color = "red";
        return false;
    }
}

function passwordFormatCheck() {
    let passwordField = document.getElementById("passwordField");
    let Upper = /([A-Z])/;
    let lower = /([a-z])/;
    let number = /([0-9])/;
    console.log(passwordField.value);
    if (
        passwordField.value.match(Upper) &&
        passwordField.value.match(lower) &&
        passwordField.value.match(number) &&
        passwordField.value.length > 8
    ) {
        alert("Password is of Preferred Format, Now You are In");
        return true;
    } else {
        alert(
            "Password is not of Preferred Format, Atleast One Capital letter, Atleast One Small letter, Atleast One Number is needed and length should be greater than 8."
        );
        return false;
    }
}