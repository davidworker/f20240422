# 20240624

## 引用方式

### 外部檔案

```html
<script src="./assets/js/some.js"></script>
```

***建議使用***

### 元素使用

```html
<script>
    alert(1);
</script>
```

***不建議使用，行數無法對應***

### 練習

跳出視窗顯示`1`表示成功

`js_basic.html`

```html
<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
    <style>

    </style>
</head>

<body>
</body>
<script src="./assets/js/js_basic.js"></script>

</html>
```

`js_basic.js`

```js
alert(1);
```

## 變數宣告

- 使用`let`關鍵字宣告
- 只能使用`_`與英文字母當開頭
- 只能使用`_`與英文字母與數字組成

### 錯誤示範

```js
let 5s = 'aaa';
let -s = 'bbb';
```

## var與let

使用let宣告變數，其暫時死區TDZ(Temporal Dead Zone)特性可以幫助程式更穩健。

## 終端機輸出

### 一般輸出

```js
let fname = 'David';
console.log(fname);
```

### 列表輸出

```js
let nums = [1, 2, 3, 4];
console.table(nums);
```

### 特殊格式輸出

```js
console.log('%c鴨沒肉！！！\n%c我只是亂喊一下啦~', 'color:red;font-size:20px;', 'color:#dedede')
```

## 型態

### 文字

使用`'`或是`"`將文字包起來


```js
let firstName = 'Lin';
let lastName = 'David';
let fullName = firstName + ' ' + lastName;
// let fullName = 'firstName' + ' ' + lastName;
console.log(fullName);

// let error_1 = 'Lin";


let t1 = "I'm \"David\"";
console.log(t1); // I'm "David"
```

`\`為跳脫字元，將有特殊涵意轉為一般文字

### 數字

包含整數跟浮點數

```js
let n1 = 1;
let n2 = 1.25;
let n3 = n1 + n2;

console.log(n1, n2, n3);
```

### 文字與數字

只要運算過程遇到一個字串型態，全部會被轉為字串處理。

```js
let n = 1
let s = '10'
let ns = n + s
console.log(ns, typeof ns)
```

## 字串數字轉數字型態

```js
let sn = '10';
let n1 = parseInt(sn, 10);
let n2 = +sn;
```

## 數字轉文字

```js
let num = 10;
let sn = num.toString();
```