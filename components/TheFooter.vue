<template>
  <base-container>
    <footer class="the-footer">
      <p>{{ $t('footer.love') }}</p>
    </footer>
  </base-container>
</template>

<script>
import BaseContainer from './BaseContainer'

export default {
  name: 'TheFooter',
  components: {
    BaseContainer
  }
}
</script>

<style lang="scss" scoped>
.the-footer {
  padding: $space-lg 0;
  border-top: 2px solid $color-grey;
  color: $color-grey-dark;
  font-weight: 500;
}
</style>
