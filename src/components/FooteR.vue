<!-- Footer.vue -->

<template>
    <footer>
      <p>&copy; 2023 Your Website</p>
      <p>{{ message }}</p>
      <button @click="changeMessage">Change Message</button>
    </footer>
  </template>
  
  <script>
  export default {
    data() {
      return {
        message: 'Welcome to our website!',
      };
    },
    methods: {
      changeMessage() {
        this.message = 'Thank you for visiting!';
      },
    },
    created() {
      console.log('Footer component created');
    },
  };
  </script>
  
  <style scoped>
  footer {
    text-align: center;
    padding: 10px;
    position: fixed;
    bottom: 0;
    width: 100%;
    height: 40px;
    background-color: #A7C7E7;
  color: white;
  padding: 10px;
  height: 40px;
margin-top: -100px;
  }
  </style>
  