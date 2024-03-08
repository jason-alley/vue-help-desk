import { createApp } from 'vue'
import { createRouter, createWebHistory } from 'vue-router'
import './style.css'
import Home from './views/Home.vue'
import Dashboard from './views/Dashboard.vue'
import App from './App.vue'

const router = createRouter({
    history: createWebHistory(),
    routes: [
        {
            path: '/',
            component: Home
        },
        {
            path: '/dashboard',
            component: Dashboard
        }
    ]
})

 
const app = createApp(App)
app.use(router)
app.mount('#app')
