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
