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