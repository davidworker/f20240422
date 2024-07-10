# 20240710

## 修正分數轉等級ifSolution

`scope_to_level.js`

```js
const ifSolutionFix1 = (value) => {
    let level = '不及格';

    if (value >= 60) {
        level = '丁';
    }

    if (value >= 70) {
        level = '丙';
    }

    if (value >= 80) {
        level = '乙';
    }

    if (value >= 90) {
        level = '甲';
    }

    return level;
}

const ifSolutionFix2 = (value) => {
    if (value >= 90) {
        return '甲';
    }

    if (value >= 80) {
        return '乙';
    }

    if (value >= 70) {
        return '丙';
    }

    if (value >= 60) {
        return '丁';
    }

    return '不及格';
}
```

## 事件氣泡範例

`event_bubble.html`

## 氣泡中斷

`e.stopPropagation();`

## 預設行為中斷

`e.preventDefault();`