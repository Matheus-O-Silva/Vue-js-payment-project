import { createApp } from 'vue'
import App from './App.vue'

import VueSweetalert2 from 'vue-sweetalert2';
import 'sweetalert2/dist/sweetalert2.min.css';


import './registerServiceWorker'
import router from './router'
import store from './store'
import 'admin-lte/dist/css/adminlte.css'
import 'admin-lte/dist/js/adminlte.js'

const app = createApp(App)

app.use(VueSweetalert2)

app.use(store).use(router).mount('#app')