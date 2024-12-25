var nameError = document.getElementById("name-error");
var phoneError = document.getElementById("phone-error");
var emailError = document.getElementById("email-error");
var msgError = document.getElementById("msg-error");
var passwordError = document.getElementById("password-error");
var submitError = document.getElementById("submit-error");
let eyeicon = document.getElementById("eyeicon");
var password = document.getElementById("password");
var messages = document.getElementById("strong");
var str = document.getElementById("strength");

function validateName() {
    var name = document.getElementById("name").value;

    if (name.length == 0) {
        nameError.innerHTML = 'Name is required';
        return false;
    }
    if (!name.match(/^[A-Za-z]*\s{1}[A-Za-z]*$/)) {
        nameError.innerHTML = 'Write full name';
        return false;
    }
    nameError.innerHTML = '<i class="fa-regular fa-circle-check"></i>';
    return true;
}

function validatePhone() {
    var phone = document.getElementById("phone").value;

    if (phone.length == 0) {
        phoneError.innerHTML = "Phone no is required";
        return false;
    }
    if (phone.length != 10) {
        phoneError.innerHTML = "Phone no should be 10 digits";
        return false;
    }
    if (!phone.match(/^[0-9]{10}$/)) {
        phoneError.innerHTML = "Only digits please.";
        return false;
    }
    phoneError.innerHTML = '<i class="fa-regular fa-circle-check"></i>';
    return true;
}

function validateEmail() {
    var email = document.getElementById("email").value;

    if (email.length == 0) {
        emailError.innerHTML = 'Email is required';
        return false;
    }
    if (!email.match(/^[A-Za-z\._\-[0-9]*[@][A-Za-z]*[\.][a-z]{2,4}$/)) {
        emailError.innerHTML = 'Email Invalid';
        return false;
    }
    emailError.innerHTML = '<i class="fa-regular fa-circle-check"></i>';
    return true;
}

function validateMessage() {
    var message = document.getElementById("message").value;
    var required = 30;
    var left = required - message.length;

    if (left > 0) {
        msgError.innerHTML = left + ' more characters required';
        return false;
    }
    msgError.innerHTML = '<i class="fa-regular fa-circle-check"></i>';
    return true;
}

function validateForm() {
    if (!validateName() || !validatePassword() || !validatePhone() || !validateEmail() || !validateMessage()) {
        submitError.style.display = 'block';
        submitError.innerHTML = "Please fix error to submit";
        setTimeout(function () { submitError.style.display = 'none'; }, 3000);
        return false;
    }
}

function validatePassword() {
    var password = document.getElementById("password").value;
    var required = 8;
    var left = required - password.length;

    if (left > 0) {
        passwordError.innerHTML = ' 8 characters required';
        return false;
    }

    passwordError.innerHTML = '<i class="fa-regular fa-circle-check"></i>';
    return true;
}
eyeicon.onclick = function () {
    if (password.type == "password") {
        password.type = "text";
        eyeicon.src = "images/eyes.png";
    }
    else {
        password.type = "password";
        eyeicon.src = "images/eye-close.png"
    }
}


password.addEventListener('input', () => {
    if (password.value.length > 0) {
        messages.style.display = "block";
    }
    else {
        messages.style.display = "none";
    }
    if (password.value.length < 4) {
        str.innerHTML = "weak";
        password.style.borderColor = "red";
        messages.style.color = "red";
    }
    else if (password.value.length >= 4 && password.value.length < 8) {
        str.innerHTML = "medium";
        password.style.borderColor = "#ff5925";
        messages.style.color = "#ff5925";
    }
    else if (password.value.length >= 8) {
        str.innerHTML = "strong";
        password.style.borderColor = "seagreen";
        messages.style.color = "seagreen";
    }
})