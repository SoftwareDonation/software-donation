<template>
  <div>
    <HomeHeader />
    <SoftwaresList :causes="causes" :categories="categories" />
    <DonationBanner />
  </div>
</template>

<script>
import HomeHeader from '../../components/HomeHeader.vue'
import SoftwaresList from '../../components/SoftwaresList.vue'
import DonationBanner from '../../components/DonationBanner.vue'
import causesAndCategories from '../../mixins/causesAndCategories'

export default {
  components: {
    HomeHeader,
    SoftwaresList,
    DonationBanner
  },
  mixins: [causesAndCategories]
}
</script>
