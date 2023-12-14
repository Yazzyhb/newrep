<template>
  <div id="app">
    <div id="login-container">
      <div id="login">
        <div id="description">
          <h1>{{ isLoginForm ? 'Login' : 'Sign Up' }}</h1>
          <p>By {{ isLoginForm ? 'logging in' : 'signing up' }}, you agree to the ridiculously long terms that you didn't bother to read.</p>
          <p>{{ isLoginForm ? 'Don\'t have an account?' : 'Already have an account?' }} <a href="#" @click="toggleForm">{{ isLoginForm ? 'Sign Up' : 'Login' }}</a></p>
         

        </div>
        <div id="form">
          <form @submit.prevent="isLoginForm ? doLogin() : doSignUp()">
            <label for="email">Email</label>
            <input type="text" id="email" v-model="email" placeholder="elon@musk.io" autocomplete="off">

            <label for="password">Password</label>&nbsp;
            <i class="fas" :class="[passwordFieldIcon]" @click="hidePassword = !hidePassword"></i>
            <input :type="passwordFieldType" id="password" v-model="password" placeholder="**********">

            <template v-if="!isLoginForm">
              <label for="confirmPassword">Confirm Password</label>
              <input type="password" id="confirmPassword" v-model="confirmPassword" placeholder="**********">
            </template>

            <button type="submit">{{ isLoginForm ? 'Log in' : 'Sign Up' }}</button>
          </form>
        </div>
      </div>
    </div>

    <!-- Buttons for Login and Sign Up -->
    
  </div>
</template>

<script setup>
import { computed, ref } from "vue";

const email = ref("");
const hidePassword = ref(true);
const password = ref("");
const confirmPassword = ref("");
const isLoginForm = ref(true);

const passwordFieldIcon = computed(() => hidePassword.value ? "fa-eye" : "fa-eye-slash");
const passwordFieldType = computed(() => hidePassword.value ? "password" : "text");

const doLogin = () => alert("Login not implemented yet :O");
const doSignUp = () => alert("Sign Up not implemented yet :O");

const toggleForm = () => {
  isLoginForm.value = !isLoginForm.value;
  // Clear form fields when switching between login and sign up
  email.value = '';
  password.value = '';
  confirmPassword.value = '';
};
</script>


<style>
* {
  box-sizing: border-box;
  font-family: Verdana, sans-serif;
}

html,
body {
  height: 100%;
  margin: 50px;
  padding: 20px;
  width: 100%;
}

div#app {
  width: 100%;
  height: 100%;
}

div#app div#login {
  align-items: center;
  background-color: #ffffff;
  display: flex;
  justify-content: center;
  width: 100%;
  height: 100%;
}

div#app div#login div#description {
  background-color: #8fafc5;
  width: 480px;
  padding: 35px;
  border-radius: 5px;

}

div#app div#login div#description h1,
div#app div#login div#description p {
  margin: 0;
}

div#app div#login div#description p {
  font-size: 0.9em;
  color: #000000;
  margin-top: 10px;
}

div#app div#login div#form {
  background-color: #34495e;
  border-radius: 5px;
  box-shadow: 0px 0px 30px 0px #666;
  color: #ecf0f1;
  width: 260px;
  padding: 35px;
}

div#app div#login div#form label,
div#app div#login div#form input {
  outline: none;
  width: 100%;
}

div#app div#login div#form label {
  color: #95a5a6;
  font-size: 0.8em;
}

div#app div#login div#form input {
  background-color: transparent;
  border: none;
  color: #ecf0f1;
  font-size: 1em;
  margin-bottom: 20px;
}

div#app div#login div#form ::placeholder {
  color: #ecf0f1;
  opacity: 1;
}


div#app div#login div#form button {
  background-color: #ffffff;
  cursor: pointer;
  border: none;
  padding: 10px;
  transition: background-color 0.2s ease-in-out;
  width: 100%;
}

div#app div#login div#form button:hover {
  background-color: #eeeeee;
}

@media screen and (max-width: 600px) {
  div#app div#login {
    align-items: unset;
    background-color: unset;
    display: unset;
    justify-content: unset;
  }

  div#app div#login div#description {
    margin: 0 auto;
    max-width: 350px;
    width: 100%;
  }

  div#app div#login div#form {
    border-radius: unset;
    box-shadow: unset;
    width: 100%;
  }

  div#app div#login div#form form {
    margin: 0 auto;
    max-width: 280px;
    width: 100%;
  }
}


</style>