# 20240708

## 將數字綁定邏輯進行整合

```js
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

num0.addEventListener('click', () => {
    appendNumber(0);
    console.log(0);
})
```

## 計算機等於按鈕邏輯

```js
run.addEventListener('click', () => {
    // if (n1 && n2 && op) {
    //     // something...
    //     console.log('something...')
    // }

    if (!n1 || !n2 || !op) {
        return;
    }

    let total = 0;

    switch (op) {
        case '+':
            total = n1 + n2;
            break;

        case '-':
            total = n1 - n2;
            break;

        case '*':
            total = n1 * n2;
            break;

        case '/':
            total = n1 / n2;
            break;
    }

    n1 = total;
    n2 = 0;
    op = '';
    setResult();
})
```