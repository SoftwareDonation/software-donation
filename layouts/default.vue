<template>
  <div>
    <TheNavbar />
    <nuxt />
    <TheFooter />
  </div>
</template>

<script>
import TheNavbar from '../components/TheNavbar'
import TheFooter from '../components/TheFooter'

export default {
  name: 'Default',
  components: {
    TheNavbar,
    TheFooter
  }
}
</script>

<style lang="scss">
body {
  background-color: $color-grey-lightest;
}
</style>
