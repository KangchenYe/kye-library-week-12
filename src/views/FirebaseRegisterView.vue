<template>
    <div class="center-container">
        <h1>Create an account</h1>
        <p><input type="text" placeholder="Email" v-model="email" /></p>
        <p><input type="password" placeholder="Password" v-model="password" /></p>
        <p><button @click="register">Save to Firebase</button></p>
    </div>
</template>

<script setup>
import { ref } from 'vue'
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth"
import { useRouter } from 'vue-router'
const email = ref("")
const password = ref("")
const router = useRouter()
const auth = getAuth()
const register = () => {
    createUserWithEmailAndPassword(auth, email.value, password.value)
        .then((data) => {
            console.log("Firebase Register Successful!");
            router.push("/FireLogin");
        })
        .catch((error) => {
            console.log(error.code);
        });
};
</script>

<style scoped>
.center-container {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    height: 80vh;
    /* Full height of the viewport */
    text-align: center;
}

h1 {
    margin-bottom: 30px;
    /* Increases the space below the heading */
}

input {
    margin: 15px 0;
    /* Adds space around each input field */
    padding: 10px;
    width: 300px;
}

button {
    margin: 20px 0;
    padding: 10px 20px;
    width: 200px;
}
</style>
