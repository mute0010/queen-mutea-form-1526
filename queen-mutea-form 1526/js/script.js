// declaring the variables

let submitButton = document.getElementById("submit-button");
let fullName = document.getElementById("fullname");
let email = document.getElementById("email");
let message = document.getElementById("message");

// regular expression for email

let emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;



function validateForm() {

    // EMPTY BUCKETS

    let data = {};   // object for collected data
    let errors = []; // array for errors


    // Full name

    if(fullName.value.trim() !== ""){
        data.fullName = fullName.value.trim();
    } else {
        errors.push("Full name is missing");
    }


    // email

    if(email.value.trim() !== ""){

        if(emailPattern.test(email.value.trim())){
            data.email = email.value.trim();
        } else {
            errors.push("Email is invalid");
        }

    } else {
        errors.push("Email is missing");
    }


    // Message

    if(message.value.trim() !== ""){
        data.message = message.value.trim();
    } else {
        errors.push("Message is missing");
    }


    // feedback/errors

    if(errors.length > 0){

        console.log("ERRORS");
        console.log(errors);

    } else {

        console.log("COLLECTED DATA");
        console.log(data);

        // clear fields

        fullName.value = "";
        email.value = "";
        message.value = "";
    }

}


// REGISTER EVENT

submitButton.addEventListener("click", validateForm);