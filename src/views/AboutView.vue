<template>
 
    <div class="login-container">
      <div class="login">
        <div class="description">
          <h1>{{ isLoginForm ? 'Login' : 'Sign Up' }}</h1>
          <p>By {{ isLoginForm ? 'logging in' : 'signing up' }}, you agree to the ridiculously long terms that you didn't bother to read.</p>
          <p class="sig">{{ isLoginForm ? 'Don\'t have an account?' : 'Already have an account?' }} <a href="#" @click="toggleForm">{{ isLoginForm ? 'Sign Up' : 'Login' }}</a></p>
         

        </div>
        <div class="form">
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

    
</template>

 <script setup>
import { computed, ref } from "vue";
import { useRouter } from "vue-router"; // Import Vue Router

const router = useRouter(); // Create a router instance


const email = ref("");
const hidePassword = ref(true);
const password = ref("");
const confirmPassword = ref("");
const isLoginForm = ref(true);

const passwordFieldIcon = computed(() => hidePassword.value ? "fa-eye" : "fa-eye-slash");
const passwordFieldType = computed(() => hidePassword.value ? "password" : "text");

const doLogin = () => {
  alert("Login not implemented yet :O");
  router.push('/');
}
const doSignUp = () =>{

alert("Sign Up not implemented yet :O");
router.push('/');}

const toggleForm = () => {
  isLoginForm.value = !isLoginForm.value;
  email.value = '';
  password.value = '';
  confirmPassword.value = '';
};

</script>


<style scss>


.login-container {
  height: 100%;
  margin: 0;
  display: flex;
  align-items: center;
  justify-content: center;
}
.login {
  align-items: center;
  background-color:#8fafc5;
  display: flex;
  justify-content: center;
  width: 100%;

}

.login .description {
  background-color: #8fafc5;
  width: 480px;
  padding: 100px;
  border-radius: 10px;

}

.login .description h1,
.login .description p {
  margin: 0;
 
}

.login .description p {
  font-size: 0.9em;
  color: #000000;
  margin-top: 10px;
}

.login .form {
 background-color: #34495e;
  border-radius: 8px;
  box-shadow: 0px 0px 30px 0px #6476af;
  color: #ecf0f1;
  width: 400px;
  padding: 25px;
height: 300px;
  text-align: center; 

 }
.login .form label,
.login .form input {
  outline: none;
  width: 100%;
}

.login .form label {
  color: #95a5a6;
  font-size: 0.8em;
 
}

.login .form input {
  background-color: transparent;
  border: none;
  color: #ecf0f1;
  font-size: 1em;
  margin-bottom: 20px;
}

.login .form ::placeholder {
  color: #ecf0f1;
  opacity: 1;
}


.login .form button {
  background-color: #ffffff;
  cursor: pointer;
  border: none;
  padding: 10px;
  transition: background-color 0.2s ease-in-out;
  width: 100%;
}

.login .form button:hover {
  background-color:  #8fafc5;
}

@media screen and (max-width: 600px) {
 .login {
    align-items: unset;
    background-color: unset;
    display: unset;
    justify-content: unset;
  }

 .login .description {
    margin: 0 auto;
    max-width: 350px;
    width: 100%;
  }

 .login .form {
    border-radius: 8px;
    box-shadow: unset;
    width: 100%;
  }

  .login .form form {
    margin: 0 auto;
    max-width: 280px;
    width: 100%;
  }
}


 

</style>