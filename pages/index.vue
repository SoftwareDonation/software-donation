<template>
  <div>
    <HomeHeader />
    <SoftwaresList :causes="causes" :categories="categories" />
    <SupportersBanner :title="$t('home.sponsor')" />
    <DonationBanner />
  </div>
</template>

<script>
import HomeHeader from '../components/HomeHeader.vue'
import SoftwaresList from '../components/SoftwaresList.vue'
import DonationBanner from '../components/DonationBanner.vue'
import SupportersBanner from '../components/SupportersBanner.vue'
import causesAndCategories from '../mixins/causesAndCategories'

export default {
  title: 'Home',
  components: {
    HomeHeader,
    SoftwaresList,
    DonationBanner,
    SupportersBanner
  },
  mixins: [causesAndCategories]
}
</script>
