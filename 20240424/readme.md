# 20240424

## 網頁組成範本

`web_base.html`

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>網頁組成範本</title>
</head>
<body>
    <div class="header">
        Header
    </div>
    <div class="main">
        Main
    </div>
    <div class="footer">
        Footer
    </div>
</body>
</html>
```

## 網站圖示

[產生器](https://www.favicon-generator.org/)

[免費圖庫 pixabay](https://pixabay.com/)

### 絕對路徑

```html
<link rel="apple-touch-icon" sizes="57x57" href="/20240424/favicon/apple-icon-57x57.png">
<link rel="apple-touch-icon" sizes="60x60" href="/20240424/favicon/apple-icon-60x60.png">
<link rel="apple-touch-icon" sizes="72x72" href="/20240424/favicon/apple-icon-72x72.png">
<link rel="apple-touch-icon" sizes="76x76" href="/20240424/favicon/apple-icon-76x76.png">
<link rel="apple-touch-icon" sizes="114x114" href="/20240424/favicon/apple-icon-114x114.png">
<link rel="apple-touch-icon" sizes="120x120" href="/20240424/favicon/apple-icon-120x120.png">
<link rel="apple-touch-icon" sizes="144x144" href="/20240424/favicon/apple-icon-144x144.png">
<link rel="apple-touch-icon" sizes="152x152" href="/20240424/favicon/apple-icon-152x152.png">
<link rel="apple-touch-icon" sizes="180x180" href="/20240424/favicon/apple-icon-180x180.png">
<link rel="icon" type="image/png" sizes="192x192" href="/20240424/favicon/android-icon-192x192.png">
<link rel="icon" type="image/png" sizes="32x32" href="/20240424/favicon/favicon-32x32.png">
<link rel="icon" type="image/png" sizes="96x96" href="/20240424/favicon/favicon-96x96.png">
<link rel="icon" type="image/png" sizes="16x16" href="/20240424/favicon/favicon-16x16.png">
<link rel="manifest" href="/20240424/favicon/manifest.json">
<meta name="msapplication-TileColor" content="#ffffff">
<meta name="msapplication-TileImage" content="/20240424/favicon/ms-icon-144x144.png">
<meta name="theme-color" content="#ffffff">
```

### 相對路徑

```html
<link rel="apple-touch-icon" sizes="57x57" href="./favicon/apple-icon-57x57.png">
<link rel="apple-touch-icon" sizes="60x60" href="./favicon/apple-icon-60x60.png">
<link rel="apple-touch-icon" sizes="72x72" href="./favicon/apple-icon-72x72.png">
<link rel="apple-touch-icon" sizes="76x76" href="./favicon/apple-icon-76x76.png">
<link rel="apple-touch-icon" sizes="114x114" href="./favicon/apple-icon-114x114.png">
<link rel="apple-touch-icon" sizes="120x120" href="./favicon/apple-icon-120x120.png">
<link rel="apple-touch-icon" sizes="144x144" href="./favicon/apple-icon-144x144.png">
<link rel="apple-touch-icon" sizes="152x152" href="./favicon/apple-icon-152x152.png">
<link rel="apple-touch-icon" sizes="180x180" href="./favicon/apple-icon-180x180.png">
<link rel="icon" type="image/png" sizes="192x192" href="./favicon/android-icon-192x192.png">
<link rel="icon" type="image/png" sizes="32x32" href="./favicon/favicon-32x32.png">
<link rel="icon" type="image/png" sizes="96x96" href="./favicon/favicon-96x96.png">
<link rel="icon" type="image/png" sizes="16x16" href="./favicon/favicon-16x16.png">
<link rel="manifest" href="./favicon/manifest.json">
<meta name="msapplication-TileColor" content="#ffffff">
<meta name="msapplication-TileImage" content="./favicon/ms-icon-144x144.png">
<meta name="theme-color" content="#ffffff">
```

## 自動格式化 html

`Crtl` + `Shift` + `p` > `format document`

### 存檔自動格式化

`Crtl` + `Shift` + `p` > `Open Workspce Settings (JSON)`

`.vscode/settings.json` 加入

```json
{
    "editor.formatOnSave": true
}
```

目前設定

```json
{
    "liveServer.settings.root": "/",
    "liveServer.settings.CustomBrowser": "chrome",
    "liveServer.settings.file": "index.html",
    "editor.formatOnSave": true
}
```