import { createApp } from 'vue'
import App from './App.vue'


import 'bootstrap/dist/css/bootstrap.css';
import router from './routers';


createApp(App)
.use(router)
.mount('#app')
