<template>
  <div>
    <HomeHeader />
    <SoftwaresList :causes="causes" :categories="categories" />
  </div>
</template>

<script>
import HomeHeader from '../../components/HomeHeader.vue'
import SoftwaresList from '../../components/SoftwaresList.vue'
import { DEFAULT_CAUSE } from '../../config'
import getCauses from '../../services/getCauses'
import getCategoriesAndSoftwares from '../../services/getCategoriesAndSoftwares'

export default {
  components: {
    HomeHeader,
    SoftwaresList
  },
  asyncData({ params }) {
    const cause = params.cause ? params.cause : DEFAULT_CAUSE
    return {
      causes: getCauses(),
      categories: getCategoriesAndSoftwares(cause)
    }
  }
}
</script>

<style lang="scss" scoped></style>
