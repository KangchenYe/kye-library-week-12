import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import AboutView from '../views/AboutView.vue'
import LoginView from '../views/LoginView.vue'
// import { useAuth } from './authenticate'
// const { isAuthenticated } = useAuth() // Corrected the typo here
import { isAuthenticated } from '../router/authenticate'
import FirebaseSigninView from '@/views/FirebaseSigninView.vue'
import FirebaseRegisterView from '@/views/FirebaseRegisterView.vue'
import AddBookView from '@/views/AddBookView.vue'
import GetBookCountView from '../views/GetBookCountView.vue'
import WeatherView from '../views/WeatherView.vue'
import CountBookAPI from '../views/CountBookAPI.vue';
import GetAllBookAPI from '@/views/GetAllBookAPI.vue'


const routes = [
    {
        path: '/CountBookAPI',
        name: 'CountBookAPI',
        component: CountBookAPI
    },
    {
        path: '/WeatherCheck',
        name: 'WeatherCheck',
        component: WeatherView,
    },
    {
        path: '/GetBookCount',
        name: 'GetBookCount',
        component: GetBookCountView
    },
    {
        path: '/',
        name: 'Home',
        component: HomeView
    },
    {
        path: '/about',
        name: 'About',
        component: AboutView
    },
    {
        path: '/login',
        name: 'Login',
        component: LoginView
    },
    {
        path: '/FireLogin',
        name: 'FireLogin',
        component: FirebaseSigninView
    },
    {
        path: '/FireRegister',
        name: 'FireRegister',
        component: FirebaseRegisterView
    },
    {
        path: '/addbook',
        name: 'Addbook',
        component: AddBookView
    },
    {
        path: '/getAllBookAPI',  // Add route for GetAllBookAPI
        name: 'GetAllBookAPI',
        component: GetAllBookAPI
    }
]

const router = createRouter({
    history: createWebHistory('Kangchen_library'),
    routes: [
        {
            path: '/CountBookAPI',
            name: 'CountBookAPI',
            component: CountBookAPI
        },
        {
            path: '/WeatherCheck',
            name: 'WeatherCheck',
            component: WeatherView,
        },
        {
            path: '/GetBookCount',
            name: 'GetBookCount',
            component: GetBookCountView
        },
        {
            path: '/',
            name: 'Home',
            component: HomeView
        },
        {
            path: '/about',
            name: 'About',
            component: AboutView
        },
        {
            path: '/login',
            name: 'Login',
            component: LoginView
        },
        {
            path: '/FireLogin',
            name: 'FireLogin',
            component: FirebaseSigninView
        },
        {
            path: '/FireRegister',
            name: 'FireRegister',
            component: FirebaseRegisterView
        },
        {
            path: '/addbook',
            name: 'Addbook',
            component: AddBookView
        },
        {
            path: '/getAllBookAPI',  // Add route for GetAllBookAPI
            name: 'GetAllBookAPI',
            component: GetAllBookAPI
        }

    ]
})

router.beforeEach((to, from, next) => {
    // Perform logic before every route change
    if (to.name == 'About') {
        if (isAuthenticated.value == true) {
            // console.log("indexjs-login success", isAuthenticated.value)
            next();
        }
        else {
            // console.log("indexjs-need login", isAuthenticated.value)
            next({ name: 'Login' });
        }
    }
    else {
        next();
    }
}
);

export default router