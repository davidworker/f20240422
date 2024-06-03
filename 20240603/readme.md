# 20240603

## footer


```html
<div class="footer">
    <div class="container">
        <div class="footer-wrap">
            <div class="left">
                <img src="./assets/images/logo.svg" alt="">
            </div>
            <div class="right">
                <div>&copy;appedu 2024.</div>
            </div>
        </div>
    </div>
</div>
```

```css
.footer {
    background: #fff;
    padding: 30px 0;
}

.footer-wrap {
    display: flex;
    align-items: center;
    justify-content: space-between;
}
```

## page-2 背景處理

```html
<div class="page" id="page-2">
    <div class="page-wrap">
        <div class="container">
            <div class="page-content">
                1234
            </div>
        </div>
    </div>
</div>
```

```css
#page-2 {
    background-image: url(../images/process.jpeg);
    background-size: cover;
    background-position: center;
    position: relative;
    z-index: 1;
    color: #fff;
    padding: 50px 0;
}

#page-2::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: #00000079;
    z-index: 1;
}
```
