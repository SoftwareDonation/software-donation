<template>
  <header class="home-header">
    <base-container>
      <h1 class="home-header__title">{{ $t('program.hero.title') }}</h1>
      <p class="home-header__description">
        {{ $t('program.hero.description') }}
      </p>
      <base-button :href="donateLink" size="lg">{{
        $t('program.hero.button')
      }}</base-button>
    </base-container>
  </header>
</template>

<script>
import { DONATE_LINK } from '../config'
import BaseContainer from './BaseContainer'
import BaseButton from './BaseButton.vue'

export default {
  name: 'ProgramHeader',
  components: {
    BaseContainer,
    BaseButton
  },
  data() {
    return {
      donateLink: DONATE_LINK
    }
  }
}
</script>

<style lang="scss" scoped>
.home-header {
  background-color: #fff;
  text-align: center;
  height: 50vh;
  display: flex;
  align-items: center;
  justify-content: center;
  padding-bottom: $space-xl;

  &__title {
    font-size: $font-size-xxl;
    margin: 0 auto;
    font-weight: 900;
    max-width: 800px;

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
