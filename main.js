const form = document.querySelector('form');
const emailError = document.querySelector('.email__error');
const passwordError = document.querySelector('.password__error');

function login(e) {
    e.preventDefault();

    const formDataEntries = new FormData(form).entries();
    const {email, password} = Object.fromEntries(formDataEntries);

    
    const emailErrorMessage = validateEmail(email);
    const passowrdErrorMessage = validatePassword(password);
    console.log(emailErrorMessage)

    if (!emailErrorMessage) {
        // show email error message to user
        emailError.innerText = emailErrorMessage;
    }

    if (passowrdErrorMessage) {
        // show password error message to user
        passwordError.innerText = passowrdErrorMessage;
    }
}


function validatePassword(password, minlength) {
    if (!password) return 'Password is required';
  
    if (password.length < minlength) {
      return `Please enter a password that's at least ${minlength} characters long`;
    }
  
    const hasCapitalLetter = /[A-Z]/g;
    if (!hasCapitalLetter.test(password)) {
      return 'Please use at least one capital letter.';
    }
  
    const hasNumber = /\d/g;
    if (!hasNumber.test(password)) {
      return 'Please use at least one number.';
    }
  
    return '';
};

function validateEmail(email) {
    if (!email) return 'Email is required';
      
    const isValidEmail = /^\S+@\S+$/g
    if (!isValidEmail.test(email)) {
      return 'Please enter a valid email';
    }
  
    return '';
};

form.addEventListener('submit', login);