// function checkUsername() {                        // Declare function
//     var username = elUsername.value;                        // Store username in variable
//     if (username.length < 5) {                      // If username < 5 characters
//       elUserNameMsg.className = 'warning';                  // Change class on message
//       elUserNameMsg.textContent = 'Not long enough, yet...';// Update message
//     } else {                                        // Otherwise
//       elUserNameMsg.textContent = '';                       // Clear the message
//     }
//   }
  
//   function tipUsername() {                          // Declare function
//     elUserNameMsg.className = 'tip';                        // Change class for message
//     elUserNameMsg.innerHTML = 'Username must be at least 5 characters'; // Add message
//   }
  
//   var elUsername = document.getElementById('username');     // Username input
//   var elUserNameMsg = document.getElementById('uname');  // Element to hold message
  
//   // When the username input gains / loses focus call functions above:
//   elUsername.addEventListener('focus', tipUsername, false); // focus call tipUsername()
//   elUsername.addEventListener('blur', checkUsername, false);// blur call checkUsername()







  

// MY PROGRAM


function isValid() {
    console.log('firstname result - ' + checkFirstName());
    console.log('lastname result - ' + checkLastName());
    console.log('email result - ' + checkEmail());
    console.log('phone result - ' + checkPhone());
    console.log('username result - ' + checkUserName());
    console.log('password result - ' + checkPassword());
    console.log('address result - ' + checkAddress());
    console.log('city result - ' + checkCity());
    console.log('state result - ' + checkState());
    console.log('country result - ' + checkCountry());
    console.log('zipcode result - ' + checkZipCode());
    if (checkFirstName() && checkEmail() && checkLastName() && checkPhone() && checkUserName() &&
        checkPassword() && checkAddress() && checkCity() && checkState() && checkCountry() && checkZipCode()) {
        return true;
    }
    else {
        document.getElementById("submiterror").innerHTML = "<p>Error Submitting — See Above</p>";
        return false;
    }
}


// document elements

var elFirstName = document.getElementById('firstName');     // First Name input
var elFirstNameMsg = document.getElementById('fname');  // Element to hold message

var elLastName = document.getElementById('lastName');
var elLastNameMsg = document.getElementById('lname');

var elEmail = document.getElementById('userEmail');
var elEmailMsg = document.getElementById('uemail');

var elPhone = document.getElementById('userPhone');
var elPhoneMsg = document.getElementById('uphone');

var elUserName = document.getElementById('username');
var elUserNameMsg = document.getElementById('uname');

var elPassword = document.getElementById('password');
var elPasswordMsg = document.getElementById('upassword');

var elAddress = document.getElementById('userAddress'); 
var elAddressMsg = document.getElementById('uaddress'); 

var elCity = document.getElementById('userCity');
var elCityMsg = document.getElementById('ucity');

var elState = document.getElementById('userState');
var elStateMsg = document.getElementById('ustate');

var elCountry = document.getElementById('userCountry');
var elCountryMsg = document.getElementById('ucountry');

var elZipCode = document.getElementById('zipCode');
var elZipCodeMsg = document.getElementById('uzipcode');

// tip (focus) functions for every input

function tipFirstName() {
    elFirstNameMsg.className = 'tip';                        // Change class for message
    elFirstNameMsg.innerHTML = 'Cannot be greater than 20 characters';
}

function tipEmail() {
    elEmailMsg.className = 'tip';                        // Change class for message
    elEmailMsg.innerHTML = "an email must have the @ and .com, .net, etc";
}

function tipLastName() {
    elLastNameMsg.className = 'tip';                        // Change class for message
    elLastNameMsg.innerHTML = "Cannot be greater than 50 characters";
}

function tipPhone() {
    elPhoneMsg.className = 'tip';                        // Change class for message
    elPhoneMsg.innerHTML = "Maximum 15 digits";
}

function tipUserName() {
    elUserNameMsg.className = 'tip';                        // Change class for message
    elUserNameMsg.innerHTML = "Maximum 12 characters";
}

function tipPassword() {
    elPasswordMsg.className = 'tip';                        // Change class for message
    elPasswordMsg.innerHTML = "Maximum 7 characters. Iclude 1 upper, 1 lower, 1 number and 1 special character.";
}

function tipAddress() {
    elAddressMsg.className = 'tip';                        // Change class for message
    elAddressMsg.innerHTML = "Cannot be empty";
}

function tipCity() {
    elCityMsg.className = 'tip';                        // Change class for message
    elCityMsg.innerHTML = "Cannot be empty";
}

function tipState() {
    elStateMsg.className = 'tip';                        // Change class for message
    elStateMsg.innerHTML = "Select one";
}

function tipCountry() {
    elCountryMsg.className = 'tip';                        // Change class for message
    elCountryMsg.innerHTML = "Select one";
}

function tipZipCode() {
    console.log("country value is - " + elCountry.value);
    if (elCountry.value === "USA") {
        elZipCodeMsg.className = 'tip';                        // Change class for message
        elZipCodeMsg.innerHTML = "5 digits";
    } else {
        elZipCodeMsg.className = 'tip';                        // Change class for message
        elZipCodeMsg.innerHTML = "not required";
    }

}



