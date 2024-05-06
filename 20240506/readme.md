# 20240506

## 下拉選單

***使用select為主體，內容只能為option。***

`select.html`

```html
<select name="county">
    <option value="">縣市</option>
    <option value="TP">台北</option>
    <option value="台中">台中</option>
    <option>高雄</option>
</select>
```

- `name` -> 欄位名稱，傳送資料時欄位名稱。
- `value` -> 欄位數值，傳送資料時欄位數值。

***實際上發送的數值為value設定，option的內容單純顯示用。***

***option沒有value屬性時，內容即為數值。***

***option使用`selected`屬性可設定預設值。***

### 多選

- `name` -> 改用`[]`。
- `multiple` -> 多選型態。

`select_multiple.html`

```html
<div class="container">
    <h2>錯誤</h2>
    <form action="https://book.niceinfos.com/api/form/">
        <select name="county" multiple>
            <option value="">請選擇縣市</option>
            <option value="TP">台北</option>
            <option value="台中">台中</option>
            <option>高雄</option>
        </select>
        <button>送出</button>
    </form>
    <h2>正確</h2>
    <form action="https://book.niceinfos.com/api/form/">
        <select name="county[]" multiple>
            <option value="">請選擇縣市</option>
            <option value="TP">台北</option>
            <option value="台中">台中</option>
            <option>高雄</option>
        </select>
        <button>送出</button>
    </form>
</div>
```

## 檔案

```html
<input type="file" name="my-pic" />
```

- `type="file"` -> 檔案類型。
- `name` -> 欄位名稱，傳送資料時欄位名稱。

***顯示樣式為選擇檔案提示區塊，樣式調整受到限制。***

### 檔案傳送條件

- `enctype="multipart/form-data"`
- `method="POST"`

`file.html`

```html
<div class="container">
    <h1>FILE TAG</h1>
    <form action="https://book.niceinfos.com/api/form/" method="POST" enctype="multipart/form-data">
        <div>
            <!-- <label for="">選擇檔案</label> -->
            <input type="file" id="my-pic" name="my-pic">
        </div>
        <input type="hidden" name="inject" value="hello">
        <button>發送</button>
    </form>
</div>
```