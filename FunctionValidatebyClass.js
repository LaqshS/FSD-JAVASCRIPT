function validateEmail(inputText) {
  var mailFormat =  /\S+@\S+\.\S+/;
  if (inputText.value.match(mailFormat)) {
    alert("Valid address!");
    return true;
  } else {
    alert("Invalid address!");
    return false;
  }
}

// base class for data validation
class Validation{
  constructor(){
       this.errorMessage = "";
  }
  validate(data){
       // abstract method to be implemented by subclass
  }
  errorMessage(){
       return this.errorMessage;
  }
}
// subclass for validating email addresses
class Email extends Validation{
  validate(data){
       if(typeof data !== "string" || !data.includes("@")){
            this.errorMessage = "invalid email address";
            return false;
       }
       return true;
  }
}
// subclass for validation for phone number
class Phone extends Validation{
  validate(data){
       if(typeof data !== "string" || !data.match(/^\d{10}$/)){
            this.errorMessage = "invalid phone number";
            return false;
       }
       return true;
  }
}
// subclass for validating usernames
class Username extends Validation{
  validate(data){
       if(typeof data !== "string" || data.length < 6 ){
            this.errorMessage = "Invalid username";
            return false;
       }
       return true;
  }
}

// usage of validations:

const email = new Email();
const phone = new Phone();
const username = new Username();
var e_valid = false;
let email_id = "a";

let ph_valid = false;
let phoneNumber = 0;

while(true){

 
//const email_id = "laqshsharma3101@gmail.com";
if(e_valid === false) {
email_id = prompt('Enter your Email: ');
}
else {
  console.log("skipping re-entering of email id, taking previously entered correct email id.")
}
if(email.validate(email_id)){
  e_valid = true;
  console.log("Email address is valid");
  // email is valid, lets take next item value
  if(ph_valid === false){
    phoneNumber =  prompt('Enter your PhoneNumber: ');
  }
  else {
    console.log("skipping re-entering of ph. no., taking previously entered correct ph. no.")
  }
  if(phone.validate(phoneNumber)){
    ph_valid = true;
    console.log("Phone number is valid");
    // phone num is valid, lets take next item value
    const username_id =  prompt('Enter your Desired Username: ');
    if(username.validate(username_id)){
      console.log("Username is valid");
      break;
    }
    else{
      console.log(username.errorMessage);
    }  
  }
  else{
    console.log(phone.errorMessage);
  }  
}
else{
  // email is invalid, restart fetching user input
  console.log(email.errorMessage);
}
}
