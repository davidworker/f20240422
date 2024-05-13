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

## 框線

`border`

- `border-width`
- `border-color`
- `border-style`

## 導角

`border-radius`

## 畫圓形條件

- 正方形
- 導角數值大於等於正方形

## 內距

`padding`

***框線與內容之間的距離***

可用格式

```css
.some {
    padding: 10px; /* top right bottom left */
    padding: 10px 20px; /** top bottom 10px, left right 20px */
    padding: 10px 20px 30px 40px; /* top 10px, right 20px, bottom 30px, left 40px */
}
```

## 外距

`margin`

***框線以外的距離，用於兩個區塊之間***

可用格式

```css
.some {
    margin: 10px; /* top right bottom left */
    margin: 10px 20px; /** top bottom 10px, left right 20px */
    margin: 10px 20px 30px 40px; /* top 10px, right 20px, bottom 30px, left 40px */
}
```

## 盒子模型

`box-sizing`

- `content-box` 預設，`padding` 與 `border` 會影響整體寬高，容易導致破版。
- `border-box` `padding`與 `border` 只會擠壓 `content` 寬高，無法擠壓時，才會向外擴散。

參考 `box_model2.html`
