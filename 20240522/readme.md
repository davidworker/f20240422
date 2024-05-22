# 20240522

## POPUP 練習

`popup.html`

按鈕互動

- 使用 `:checked` 與`相鄰選擇器`做搭配
- `display:inline`預設會有無法消除的間距

## 布局方式 display

`display.html`
 
- `block` 會佔據整列，適合第一層劃分所屬範圍用
- `inline` 不會佔據整列，但也無法認識`width`與`height`，且會有不可處理的間距問題
- `inline-block` 不會佔據整列，可認識`width`與`height`，會有不可處理的間距問題
- `flex` 與 `block` 相同，但是多了縱軸對齊可使用，且可消除`inline`不可處理的間距問題
- `inline-flex` 與 `inline-block` 相同，但是多了縱軸對齊可使用

## flex justify-content

`flex_justify_content.html`