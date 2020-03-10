<template>
  <div class="about">
    <AboutHeader />
    <base-container>
      <section class="about__text">{{ $t('about.text') }}</section>
    </base-container>
  </div>
</template>

<script>
import AboutHeader from '../components/AboutHeader.vue'
import BaseContainer from '../components/BaseContainer.vue'

export default {
  title: 'About',
  components: {
    AboutHeader,
    BaseContainer
  }
}
</script>

<style lang="scss" scoped>
.about {
  background: #fff;
  margin-bottom: -2px;
  position: relative;

  &__text {
    padding: $space-xxxl 0;
    font-size: $font-size-md;
  }
}
</style>
