<template>
    <div class="center-container">
        <h1>Create account</h1>
        <p><input type="text" placeholder="Email" v-model="email" /></p>
        <p><input type="password" placeholder="Password" v-model="password" /></p>
        <p><button @click="signin">Sign in via Firebase</button></p>
    </div>
</template>

<script setup>
import { ref } from "vue";
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import { useRouter } from "vue-router";

const email = ref("");
const password = ref("");
const router = useRouter();
const auth = getAuth();

const adminEmail = "admin@gmail.com"

const signin = () => {
    signInWithEmailAndPassword(getAuth(), email.value, password.value)
        .then((data) => {
            if (data.user.email == adminEmail) {
                alert("Hi Admin")
                router.push("/Login");
            } else {
                alert("Login successfully")
                router.push("/");
            }
            console.log("Firebase Signin Successful!");
            // Redirect to the home page after successful sign-in
            console.log(auth.currentUser);  // To check the currently signed-in user
        })
        .catch((error) => {
            console.log(error.code);  // Log any errors that occur during sign-in
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
