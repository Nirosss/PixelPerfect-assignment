<template>
  <div class="main-layout">
    <fylo-header class="main-layout full"/>
    <router-view />
    <fylo-footer class="main-layout full"/>
  </div>
</template>

<script>
  import fyloHeader from './components/fylo-header.vue'
  import fyloFooter from './components/flyo-footer.vue'
  export default {
    name: 'app',
    data() {
      return {}
    },
    components: {
      fyloHeader,
      fyloFooter
    },
  }
</script>
