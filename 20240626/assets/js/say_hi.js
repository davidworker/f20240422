let usernameInput = document.querySelector('#username');
let sayBtn = document.querySelector('#say-btn');
let responseBlock = document.querySelector('#response');

const sayHi = () => {
    let name = usernameInput.value;
    let message = `Hi, ${name}.`;
    responseBlock.innerHTML = message;
}

sayBtn.addEventListener('click', sayHi)