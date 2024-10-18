// import './assets/main.css'
// import '@/assets/style.css'
// import 'bootstrap/dist/css/bootstrap.min.css'

// import { createApp } from 'vue'
// import App from './App.vue'

// import PrimeVue from 'primevue/config'
// import Aura from '@primevue/themes/aura'
// // import DataTable from 'primevue/datatable'
// // import Column from 'primevue/Column'

// const app = createApp(App)
// app.use(PrimeVue, { theme: { preset: Aura } })

// // app.component('DataTable', DataTable)
// // app.component('Column', Column)

// app.mount('#app')
import 'bootstrap/dist/css/bootstrap.min.css'

import { createApp } from 'vue'
import App from './App.vue'
import router from './router'

import PrimeVue from 'primevue/config'
import Aura from '@primevue/themes/aura'

// // Import the functions you need from the SDKs you need
// import { initializeApp } from "firebase/app";
// // TODO: Add SDKs for Firebase products that you want to use
// // https://firebase.google.com/docs/web/setup#available-libraries

// // Your web app's Firebase configuration
// const firebaseConfig = {
//     apiKey: "AIzaSyAiIcw2Fcdk7p5Rje3QkabY88778Ejg6xs",
//     authDomain: "week7-kangchen.firebaseapp.com",
//     projectId: "week7-kangchen",
//     storageBucket: "week7-kangchen.appspot.com",
//     messagingSenderId: "761985335471",
//     appId: "1:761985335471:web:3bb8bf4b1f9854e856145a"
// };

// // Initialize Firebase
// initializeApp(firebaseConfig);


const app = createApp(App)
app.use(PrimeVue, { theme: { preset: Aura } })
app.use(router)

app.mount('#app')
