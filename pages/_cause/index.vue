<template>
  <div>
    <HomeHeader />
    <SoftwaresList :causes="causes" :categories="categories" />
    <DonationBanner />
  </div>
</template>

<script>
import { MAIN_TITLE } from '../../config'
import HomeHeader from '../../components/HomeHeader.vue'
import SoftwaresList from '../../components/SoftwaresList.vue'
import DonationBanner from '../../components/DonationBanner.vue'
import causesAndCategories from '../../mixins/causesAndCategories'

export default {
  title: 'Cause',
  components: {
    HomeHeader,
    SoftwaresList,
    DonationBanner
  },
  mixins: [causesAndCategories],
  head() {
    const description = `${this.$t('cause.meta_description')} ${
      this.selectedCauseName
    }`
    return {
      title: `${description} – ${MAIN_TITLE}`,
      meta: [
        {
          hid: 'description',
          name: 'description',
          content: description
        }
      ]
    }
  },
  scrollToTop: false
}
</script>
