<template>
  <div>
    <ProgramHeader />
    <DonationBanner />
  </div>
</template>

<script>
import ProgramHeader from '../components/HomeHeader.vue'
import DonationBanner from '../components/DonationBanner.vue'

export default {
  title: 'Program',
  components: {
    ProgramHeader,
    DonationBanner
  }
}
</script>
