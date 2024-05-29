# 20240529

## 一頁式切版

### slogan 雙色底線

```css
.slogan {
    text-align: center;
    font-size: 1.5rem;
    position: relative;
    padding-bottom: 15px;
}

.slogan::after {
    content: '';
    position: absolute;
    bottom: 0;
    left: calc(50% - 150px);
    width: 0;
    height: 3px;
    border-left: 100px solid rgb(66, 66, 255);
    border-right: 200px solid #fff;
}
```