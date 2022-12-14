<template>
  <section class="home-container">
    <div class="intro-container flex">
      <img src="../assets/images/illustration-intro.png" alt="" />
      <h3 class="intro-content title">All your files in one secure location, accessible anywhere.</h3>
      <p class="intro-content info">Fylo stores all your most important files in one secure location.
       Access them wherever you need, share and collaborate with
        friends family, and co-workers.</p>
        <button class="intro button">Get started</button>
        <info-cards/>
        <call-to  class="main-layout full"/>
    </div>
  </section>
</template>

<script>
import infoCards from '../components/fylo-info-cards.vue'
import callTo from '../components/fylo-call-to-action.vue'
  export default {
    name: 'home',
    components: {
        infoCards,
        callTo
    },
  }
</script>
