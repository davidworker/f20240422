import { Storage } from "./Storage.js";
import { API } from "./API.js";
import { App } from '../Firebase/App.js';
import { Database } from '../Firebase/Database.js';

let config = {
    apiKey: "AIzaSyD7HJGuVqoFAsPA_lmDsHgmfeWtofgxj70",
    authDomain: "f20240422.firebaseapp.com",
    databaseURL: "https://f20240422-default-rtdb.firebaseio.com",
    projectId: "f20240422",
    storageBucket: "f20240422.appspot.com",
    messagingSenderId: "988898477453",
    appId: "1:988898477453:web:d224eedbb30c09eaa0a9c4"
};

let app = await App.init(config);
let database = new Database(app);

const options = {
    data() {
        return {
            newItem: '',
            database: [],
            uid: '',
        }
    },
    methods: {
        add() {
            console.log('add');
            let id = Math.floor(Math.random() * 10000)
            this.database.push({
                id: id,
                name: this.newItem,
                checked: false
            })
            this.newItem = '';
            this.$refs.new_item.focus()
            this.save();
        },
        async initUid() {
            while (!this.uid) {
                let result = await Swal.fire({
                    title: '輸入 UID',
                    input: 'text'
                })

                if (result.value) {
                    this.uid = result.value;
                }
            }

            Storage.setUid(this.uid);
            this.load();
        },
        load() {
            database.listen(this.uid, (data, snapshot) => {
                console.log('from listen callback.');
                this.database = data;
            })
            console.log(this.uid);

            // this.database = Storage.getData(this.uid);
        },
        save() {
            database.write(this.uid, this.database)
            // Storage.setData(this.uid, this.database);
            // if (this.autoUpload) {
            //     this.upload(true);
            // }
        },
        setChecked(item) {
            // Call by reference.
            console.log('reference!!!')
            item.checked = !item.checked;
            this.save();
        },
        setCheckedIndex(index) {
            console.log('index!!!!');
            this.database[index].checked = !this.database[index].checked;
            this.save();
        },
    },
    mounted() {
        console.log('is mounted.');
        this.uid = Storage.getUid();
        if (!this.uid) {
            this.initUid();
        } else {
            this.load();
        }
    }
};

Vue.createApp(options).mount('#todo-app');