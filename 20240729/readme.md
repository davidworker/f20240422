# 20240729

## Homework

實作上傳與下載數據

- API.js

### 上傳實作

```html
<div class="text-end mb-2">
    <button class="btn btn-success me-2" @click.prevent="upload">上傳數據</button>
    <button class="btn btn-danger">下載數據</button>
</div>
```

```js
async upload() {
    console.log('upload data...');

    let uid = this.uid;
    let data = Storage.getData(uid);
    Swal.fire({
        title: "數據上傳中",
        html: "請勿關閉或重新整理視窗",
        timer: 2000,
        timerProgressBar: true,
        didOpen: () => {
            Swal.showLoading();
        },
    });


    let response = await API.write(uid, data);
    setTimeout(() => {
        if (response.code == 200) {
            Swal.fire({
                title: '上傳成功',
                html: '數據已傳送至雲端',
                icon: 'success'
            })
        } else {
            Swal.fire({
                title: '上傳失敗',
                html: '數據上傳失敗，請稍後在試',
                icon: 'error'
            })
        }

    }, 1000)
}
```

### 下載實作

```html
<div class="text-end mb-2">
    <button class="btn btn-success me-2" @click.prevent="upload">上傳數據</button>
    <button class="btn btn-danger" @click.prevent="download">下載數據</button>
</div>
```

```js
async download() {
    console.log('download data...');

    let uid = this.uid;

    let result = await Swal.fire({
        title: '下載確認?',
        html: '現有數據將被覆蓋',
        icon: 'question',
        showCancelButton: true,
        cancelButtonText: '等等',
        confirmButtonText: '確定'
    })

    if (!result.isConfirmed) {
        return;
    }

    let response = await API.read(uid);
    Storage.setData(uid, response.data);
    Swal.fire({
        title: '下載成功',
        html: '數據已從雲端下載',
        icon: 'success'
    })
    this.load();
}
```