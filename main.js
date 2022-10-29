function printError(elemId, hintMsg) {
    document.getElementById(elemId).innerHTML = hintMsg;
}

//   validate goes here
function validateForm() {
    
    let name = document.contactForm.name.value;
    let email = document.contactForm.email.value;
    let mobile = document.contactForm.mobile.value;
    let sitting = document.contactForm.sitting.value;
    let gender = document.contactForm.gender.value;
    let ume = document.contactForm.ume.value;
    let putme = document.contactForm.putme.value;
    



    // Here is the error variable
    let nameErr = emailErr = mobileErr = genderErr = numberErr = utmeErr = putmelErr =  true;

    // Validate name
    if (name == "") {
        printError("nameErr", "Please enter your name");
    }
    else {
        let regex = /^[a-zA-Z\s]+$/;
        if (regex.test(name) === false) {
            printError("nameErr", "Please enter a valid name");
        }
        else {
            printError("nameErr", "");
            nameErr = false;
        }
    }

    // Validate email address
    if (email == "") {
        printError("emailErr", "Please enter your email address");
    }
    else {
        // Regular expression for basic email validation
        let regex = /^\S+@\S+\.\S+$/;
        if (regex.test(email) === false) {
            printError("emailErr", "Please enter a valid email address");
        } else {
            printError("emailErr", "");
            emailErr = false;
        }
    }

    // Validate mobile number
    if (mobile == "") {
        printError("mobileErr", "Please enter your mobile number");
    }
    else {
        regex = /^[1-9]\d{9}$/;
        if (regex.test(mobile) === false) {
            printError("mobileErr", "Please enter a valid 11 digit mobile number");
        } 
        else {
            printError("mobileErr", "your mobile number should not be less than 11 digit");
            mobileErr = false;
        }
    }


   // validate gender
    
    if (gender == "") {
        printError("genderErr", "Please select your gender");
    }
    else {
        printError("genderErr", "");
        genderErr = false;
    }


    // validate No of sitting
    if (sitting > 1 ){
        printError("numbErr", "Only one sitting is allowed");

    }
// validate Utme
    if (ume >= 180){
        printError("utmeErr" , "You qualified");
    }
    else if(ume < 180){
        printError("utmeErr" , "You are not qualified");
    }
    // validate putme
    if ( putme >= 20){
        printError("putmelErr" , "You re qualified for Admission");
    }
    else if(putme  <= 20){
        printError("putmelErr" , "You are not qualified for admission");
    }

    // I prevent the form here from being submitted when there is error
    if ((nameErr || emailErr || mobileErr || genderErr || numberErr || utmeErr) == true) {
        return false;
    }
    else {
        // Creating a string from input data for preview
        var dataPreview = "You've entered the following details: \n" +
            "Full Name: " + name + "\n" +
            "Email Address: " + email + "\n" +
            "Mobile Number: " + mobile + "\n" +
           "Gender: " + gender + "\n";
           "sitting:" + sitting + "\n";
           " ume :" + ume + "\n";
           "putme :" + putme + "\n";
    }
}