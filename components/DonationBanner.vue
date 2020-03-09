<template>
  <base-container>
    <div class="donation-banner">
      <div>
        <h2 class="donation-banner__title">
          {{ $t('donation_banner.title') }}
        </h2>
        <p class="donation-banner__description">
          {{ $t('donation_banner.description') }}
        </p>
      </div>
      <base-button :href="donateLink">{{
        $t('donation_banner.button')
      }}</base-button>
    </div>
  </base-container>
</template>

<script>
import { DONATE_LINK } from '../config'
import BaseButton from './BaseButton.vue'
import BaseContainer from './BaseContainer.vue'

export default {
  name: 'DonationBanner',
  components: {
    BaseButton,
    BaseContainer
  },
  data() {
    return {
      donateLink: DONATE_LINK
    }
  }
}
</script>

<style lang="scss" scoped>
.donation-banner {
  background-color: $color-primary-darkest;
  color: #fff;
  box-shadow: $shadow-elevation-3;
  margin: $space-xxxl 0;
  padding: $space-xl;
  border-radius: $border-radius-card;
  display: flex;
  justify-content: space-between;
  align-items: center;

  &__title {
    margin-top: 0;
    font-size: $font-size-xl;
  }

  &__description {
    margin-bottom: 0;
    color: $color-accent-lightest;
  }
}
</style>
