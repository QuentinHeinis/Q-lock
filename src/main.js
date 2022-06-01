import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import './index.css'

import mitt from 'mitt';

// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.8.1/firebase-app.js";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyDYkOtrlm5rxxFu_7MRhYXE3UlxXh9i_Ns",
    authDomain: "sae203-cf3d4.firebaseapp.com",
    projectId: "sae203-cf3d4",
    storageBucket: "sae203-cf3d4.appspot.com",
    messagingSenderId: "915601005279",
    appId: "1:915601005279:web:6c51dc762fcd09a5c5276a"
};
// Initialize Firebase
const appFirebase = initializeApp(firebaseConfig);


const app = createApp(App)

export const emitter = mitt();
app.config.globalProperties.emitter = emitter;

app.use(router)

app.mount('#app')
