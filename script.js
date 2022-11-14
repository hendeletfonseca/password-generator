let sliderElement = document.querySelector('#slider');
let buttonElement = document.querySelector('#button');

let sizePassword = document.querySelector('#value');
let password = document.querySelector('#password');

let containerPassword = document.querySelector('#container-password');

let charset = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789çÇ!@#$%&*()_-+";
let newPassword = "";

sizePassword.innerHTML = sliderElement.value;

slider.oninput = function() {
    sizePassword.innerHTML = this.value;
}

function generatePassword() {

    let pass = "";
    let lenChars = charset.length;
    for (let i = 0; i < sliderElement.value; i++) {
        pass += charset.charAt(Math.floor(Math.random() * lenChars));
    }

    containerPassword.classList.remove('hide');
    password.innerHTML = pass;

}