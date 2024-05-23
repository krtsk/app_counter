let addButton = document.querySelector('.counter_addButton');
let resetButton= document.querySelector ('.counter_resetButton');
let counterText = document.querySelector ('.counter');
let counter = 0;
let reset = 0;

addButton.addEventListener ('click', function (){
    counter = counter + 1;
    counterText.innerText = counter;
});

resetButton.addEventListener('click', function () {
    counter = 0;
    counterText.innerText = counter;
})


