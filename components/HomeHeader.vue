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
  background-color: #fff;
  text-align: center;
  min-height: 650px;
  height: 70vh;
  display: flex;
  align-items: center;
  justify-content: center;
  background-image: url('/images/background.svg');
  background-size: cover;
  background-repeat: no-repeat;
  background-position-y: -5vw;
  margin-bottom: -100px;

  @media screen and (max-width: $screen-md) {
    margin-bottom: 0;
    height: auto;
    min-height: 400px;
  }

  &__title {
    font-size: $font-size-xxl;
    margin: 0 auto;
    font-weight: 900;
    max-width: 800px;

    @media screen and (max-width: $screen-lg) {
      padding-top: $space-md;
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
