let scope = document.querySelector('#scope');
let calcBtn = document.querySelector('#calc-btn');
let result = document.querySelector('#result');
let currentScope = document.querySelector('#current-scope');
let currentLevel = document.querySelector('#current-level');

result.classList.add('d-none')

const calc = () => {
    let value = scope.value;
    let level = '不及格';

    // 實作等及判斷

    // a. >= 90 甲
    // b. >= 80 乙
    // c. >= 70 丙
    // d. >= 60 丁
    // e. < 60 不及格

    currentLevel.innerHTML = level;
    currentScope.innerHTML = value;
    result.classList.remove('d-none');
}

calcBtn.addEventListener('click', () => {
    calc();
})

scope.addEventListener('keyup', (e) => {
    if (e.key.toUpperCase() == 'ENTER') {
        calc();
    }
})