// focus and blur for every input

elFirstName.addEventListener('focus', tipFirstName, false);
elFirstName.addEventListener('blur', checkFirstName, false);

elLastName.addEventListener('focus', tipLastName, false);
elLastName.addEventListener('blur', checkLastName, false);

elEmail.addEventListener('focus', tipEmail, false);
elEmail.addEventListener('blur', checkEmail, false);

elPhone.addEventListener('focus', tipPhone, false);
elPhone.addEventListener('blur', checkPhone, false);

elUserName.addEventListener('focus', tipUserName, false);
elUserName.addEventListener('blur', checkUserName, false);

elPassword.addEventListener('focus', tipPassword, false);
elPassword.addEventListener('blur', checkPassword, false);

elAddress.addEventListener('focus', tipAddress, false);
elAddress.addEventListener('blur', checkAddress, false);

elCity.addEventListener('focus', tipCity, false);
elCity.addEventListener('blur', checkCity, false);

elState.addEventListener('focus', tipState, false);
elState.addEventListener('blur', checkState, false);

elCountry.addEventListener('focus', tipCountry, false);
elCountry.addEventListener('blur', checkCountry, false);

elZipCode.addEventListener('focus', tipZipCode, false);
elZipCode.addEventListener('blur', checkZipCode, false);


// validations for every input

function checkFirstName() {
    //1) Create variable
    var validFirstname = false;

    //2) read value from HTML
    var firstname = elFirstName.value;

    //3) Do validation
    if (firstname === null || firstname === "") {
        elFirstNameMsg.className = 'warning';                  // Change class on message
        elFirstNameMsg.textContent = 'The first name is required';
        console.log("First name invalid — empty")
    } else if (firstname.length > 20) {
        elFirstNameMsg.className = 'warning';                  // Change class on message
        elFirstNameMsg.textContent = 'The first name cannot be greater than 20 characters';
        console.log("First name invalid — length")
    } else if (firstname.match("^[a-zA-Z ,.'-]+$") === null) {
        elFirstNameMsg.className = 'warning';                  // Change class on message
        elFirstNameMsg.textContent = "Invalid caracter in first name (accepts only A-Z, a-z, and ,.'-)";
        console.log("First name invalid — bad characters")
    } else {
        elFirstNameMsg.textContent = '';                       // Clear the message
        validFirstname = true;
        console.log("First name valid")
    };


    //4) return status of each field
    return validFirstname;
};

function checkLastName() {
        //1) Create variable
        var validLastname = false;

        //2) read value from HTML
        var lastname = elLastName.value;
    
        //3) Do validation
        if (lastname === null || lastname === "") {
            elLastNameMsg.className = 'warning';                  // Change class on message
            elLastNameMsg.textContent = 'The last name is required';
            console.log("Last name invalid — empty")
        } else if (lastname.length > 50) {
            elLastNameMsg.className = 'warning';                  // Change class on message
            elLastNameMsg.textContent = 'The last name cannot be greater than 50 characters';
            console.log("Last name invalid — length")
        } else if (lastname.match("^[a-zA-Z ,.'-]+$") === null) {
            elLastNameMsg.className = 'warning';                  // Change class on message
            elLastNameMsg.textContent = "Invalid caracter in last name (accepts only A-Z, a-z, and ,.'-)";
            console.log("Last name invalid — bad characters")
        } else {
            elLastNameMsg.textContent = '';                       // Clear the message
            validLastname = true;
            console.log("Last name valid")
        };
    
    
        //4) return status of each field
        return validLastname;
};


function checkEmail() {
    var validEmail = false;
    var userEmail = elEmail.value;
    var atpos = userEmail.indexOf("@");
    var dotpos = userEmail.lastIndexOf(".");
    if (userEmail === null || userEmail === ""){
        elEmailMsg.className = 'warning';
        elEmailMsg.textContent = 'Email is required';
        console.log("Email invalid — empty")
    }
    else if (atpos < 1 || dotpos < atpos + 2 || dotpos + 2 >= userEmail.length) {
        elEmailMsg.className = 'warning';
        elEmailMsg.textContent = 'Invalid email address';
        console.log("email invalid — @ or .")
    }
    else {
        elEmailMsg.textContent = '';
        validEmail = true;
        console.log("email valid")
    }
    return (validEmail);
};


function checkPhone() {
    var validPhone = false;
    var phone = elPhone.value;
    if (phone[3] == '-' && phone[7] == '-') {
        phone = phone.split('-').join('');
        console.log("the phone is " + phone);
    }
if (isNaN(phone) || phone.length >15) {
    elPhoneMsg.className = 'warning';
    elPhoneMsg.textContent = 'Invalid phone number';
    console.log("phone invalid — length or NaN");
} else if (phone === null || phone === "") {
    elPhoneMsg.className = 'warning';
    elPhoneMsg.textContent = 'Phone number is required';
    console.log("phone invalid — empty");
} else {
    elPhone.value = phone.slice(0, 3) + '-' + phone.slice(3, 6) + '-' + phone.slice(6);
    elPhoneMsg.textContent = '';
    validPhone = true;
    console.log("phone valid")
}
  return validPhone;

};

