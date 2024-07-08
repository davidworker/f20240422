let n1 = 0;
let n2 = 0;
let op = '';

let result = document.querySelector('#result');

const setResult = () => {
    let html = n1;
    if (op) {
        html += op;
        if (n2) {
            html += n2;
        }
    }

    result.innerHTML = html;
}

const appendNumber = (num) => {
    num = num.toString();
    if (op) {
        n2 += num;
        n2 = +n2;
    } else {
        n1 += num;
        n1 = +n1;
    }

    setResult();
}

document.addEventListener('keyup', (e) => {
    let key = e.key;
    if (key >= 0 && key <= 9) {
        appendNumber(key);
    }
})