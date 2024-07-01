# 20240701

## switch case

```js
switch (type) {
    case '+':
        console.log('+++++');
        break;
    case '-':
        console.log('-----');
        break;
    default:
        console.log('not match.');
}
```

***每個`case`內容結束後須加上`break`進行中斷，否則會一直往下執行。***


## 相等運算子

使用`==`符號，最終得到一個`boolean`。

容易與`=`搞混。

```js
let n1 = 10;
let n2 = 100;

console.log(`n1: ${n1}, n2: ${n2}`);

if (n1 == n2) {
    console.log('equal!');
} else {
    console.log('diff');
}



// n1 = n2 => n1 = 100 => if (100)
if (n1 = n2) {
    console.log('equal!');
} else {
    console.log('diff');
}

console.log(`n1: ${n1}, n2: ${n2}`);
```