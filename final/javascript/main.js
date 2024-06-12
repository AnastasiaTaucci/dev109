function isValid() {
    console.log("name result - " + checkName());
    console.log("email result - " + checkEmail());
    console.log("subject result - " + checkSubject());
    console.log("message result - " + checkMessage());
    if (
        checkName() &&
        checkEmail() &&
        checkSubject() &&
        checkMessage()
    ) {
        return true;
    } else {
        return false;
    }
}


let elName = document.getElementById("name");
let elNameMsg = document.getElementById("nameError");

let elEmail = document.getElementById("email");
let elEmailMsg = document.getElementById("emailError");

let elSubject = document.getElementById("subject");
let elSubjectMsg = document.getElementById("subjectError");

let elMessage = document.getElementById("message");
let elMessageMsg = document.getElementById("messageError");


elName.addEventListener("blur", checkName, false);

elEmail.addEventListener("blur", checkEmail, false);

elSubject.addEventListener("blur", checkSubject, false);

elMessage.addEventListener("blur", checkMessage, false);


// validation functions

function checkName () {
    let validName = false;

    let name = elName.value.trim();

    if (name == null || name == "") {
        elNameMsg.className = "warning";
        elNameMsg.textContent = "Please provide your name."
    } else if (name.length > 50) {
        elNameMsg.className = "warning";
        elNameMsg.textContent = "The name cannot be greater than 50 characters."
    } else if (name.match("^[a-zA-Z ,.'-]+$") === null) {
        elNameMsg.className = "warning";
        elNameMsg.textContent = "Invalid caracter in first name (accepts only A-Z, a-z, and ,.'-)";
    } else {
        elNameMsg.textContent = "";
        validName = true;
    }

    return validName;
}



function checkEmail () {
    let validEmail = false;

    let email = elEmail.value.trim();

    let atpos = email.indexOf("@");
    let dotpos = email.lastIndexOf(".");

    if (email === null || email === "") {
        elEmailMsg.className = "warning";
        elEmailMsg.textContent = "Email address is required."
    } else if (    atpos < 1 ||
        dotpos < atpos + 2 ||
        dotpos + 2 >= email.length) {
        elEmailMsg.className = "warning";
        elEmailMsg.textContent = "Invalid email address."
    } else {
        elEmailMsg.textContent = "";
        validEmail = true;
    }

    return validEmail;
}


function checkSubject () {
    let validSubject = false;

    let subject = elSubject.value.trim();

    if (subject == null || subject == "") {
        elSubjectMsg.className = "warning";
        elSubjectMsg.textContent = "Please write subject."
    } else if (subject.length > 50) {
        elSubjectMsg.className = "warning";
        elSubjectMsg.textContent = "The subject cannot be greater than 50 characters."
    } else {
        elSubjectMsg.textContent = "";
        validSubject = true;
    }

    return validSubject;
}


function checkMessage () {
    let validMessage = false;

    let message = elMessage.value.trim();

    if (message == null || message == "") {
        elMessageMsg.className = "warning";
        elMessageMsg.textContent = "Message cannot be empty."
    } else if (message.length > 800) {
        elMessageMsg.className = "warning";
        elMessageMsg.textContent = "The message cannot be greater than 800 characters."
    } else {
        elMessageMsg.textContent = "";
        validMessage = true;
    }

    return validMessage;
}
