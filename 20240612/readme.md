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

## 特價條

`discount.html`

```html
<div class="container">
    <h1 class="slogan">Discount</h1>
    <div class="discount-grid">
        <div class="item">
            <div class="cover s1">
                <img src="./assets/images/product.jpg" alt="">
                <div class="discount">off 10%</div>
            </div>
            <div class="content">
                <h2>Product name</h2>
            </div>
        </div>
        <div class="item">
            <div class="cover" data-discount="10">
                <img src="./assets/images/product.jpg" alt="">
            </div>
            <div class="content">
                <h2>Product name</h2>
            </div>
        </div>
        <div class="item">
            <div class="cover" data-discount="20">
                <img src="./assets/images/product.jpg" alt="">
            </div>
            <div class="content">
                <h2>Product name</h2>
            </div>
        </div>
        <div class="item">
            <div class="cover" data-discount="30">
                <img src="./assets/images/product.jpg" alt="">
            </div>
            <div class="content">
                <h2>Product name</h2>
            </div>
        </div>
        <div class="item">
            <div class="cover" data-discount="40">
                <img src="./assets/images/product.jpg" alt="">
            </div>
            <div class="content">
                <h2>Product name</h2>
            </div>
        </div>
        <div class="item">
            <div class="cover" data-discount="50">
                <img src="./assets/images/product.jpg" alt="">
            </div>
            <div class="content">
                <h2>Product name</h2>
            </div>
        </div>
        <div class="item">
            <div class="cover" data-discount="60">
                <img src="./assets/images/product.jpg" alt="">
            </div>
            <div class="content">
                <h2>Product name</h2>
            </div>
        </div>
        <div class="item">
            <div class="cover" data-discount="99">
                <img src="./assets/images/product.jpg" alt="">
            </div>
            <div class="content">
                <h2>Product name</h2>
            </div>
        </div>
    </div>
</div>
```

```css
.discount-grid {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    grid-auto-rows: minmax(100px, auto);
    gap: 10px;
}

.discount-grid .item {
    background: #0e62ff;
    color: #fff;
    padding: 10px;
}

.cover {
    margin-bottom: 20px;
    position: relative;
    overflow: hidden;
}

.cover img {
    max-width: 100%;
    height: auto;
}

.cover.s1 .discount {
    position: absolute;
    top: 16px;
    right: -77px;
    width: 100%;
    height: 26px;
    background: #fff;
    color: red;
    display: flex;
    align-items: center;
    justify-content: center;
    transform: rotate(45deg);
}

.cover:not(.s1)::after {
    content: 'off ' attr(data-discount) '%';
    position: absolute;
    top: 16px;
    right: -77px;
    width: 100%;
    height: 26px;
    background: #fff;
    color: red;
    display: flex;
    align-items: center;
    justify-content: center;
    transform: rotate(45deg);
}
```
