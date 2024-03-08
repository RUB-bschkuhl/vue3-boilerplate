import { createApp } from "vue";
import App from './App.vue'     //Our .vue startup file
import './static/global.css'    //Import css files as modules
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.min.js'


//Will mount the vue app inside a HTML element which id equals to "app" (div into templetes/index.html file)
createApp(App).mount('#app');