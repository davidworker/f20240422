# 20240619

[Bootstrap](https://getbootstrap.com/)

## 優點

- 完整度高
- 學習曲線低
- 可擴充 (SCSS)
- 官方文件齊全
- RWD 控制方便
- 透過 class 組合，簡單的需求甚至不需要自己寫 css
- 不需要編譯器編譯 (相對於 Tailwind CSS)

## 缺點

- 只能滿足 90% 需求
- component 構成複雜（善用文件）
- 眾多 !important，覆寫彈性降低
- 大量 class 組合，主體辨識度較低
- 不支援 IE 11 以下瀏覽器

## 引用

- 下載壓縮檔案
- copy css/bootstrap.min.css
- copy js/bootstrap.min.js

`bs5.html`

## grid

`.row > .col`

### `.col` 本身為範圍定義，不做任何樣式呈現

異常

```html
<div class="row">
    <div class="col bg-danger text-white">01</div>
    <div class="col bg-danger text-white">02</div>
    <div class="col bg-danger text-white">03</div>
    <div class="col bg-danger text-white">04</div>
    <div class="col bg-danger text-white">05</div>
    <div class="col bg-danger text-white">06</div>
    <div class="col bg-danger text-white">07</div>
    <div class="col bg-danger text-white">08</div>
    <div class="col bg-danger text-white">09</div>
    <div class="col bg-danger text-white">10</div>
    <div class="col bg-danger text-white">11</div>
    <div class="col bg-danger text-white">12</div>
</div>
```

正常

```html
<div class="row">
    <div class="col">
        <div class="bg-danger text-white">01</div>
    </div>
    <div class="col">
        <div class="bg-danger text-white">02</div>
    </div>
    <div class="col">
        <div class="bg-danger text-white">03</div>
    </div>
    <div class="col">
        <div class="bg-danger text-white">04</div>
    </div>
    <div class="col">
        <div class="bg-danger text-white">05</div>
    </div>
    <div class="col">
        <div class="bg-danger text-white">06</div>
    </div>
    <div class="col">
        <div class="bg-danger text-white">07</div>
    </div>
    <div class="col">
        <div class="bg-danger text-white">08</div>
    </div>
    <div class="col">
        <div class="bg-danger text-white">09</div>
    </div>
    <div class="col">
        <div class="bg-danger text-white">10</div>
    </div>
    <div class="col">
        <div class="bg-danger text-white">11</div>
    </div>
    <div class="col">
        <div class="bg-danger text-white">12</div>
    </div>
</div>
```

### 格數

`col-{1,12}`

### 依據breakpoints

`col-{infix}-{1,12}`

```html
<div class="row">
    <div class="col-md-4 col-sm-6 mb-1">
        <div class="bg-danger text-white">01</div>
    </div>
    <div class="col-md-4 col-sm-6 mb-1">
        <div class="bg-danger text-white">02</div>
    </div>
    <div class="col-md-4 col-sm-6 mb-1">
        <div class="bg-danger text-white">03</div>
    </div>
    <div class="col-md-4 col-sm-6 mb-1">
        <div class="bg-danger text-white">04</div>
    </div>
    <div class="col-md-4 col-sm-6 mb-1">
        <div class="bg-danger text-white">05</div>
    </div>
    <div class="col-md-4 col-sm-6 mb-1">
        <div class="bg-danger text-white">06</div>
    </div>
    <div class="col-md-4 col-sm-6 mb-1">
        <div class="bg-danger text-white">07</div>
    </div>
    <div class="col-md-4 col-sm-6 mb-1">
        <div class="bg-danger text-white">08</div>
    </div>
    <div class="col-md-4 col-sm-6 mb-1">
        <div class="bg-danger text-white">09</div>
    </div>
    <div class="col-md-4 col-sm-6 mb-1">
        <div class="bg-danger text-white">10</div>
    </div>
    <div class="col-md-4 col-sm-6 mb-1">
        <div class="bg-danger text-white">11</div>
    </div>
    <div class="col-md-4 col-sm-6 mb-1">
        <div class="bg-danger text-white">12</div>
    </div>
</div>
```