<template>
    <div class="navbar container">
    <a href="#" class="logo">MY WEEK</a>
    <div class="nav-link">
      <!-- <a href="/">HOME</a>
        <a href="/contact">CONTACT</a>
        <a href="/about">ABOUT</a>--> 
        <router-link to="/">HOME</router-link>
        <router-link to="/contact">CONTACT</router-link>
        <router-link to="/about">ABOUT</router-link>
        </div>
    </div>
    
 </template>
<script>


</script>
<style>
 .navbar{
        margin-top: -60px;
        height: 70px;
        background-color: rgb(164, 164, 183);
        display: flex;
        justify-content: space-between;
        align-items: center;
    }
 
    .container{
        padding: 0 10vw;
    }

    @media  screen and (max-width:1000px) {
        .container{
            padding: 0 6vw;
        }
    }
    @media  screen and (max-width:650px) {
        .container{
            padding: 0 3vw;
        }
    }
    .nav-link a {
        opacity: .9;
        font-size: .9em;
        margin-left: .75em;
    }
    .nav-link a:hover{
        opacity: 1;
      text-decoration: underline;
    }
    .navbar a{
        
        text-decoration: none;
    }
</style>