<template>
  <header class="home-header">
    <base-container>
      <h1 class="home-header__title">{{ $t('home.hero.headline') }}</h1>
      <p class="home-header__description">{{ $t('home.hero.description') }}</p>
    </base-container>
  </header>
</template>

<script>
import BaseContainer from './BaseContainer'

export default {
  name: 'HomeHeader',
  components: {
    BaseContainer
  }
}
</script>

<style lang="scss" scoped>
.home-header {
  padding: $space-5xl 0;
  text-align: center;

  &__title {
    font-size: $font-size-xxl;
    margin: 0 auto;
  }

  &__description {
    font-size: $font-size-md;
    font-weight: 500;
    color: $color-grey-dark;
  }
}
</style>
