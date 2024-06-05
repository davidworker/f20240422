# 20240605

## 網格系統

- 使用 `display:grid` 實作
- 使用 `grid-template-columns: repeat(12, 1fr);` 劃分12網格系統
- 使用 `grid-column: span 4;` 可定義個別項目佔據欄位數
- 使用 `grid-template-columns: repeat(auto-fill, minmax(100px, 1fr));` 可達到自動換行

`grid_system.html`

## 一頁式 RWD

### 手機版選單 icon


```html
<div class="header-wrap">
    <!-- ... -->
    <!-- <div class="menu">...</div> -->
    <div class="mobile-menu">
        <div class="mobile-menu-wrap">
            <span></span>
            <span></span>
            <span></span>
        </div>
    </div>
</div>
```

```css
.mobile-menu {
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: flex-end;
}

.mobile-menu-wrap {
    width: 46px;
    height: 46px;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    gap: 10px;
    cursor: pointer;
}

.mobile-menu-wrap>span {
    width: 100%;
    height: 4px;
    background-color: #000;
    border-radius: 100px;
}
```

### 手機版icon狀態切換

```html
<div class="mobile-menu">
    <input type="checkbox" id="mobile-menu-sw">
    <label for="mobile-menu-sw" class="mobile-menu-wrap">
        <span></span>
        <span></span>
        <span></span>
    </label>
</div>
```

```css
#mobile-menu-sw {
    display: none;
}

#mobile-menu-sw:checked~.mobile-menu-wrap>span {
    background-color: red;
}

#mobile-menu-sw:checked~.mobile-menu-wrap>span:first-child {
    transform: rotate(45deg);
}
```

### 手機版icon狀態切換特效


```css
.mobile-menu-wrap>span {
    /* ... */
    transition: 0.3s;
}
#mobile-menu-sw:checked~.mobile-menu-wrap>span:first-child {
    transform: rotate(45deg);
    position: relative;
    top: 6px;
    left: 1px;
}

#mobile-menu-sw:checked~.mobile-menu-wrap>span:nth-child(2) {
    display: none;
}

#mobile-menu-sw:checked~.mobile-menu-wrap>span:last-child {
    transform: rotate(-45deg);
    position: relative;
    top: -7px;
}
```