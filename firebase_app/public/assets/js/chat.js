import { App } from './Firebase/App.js';
import { Database } from './Firebase/Database.js';
import { Auth } from './Firebase/Auth.js';
import { Chat } from './chat/Chat.js'

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
let auth = new Auth(app);

const options = {
    data() {
        return {
            user: {},
            to: '',
            users: {
                'kindping@gmail.com': 'OFDQEDtA6yTpYWVfRcYtx82poGz1',
                'kindpingwork@gmail.com': 'SZErUk4IebP3swxK59Wfg1MjmOR2'
            },
            message: '',
            messages: {}
        }
    },
    methods: {
        async doLogout() {
            await auth.signOut();
            location.href = 'member.html';
        },
        async doSend() {
            if (!this.message) {
                return;
            }

            database.insert(`chat/${this.to}`, { from: this.user.email, message: this.message, timer: this.currentTimer() });
            this.message = '';
        },
        currentTimer() {
            let d = new Date();
            let hh = d.getHours();
            let mm = d.getMinutes();

            if (hh < 10) {
                hh = '0' + hh
            }

            if (mm < 10) {
                mm = '0' + mm
            }

            return `${hh}:${mm}`
        }
    },
    mounted() {
        auth.onChange((user) => {
            this.user = user
            this.to = this.users[this.user.email];
            database.listen(`chat/${this.user.uid}`, (data) => {
                this.messages = data;
            });
        }, () => {
            location.href = 'member.html';
        });
    }
}

Vue.createApp(options).mount('#chat-app');