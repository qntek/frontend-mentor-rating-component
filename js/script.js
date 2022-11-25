const ratingWindow = document.querySelector('.rating-window');
const thanksWindow = document.querySelector('.thanks-window');
const ratingButtons = document.querySelectorAll('.buttons button');
const submitButton = document.querySelector('#submit');
let ratingValue;

submitButton.addEventListener('click', submitHandler);
ratingButtons.forEach(button => {button.addEventListener('click', rateButtonHandler);});

function submitHandler() {
    if (ratingValue) {
        document.getElementById('result').textContent = ratingValue;
        ratingWindow.classList.add('off');
        setTimeout(() => {
            thanksWindow.classList.remove('off');
        }, 300);
    }
}

function rateButtonHandler(e) {
    ratingValue = e.target.textContent;
    ratingButtons.forEach(button => {
        button.classList.remove('clicked')
    });
    e.target.classList.add('clicked');
}