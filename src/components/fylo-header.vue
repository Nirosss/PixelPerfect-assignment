<template>
  <div class="header-container">
    <div class="main-header flex space-between align-center">
      <div class="logo"><img src="../assets/images/logo.svg" alt="" /></div>
      <nav class="main-nav flex space-between" :class="{ open : menuOpen }">
        <router-link class="nav-link" to="/">Features</router-link>
        <router-link class="nav-link" to="/about">Team</router-link>
        <router-link class="nav-link last" to="/about">Sign In</router-link>
      </nav>
      <button type="button" class="btn-menu" @click="toggleMenu" v-click-outside="closeMenu">☰</button>
    </div>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        menuOpen: true,
      }
    },
    methods: {
      toggleMenu() {
        this.menuOpen = !this.menuOpen
      },
      closeMenu(){
        this.menuOpen = false
      }
    },
  }
</script>
