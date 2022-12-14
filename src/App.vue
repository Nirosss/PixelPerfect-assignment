<template>
  <div class="main-layout">
    <fylo-header class="main-layout full"/>
    <router-view />
  </div>
</template>

<script>
  import fyloHeader from './components/fylo-header.vue'
  export default {
    name: 'app',
    data() {
      return {}
    },
    components: {
      fyloHeader,
    },
  }
</script>
