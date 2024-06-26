# 20240626

## DOM 單選

只會取得第一個找到的DOM

```js
let selector = '#some';
let dom = document.querySelector(selector);
```

## DOM 多選

不管找到幾個，都使用`NodeList`陣列包裝

```js
let selector = '#some';
let items = document.querySelectorAll(selector);
```
