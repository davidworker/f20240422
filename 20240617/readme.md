# 20240617

## 關鍵影格宣告

```css
@keyframes move {
    from {
        left: 0;
    }

    to {
        left: 100%;
    }
}
````

## 關鍵影格使用

```css
.some {
    animation-name: move;
    animation-duration: 3s; 
}
```

`animation.html`

## 變數

使用變數可更彈性的修改數值與連動

```css
:root {
    --cube-size: 50px
}

/* ... */

.wrap .cube {
    /* ... */
    width: var(--cube-size);
    height: var(--cube-size);
}

@keyframes move {
    from {
        left: 0;
    }

    to {
        left: calc(100% - var(--cube-size));
    }
}
```