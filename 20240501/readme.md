# 20240501

## 表單

`form.html`

```html
    <form action="" method="GET">
        <div>
            <label for="login-account">帳號</label>
            <input type="text" name="account" value="" placeholder="輸入帳號" id="login-account" />
        </div>
        <div>
            <input type="text" name="name" value="" placeholder="輸入名稱" />
        </div>
        <div>
            <input type="password" name="passowrd" value="" placeholder="輸入密碼" />
        </div>
        <div>
            <button type="submit">發送</button>
        </div>
        <div>
            <button type="button" onclick="sayHi()">我不會發送</button>
        </div>
    </form>

<script>
    const sayHi = () => {
        alert('Hi, 我不會發送，但是我會打招呼!');
    }
</script>
```