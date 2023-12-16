<template>
 <div id="app" class="app-container">
  <header :style="{ backgroundImage: `url('${headerBackground}')` }">
      <h1>{{ slogan }}</h1>
    </header>
    <section class="sidebar" >
     
  <ul class="nav-links">
        <li>
          <i class="bx bx-search search-btn"></i>
          <input type="text" placeholder="search..." />
          <span class="tooltip">Search</span>
        </li>
        <li>
          <router-link to="/">
            <i class='bx bx-list-plus' ></i>
            <span class="title">To Do List</span>
          </router-link>
          <span class="tooltip">To Do List</span>
        </li>
        <li>
          <router-link to="/contact">
            <i class='bx bx-shopping-bag'></i>
            <span class="title">Shopping List</span>
          </router-link>
          <span class="tooltip">Shopping List</span>
        </li>
        <li>
          <router-link to="/comp">
            <i class='bx bx-timer'></i>
            <span class="title">Pomodoro</span>
          </router-link>
          <span class="tooltip">Pomodoro</span>
        </li>
        <li>
        <router-link to="/prinT">
          <i class='bx bx-printer'></i>
            <span class="title">Printables</span>
          </router-link>
          <span class="tooltip">Printables</span>
        </li>
        <li>
          <router-link to="/about">
            <i class='bx bx-log-in'></i>
            <span class="title">Log In</span>
          </router-link>
          <span class="tooltip">Log In</span>
        </li>
        
      </ul>


      <div class="theme-wrapper">
      <i class="bx bxs-moon theme-icon"></i>
      <p>Dark Theme</p>
      <div class="theme-btn">
        <span class="theme-ball"></span>
      </div>
    </div>
  </section>



    <div class="container main"><RouterView></RouterView></div>
    <FooteR></FooteR>

 </div>
 

 
</template>

<script>


export default {
    data() {
        return {
            sidebarExpanded: false,
            isDarkMode: false,
            isSearchOpen: false,
            slogan: 'Achieve More, Stress Less!',

        };
    },
    


  mounted() {
    const btn_theme = document.querySelector(".theme-btn");
    const theme_ball = document.querySelector(".theme-ball");

    const localData = localStorage.getItem("theme");

    if (localData == null) {
      localStorage.setItem("theme", "light");
    }

    if (localData == "dark") {
      document.body.classList.add("dark-mode");
      theme_ball.classList.add("dark");
    } else if (localData == "light") {
      document.body.classList.remove("dark-mode");
      theme_ball.classList.remove("dark");
    }

    btn_theme.addEventListener("click", function () {
      document.body.classList.toggle("dark-mode");
      theme_ball.classList.toggle("dark");
      if (document.body.classList.contains("dark-mode")) {
        localStorage.setItem("theme", "dark");
      } else {
        localStorage.setItem("theme", "light");
      }
    });
  }}

</script>


<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
@import url("https://fonts.googleapis.com/css2?family=Poppins:wght@200;300;400;500;600;700&display=swap");

* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  font-family: "Poppins", sans-serif;
  --color-hover: rgb(76, 79, 96);
  --transition: all 0.2s ease;
}

:root {
  --color-white: #fff;
  --color-black: #000;
  --color-bg: #e2e2e2;
}
header {
  background-color: #A7C7E7;
  
 
  color: white;
  padding: 10px;
  height: 50px;
  text-align: center;
margin-top: -60px;
  h1 {
    margin: 0;
    font-size: 24px;
  }

  p {
    margin: 5px 0;
    font-size: 16px;
  }
}
.dark-mode {
  --color-white: #000;
  --color-black: #fff;
  --color-bg: #0f044e;
}


header {
  background-color: #A7C7E7;
  
 
  color: white;
  padding: 10px;
  height: 50px;
  text-align: center;
margin-top: -60px;
  h1 {
    margin: 0;
    font-size: 24px;
  }

  p {
    margin: 5px 0;
    font-size: 16px;
  }
}


.sidebar {
  flex: 0 0 auto;
  position: fixed;
  top: 0;

  left: 0;
  z-index: 100;
  width: 70px;
  height: 100%;
  background: var(--color-white);
  padding: 8px 16px;
  transition: var(--transition);
}

.container.main {
  flex: 1;
  padding: 20px;
}

.nav-header {
  height: 60px;
  display: flex;
  align-items: center;
  position: relative;
}

