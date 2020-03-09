<template>
  <div class="donation-banner">
    <h2>{{ $t('donation_banner.title') }}</h2>
    <p>{{ $t('donation_banner.description') }}</p>
    <base-button :href="donateLink">{{
      $t('donation_banner.button')
    }}</base-button>
  </div>
</template>

<script>
import { DONATE_LINK } from '../config'
import BaseButton from './BaseButton.vue'

export default {
  name: 'DonationBanner',
  components: {
    BaseButton
  },
  data() {
    return {
      donateLink: DONATE_LINK
    }
  }
}
</script>
