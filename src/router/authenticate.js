// import { ref } from 'vue'
// import router from './index'

// const isAuthenticated = ref(false)

// export function useAuth() {
//     const login = () => {
//         isAuthenticated.value = true;
//         // router.push({name:'About'})
//     }

//     const logout = () => {
//         isAuthenticated.value = false;
//         // router.push({name:'About'})
//     }
//     return { isAuthenticated, login, logout }
// }

import { ref } from 'vue';


export const isAuthenticated = ref(false);


export const login = () => {
    isAuthenticated.value = true;
};


export const logout = () => {
    isAuthenticated.value = false;
};
