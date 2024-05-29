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

- 高度修改`height: 3px;`


### slogan2 雙色底線

```css
.slogan2 {
    text-align: center;
    font-size: 1.5rem;
    position: relative;
    padding-bottom: 12px;
    border-bottom: 3px solid #fff;
    border-image: linear-gradient(to right, #4242ff 30%, #fff 0%) 1;
}
```

- 調整`#4242ff 30%`中的`30%`控制藍色長度
- 高度修改`border-bottom: 3px solid #fff;`中的`3px`