<template>
  <div class="container">
    <Logo />
  </div>
</template>

<script>
import Logo from '../components/Logo.vue'
import getCauses from '../services/getCauses'

export default {
  components: {
    Logo
  },
  data() {
    return {
      causes: getCauses()
    }
  }
}
</script>
