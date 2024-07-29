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

### 自動上傳

```html
<div class="row mb-2">
    <div class="col">
        <div class="form-check">
            <input type="checkbox" class="form-check-input" id="todo-auto-upload" v-model="autoUpload">
            <label for="todo-auto-upload" class="form-check-label">自動上傳</label>
        </div>
    </div>
    <div class="col">
        <div class="text-end">
            <button class="btn btn-success me-2" @click.prevent="upload(false)">上傳數據</button>
            <button class="btn btn-danger" @click.prevent="download">下載數據</button>
        </div>
    </div>
</div>
```

```js
data() {
    return {
        newItem: '',
        database: [],
        uid: '',
        autoUpload: true
    }
},
methods: {
    save() {
        Storage.setData(this.uid, this.database);
        if (this.autoUpload) {
            this.upload(true);
        }
    },
    async upload(muted) {
        console.log(muted);
        console.log('upload data...');

        let uid = this.uid;
        let data = Storage.getData(uid);
        if (muted) {
            await API.write(uid, data);
            return;
        }

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
    },
}
```