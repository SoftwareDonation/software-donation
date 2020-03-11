<template>
  <header class="home-header">
    <base-container>
      <h1 class="home-header__title">{{ $t('about.title') }}</h1>
    </base-container>
  </header>
</template>

<script>
import BaseContainer from './BaseContainer'

export default {
  name: 'AboutHeader',
  components: {
    BaseContainer
  }
}
</script>

<style lang="scss" scoped>
.home-header {
  background-color: #fff;
  text-align: center;
  padding-top: $space-4xl;
  min-height: 300px;
  display: flex;
  align-items: center;
  justify-content: center;

  &__title {
    font-size: $font-size-xxl;
    margin: 0 auto;
    font-weight: 900;

    @media screen and (max-width: $screen-lg) {
      font-size: $font-size-xl;
    }
  }

  &__description {
    font-size: $font-size-md;
    font-weight: 500;
    color: $color-grey-dark;
    max-width: 720px;
    margin: $space-md auto;
  }
}
</style>
