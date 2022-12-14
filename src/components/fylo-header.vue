<template>
  <div class="header-container">
    <div class="main-header flex space-between align-center">
      <div class="logo"><img src="../assets/images/logo.svg" alt="" /></div>
      <nav class="main-nav flex space-between">
        <router-link class="nav-link" to="/">Features</router-link> 
        <router-link class="nav-link" to="/about">Team</router-link>
        <router-link class="nav-link last" to="/about">Sign In</router-link>
      </nav>
      <button type="button" class="btn-menu" onclick="toggleMenu()">☰</button>
    </div>
  </div>
</template>

<script>
  export default {
    data() {
      return {}
    },
  }
</script>
