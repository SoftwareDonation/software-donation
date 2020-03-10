<template>
  <div>
    <ProgramHeader />
    <DonationBanner />
  </div>
</template>

<script>
import ProgramHeader from '../components/ProgramHeader.vue'
import DonationBanner from '../components/DonationBanner.vue'

export default {
  title: 'Program',
  components: {
    ProgramHeader,
    DonationBanner
  }
}
</script>
