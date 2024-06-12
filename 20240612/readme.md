# 20240612

## 春字

`spring.html`

```html
<div class="container">
    <h1 class="slogan">春字</h1>
    <div class="spring">
        <span>春</span>
    </div>
</div>
```

```css
html,
body {
    font-family: "Noto Sans TC", sans-serif;
}

.spring {
    width: 100px;
    height: 100px;
    background: rgb(255, 57, 57);
    color: #fff;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 2rem;
    font-weight: 600;
    transform: rotate(45deg);
    margin: 60px auto;
}

.spring>span {
    transform: rotate(135deg);
}
```
