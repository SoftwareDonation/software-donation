<template>
  <base-container>
    <footer class="the-footer">
      <div>
        <TheLogo />
        <p>{{ $t('footer.love') }}</p>
      </div>
      <div>
        <TheNewsletter />
      </div>
    </footer>
  </base-container>
</template>

<script>
import BaseContainer from './BaseContainer'
import TheLogo from './TheLogo'
import TheNewsletter from './TheNewsletter'

export default {
  name: 'TheFooter',
  components: {
    BaseContainer,
    TheLogo,
    TheNewsletter
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
