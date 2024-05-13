# 20240513

## 背景顏色

`background-color`

```css
.some {
    background-color: red;
}
```

***在背景的最底層***

## 背景圖片

`background-image: url()`

```css
.some {
    background-image: url(../images/bg.png);
}
```

***可搭配 `background-color` 相容圖片故障時，使用體驗不至於太差***

## 背景圖片重複

`background-repeat`

- `repeat` 重複，預設值
- `no-repeat` 不重複
- `repeat-x` 橫軸重複
- `repeat-y` 縱軸重複

***當圖片小於容器大小時生效***

***重複通常用於小圖示重複排列***


## 背景圖片尺寸

`background-size`

- `auto` 預設
- `contain` 比例填充
- `cover` 完整填充

***使用 `cover` 可能會失真，但可以填滿整個容器***

## 背景圖片位置

`background-position`

- `left`
- `center`
- `right`
- `top`
- `bottom`