.nav-header .logo {
  color: var(--color-black);
  font-size: 23px;
  font-weight: 600;
  opacity: 0;
  transition: var(--transition);
}

.sidebar.expand .nav-header .logo {
  opacity: 1;
  transition: var(--transition);
}

.nav-header .btn-menu {
  position: absolute;
  color: var(--color-black);
  top: 50%;
  right: 0;
  transform: translateY(-50%);
  font-size: 23px;
  cursor: pointer;
  margin-right: 10px;
}

.sidebar.expand .nav-header .btn-menu {
  margin-right: 0;
}

.nav-links {
  margin-top: 20px;
  height: 100%;
}

.nav-links li {
  position: relative;
  margin: 8px 0;
  list-style: none;
}

.nav-links i {
  color: var(--color-black);
  height: 50px;
  min-width: 50px;
  font-size: 23px;
  text-align: center;
  line-height: 50px;
}

.nav-links input {
  font-size: 14px;
  font-weight: 400;
  color: var(--color-black);
  outline: none;
  height: 40px;
  width: 50%;
  border: none;
  border-radius: 12px;
  background: var(--color-bg);
  padding: 0;
}



.nav-links li a {
  display: flex;
  height: 100%;
  width: 100%;
  border-radius: 12px;
  align-items: center;
  text-decoration: none;
  background: var(--color-white);
}

.nav-links li:hover a {
  background: var(--color-hover);
}

.nav-links li:hover i {
  color: var(--color-white);
}

.nav-links li a .title {
  color: var(--color-black);
  font-size: 15px;
  font-weight: 400;
  white-space: nowrap;
  display: none;
  transition: var(--transition);
}



.nav-links li:hover a .title {
  color: var(--color-white);
}

.nav-links li .tooltip {
  position: absolute;
  top: -20px;
  left: calc(100% + 15px);
  z-index: 3;
  background: var(--color-white);
  box-shadow: 0 5px 10px rgba(0, 0, 0, 0.3);
  padding: 6px 14px;
  color: var(--color-black);
  font-size: 15px;
  white-space: nowrap;
  border-radius: 3px;
  opacity: 0;
  pointer-events: none;
  transition: 0s;
}

.sidebar li:hover .tooltip {
  opacity: 1;
  pointer-events: auto;
  transition: var(--transition);
  top: 50%;
  transform: translateY(-50%);
}



.nav-links .search-btn {
  position: absolute;
  top: 50%;
  left: 0;
  transform: translateY(-25px);
  font-size: 23px;
  color: var(--color-black);
  border-radius: 12px;
  background: var(--color-white);
  transition: var(--transition);
}

.sidebar.expand .nav-links .search-btn {
  background: transparent;
  transition: var(--transition);
}

.sidebar.expand .nav-links li:hover .search-btn {
  color: var(--color-black);
}

.nav-links .search-btn:hover {
  background: var(--color-hover);
}


.theme-wrapper {
  position: fixed;
  bottom: 0;
  display: flex;
  justify-content: space-between;
  height: 70px;
  width: 300px;
  left: 0;
  padding: 8px 16px;
}

.theme-wrapper .theme-icon {
  font-size: 20px;
  color: var(--color-black);
  display: none;
  transition: var(--transition);
}
.sidebar.expand .theme-wrapper .theme-icon {
  display: block;
}

.theme-wrapper p {
  font-size: 16px;
  color: var(--color-black);
  
  font-weight: 400;
  display: none;
  transition: var(--transition);
}

.sidebar.expand .theme-wrapper p {
  display: block;
}

.theme-wrapper .theme-btn {
  width: 40px;
  height: 20px;
  background: var(--color-bg);
  border-radius: 30px;
  position: relative;
  cursor: pointer;
}

.theme-wrapper .theme-btn .theme-ball {
  position: absolute;
  width: 15px;
  height: 15px;
  background: var(--color-black);
  border-radius: 50%;
  top: 2px;
  left: 3px;
  transition: var(--transition);
}

.theme-wrapper .theme-btn .theme-ball.dark {
  left: 20px;
}

.dark-mode .app-container {
  background: var(--color-bg);
  
}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: black; /* Set the default text color */
  margin-top: 60px;
}

.container.main {
  flex: 1 ;
  padding: 20px;
  transition: var(--transition);
 
}

body {
  margin: 0;
  padding: 0;

}
</style>
