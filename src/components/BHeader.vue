<!-- <script setup>
// import { useAuth } from '../router/authenticate'
// const { isAutenticated } = useAuth()

// const logout = () => {
//   isAutenticated.value = false
// }
</script> -->

<template>
  <!-- Using Bootstrap's Header template (starter code) -->
  <!-- https://getbootstrap.com/docs/5.0/examples/headers/ -->
  <div class="container">
    <header class="d-flex justify-content-center py-3">
      <ul class="nav nav-pills">
        <li class="nav-item">
          <router-link to="/" class="nav-link" active-class="active" aria-current="page">Home (Week 5)</router-link>
        </li>
        <li class="nav-item">
          <router-link to="/about" class="nav-link" active-class="active">About</router-link>
        </li>
        <li class="nav-item">
          <router-link to="/addbook" class="nav-link" active-class="active">Add book</router-link>
        </li>
        <li class="nav-item">
          <router-link to="/GetBookCount" class="nav-link" active-class="active">Get Book Count</router-link>
        </li>
        <li class="nav-item">
          <router-link to="/WeatherCheck" class="nav-link" active-class="active">Get Weather</router-link>
        </li>
        <li class="nav-item">
          <router-link to="/CountBookAPI" class="nav-link" active-class="active">Count Book API</router-link>
        </li>
        <li class="nav-item">
          <router-link to="/getAllBookAPI" class="nav-link" active-class="active">Get all book API</router-link>
        </li>
        <li class="nav-item">
          <router-link to="/login" class="nav-link" active-class="active">Login</router-link>
        </li>
        <li class="nav-item">
          <router-link to="/Firelogin" class="nav-link" active-class="active">Firebasa Login</router-link>
        </li>
        <li class="nav-item">
          <router-link to="/FireRegister" class="nav-link" active-class="active">Firebasa Register</router-link>
        </li>
        <li class="nav-item">
          <button class="nav-link" @click="firebaseLogout">Firebasae Logout</button>
        </li>
        <li class="nav-item" v-if="isAuthenticated">
          <button class="nav-link" @click="handleLogout">Logout</button>
        </li>
      </ul>
    </header>
  </div>
</template>

<script setup>
import { isAuthenticated } from '@/router/authenticate';
// import { Alert } from 'bootstrap';
import { getAuth, signOut } from 'firebase/auth';
import { logout } from '../router/authenticate';
import router from '@/router';

// import { getAuth } from 'firebase/auth';
// import { isAuthenticated } from '../router/auth'
// // import { login } from '../router/login'
// import { logout } from '../router/auth';
// import router from '@/router';
// import { signOut } from "firebase/auth";

const handleLogout = () => {
  logout();
  alert('You have been logged out.');
  router.push({ name: 'Login' });
};

// import { useAuthentication } from '../router/authenticate'

// export default {
//   setup() {
//     const { isAuthenicated, login, logout } = useAuthentication();

//     return { isAuthenicated, login, logout };
//   }
// }
const auth = getAuth()
const firebaseLogout = () => {
  signOut(auth).then(() => {
    //Sign-out successful
    alert("Sign out successful")
    router.push({ name: 'Login' });
  }).catch((error) => {
    //An error happened
    console.log("logout error", error)
  });

}
</script>


<style scoped>
.b-example-divider {
  height: 3rem;
  background-color: rgba(0, 0, 0, 0.1);
  border: solid rgba(0, 0, 0, 0.15);
  border-width: 1px 0;
  box-shadow:
    inset 0 0.5em 1.5em rgba(0, 0, 0, 0.1),
    inset 0 0.125em 0.5em rgba(0, 0, 0, 0.15);
}

.form-control-dark {
  color: #fff;
  background-color: var(--bs-dark);
  border-color: var(--bs-gray);
}

.form-control-dark:focus {
  color: #fff;
  background-color: var(--bs-dark);
  border-color: #fff;
  box-shadow: 0 0 0 0.25rem rgba(255, 255, 255, 0.25);
}

.bi {
  vertical-align: -0.125em;
  fill: currentColor;
}

.text-small {
  font-size: 85%;
}

.dropdown-toggle {
  outline: 0;
}
</style>
