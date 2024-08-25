const emailInput = document.getElementById('email');
const passwordInput = document.getElementById('password');
const emailError = document.getElementById('emailError');
const passwordError = document.getElementById('passwordError');
const formSuccess = document.getElementById('formSuccess');
const signupForm = document.getElementById('signupForm');

const validateEmail = (email) => email.length > 3 && email.includes('@') && email.includes('.');
const validatePassword = (password) => password.length >= 8;

emailInput.addEventListener('input', () => {
    if (validateEmail(emailInput.value)) {
        emailError.style.display = 'none';
    } else {
        emailError.style.display = 'block';
    }
    checkFormValidity();
});

passwordInput.addEventListener('input', () => {
    if (validatePassword(passwordInput.value)) {
        passwordError.style.display = 'none';
    } else {
        passwordError.style.display = 'block';
    }
    checkFormValidity();
});

const checkFormValidity = () => {
    if (validateEmail(emailInput.value) && validatePassword(passwordInput.value)) {
        formSuccess.style.display = 'block';
    } else {
        formSuccess.style.display = 'none';
    }
};

signupForm.addEventListener('submit', (event) => {
    event.preventDefault();

    if (validateEmail(emailInput.value) && validatePassword(passwordInput.value)) {
        if (confirm('Are you sure you want to sign up?')) {
            alert('Successful signup!');
            emailInput.value = '';
            passwordInput.value = '';
            window.location.reload();
        }
    }
});