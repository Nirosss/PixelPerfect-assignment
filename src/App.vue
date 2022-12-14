<template>
 <fylo-header/>
  <router-view/>
</template>

<script>
import fyloHeader from './components/fylo-header.vue'
export default {
  name: 'app',
  data() {
    return {
    }
  },
  components: {
    fyloHeader,
  }
}
</script>