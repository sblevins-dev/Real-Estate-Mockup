const signIn = document.querySelector('.sign-in');
const modal = document.querySelector('.modal-container');
const submit = document.querySelector('.submit');
const exitButton = document.querySelector('.exit-button');
const emailInput = document.getElementById('email');
const passwordInput = document.getElementById('password');
const emailReq = document.querySelector('.email-required');
const passReq = document.querySelector('.password-required');

let verifyInputs = () => {
    return true;
}

signIn.addEventListener('click', () => {
    modal.classList.add('visible');

})

submit.addEventListener('click', (e) => {
    e.preventDefault();
    if (verifyInputs()) {
        modal.classList.remove('visible');
    }
})

exitButton.addEventListener('click', () => {
    modal.classList.remove('visible');
})



