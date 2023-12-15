

<template>
  <footer>
    <div class="footer-content">
      </div>
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
  height: 0px;
  text-align: center;
  bottom: 0;
  background-color: #343232;
  color: white;
  display: flex;
}

.footer-content {
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;
  position: fixed;
}


</style> 
