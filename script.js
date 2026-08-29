const age = 44;
const loginBox = document.querySelector("div#login-box");
const submitBtn = document.querySelector("button#submit-btn");
const numberInput = document.querySelector('input#code-input');

submitBtn.addEventListener('click', () => {
    if (numberInput.value == age) {
        setTimeout(() => {
            loginBox.style.display = 'none';
        }, 2000);
    } else {
        alert("Ben je nu al vergeten hoe oud je ben geworden?!");
    }
});