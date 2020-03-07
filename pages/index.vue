<template>
  <div class="container">
    <Logo />
    <pre>
    {{ softs }}
    </pre>
  </div>
</template>

<script>
import Logo from '../components/Logo.vue'
import getCauses from '../services/getCauses'
import getCategoriesAndSoftwares from '../services/getCategoriesAndSoftwares'

export default {
  components: {
    Logo
  },
  data() {
    return {
      causes: getCauses(),
      softs: getCategoriesAndSoftwares('corona')
    }
  }
}
</script>