function checkUserName() {
    var validUsername = false;
    var username = elUserName.value;
    if (username.length > 12) {
        elUserNameMsg.className = 'warning';
        elUserNameMsg.textContent = 'username is too long';
        console.log("user name invalid — length")
    } else if (username === null || username === "") {
        elUserNameMsg.className = 'warning';
        elUserNameMsg.textContent = 'Username is required';
        console.log("user name invalid — empty")
    } else {
        elUserNameMsg.textContent = '';
        validUsername = true;
        console.log("user name valid ")
    }
    return validUsername;
};

function checkPassword() {
    var validPassword = false;
    var password = elPassword.value;
    var uppercasePattern = /[A-Z]/;
    var lowercasePattern = /[a-z]/;
    var numberPattern = /[0-9]/;
    var specialCharacterPattern = /[!@#\$%\^\&*\)\(+=._-]/;

    if (password.length > 7) {
        elPasswordMsg.className = 'warning';
        elPasswordMsg.textContent = 'password is too long';
        console.log("password invalid — length");
    } else if (password === null || password === "") {
        elPasswordMsg.className = 'warning';
        elPasswordMsg.textContent = 'Password is required';
        console.log("password invalid — empty");
    } else if (!uppercasePattern.test(password)) {
        elPasswordMsg.className = 'warning';
        elPasswordMsg.textContent = 'Must contain at least one uppercase letter';
        console.log("password invalid — missing uppercase letter");
    } else if (!lowercasePattern.test(password)) {
        elPasswordMsg.className = 'warning';
        elPasswordMsg.textContent = 'Must contain at least one lowercase letter';
        console.log("password invalid — missing lowercase letter");
    } else if (!numberPattern.test(password)) {
        elPasswordMsg.className = 'warning';
        elPasswordMsg.textContent = 'Must contain at least one number';
        console.log("password invalid — missing number");
    } else if (!specialCharacterPattern.test(password)) {
        elPasswordMsg.className = 'warning';
        elPasswordMsg.textContent = 'Must contain at least one special character';
        console.log("password invalid — missing special character");
    } else {
        elPasswordMsg.textContent = '';
        validPassword = true;
        console.log("password valid");
    }
    return validPassword;
};

function checkAddress() {
    var validAddress = false;
    var address = elAddress.value;
    if (address === null || address === "") {
        elAddressMsg.className = 'warning';
        elAddressMsg.textContent = 'Address is required';
        console.log("address invalid — empty")
    } else {
        elAddressMsg.textContent = '';
        validAddress = true;
        console.log("address valid")
    }
    return validAddress;
};

function checkCity() {
    var validCity = false;
    var city = elCity.value;
    if (city === null || city === "") {
        elCityMsg.className = 'warning';
        elCityMsg.textContent = 'City is required';
        console.log("city invalid — empty")
    } else {
        elCityMsg.textContent = '';
        validCity = true;
        console.log("address valid")
    }
    return validCity;
};

function checkState() {
    console.log("the value of state is - " + elState.value);
    var validState = false;
    var state = elState.value;
    if (state === null || state === "") {
        elStateMsg.className = 'warning';
        elStateMsg.textContent = 'State is required';
        console.log("state invalid — empty")
    } else {
        elStateMsg.textContent = '';
        validState = true;
        console.log("state valid")
    }
    return validState;
};

function checkCountry() {
    var validCountry = false;
    var country = elCountry.value;
    if (country === null || country === "") {
        elCountryMsg.className = 'warning';
        elCountryMsg.textContent = 'Country is required';
        console.log("country invalid — empty")
    } else {
        elCountryMsg.textContent = '';
        validCountry = true;
        console.log("country valid")
    }
    return validCountry;
};

function checkZipCode() {
    var validZipcode = false;
    var country = elCountry.value;
    var zipcode = elZipCode.value;
    if (country === 'USA') {
        if (zipcode === null || zipcode === ""){
            elZipCodeMsg.className = 'warning';
            elZipCodeMsg.textContent = 'ZipCode is required';
            console.log("zipcode invalid — empty");
        } else if (zipcode.length !== 5) {
            elZipCodeMsg.className = 'warning';
            elZipCodeMsg.textContent = 'not enought digits';
            console.log("zipcode invalid — length");
        } else if (isNaN(zipcode)) {
            elZipCodeMsg.className = 'warning';
            elZipCodeMsg.textContent = 'Invalid caracter in zip code.';
            console.log("zipcode invalid — NaN");
        } else {
            elZipCodeMsg.textContent = '';
            validZipcode = true;
            console.log("zipcode valid - USA");
        }
    } else {
        elZipCodeMsg.textContent = '';
        validZipcode = true;
        console.log("zipcode valid — not USA");
    }
    return validZipcode;
}