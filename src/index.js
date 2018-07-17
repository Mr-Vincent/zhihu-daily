console.log('hello');

import Vue from 'vue';

import App from './app.vue'
import './asserts/styles/style.css';

const root = document.createElement("div");

document.body.appendChild(root);

new Vue({
    render:h => {
        return h(App);
    }
}).$mount(root);