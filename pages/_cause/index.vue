<template>
  <div>
    <HomeHeader />
    <SoftwaresList :causes="causes" :categories="categories" />
  </div>
</template>

<script>
import HomeHeader from '../../components/HomeHeader.vue'
import SoftwaresList from '../../components/SoftwaresList.vue'
import causesAndCategories from '../../mixins/causesAndCategories'

export default {
  components: {
    HomeHeader,
    SoftwaresList
  },
  mixins: [causesAndCategories]
}
</script>
