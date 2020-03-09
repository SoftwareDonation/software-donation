<template>
  <div class="home">
    <header class="home__hero">
      <h1>{{ $t('home.hero.headline') }}</h1>
      <p>{{ $t('home.hero.description') }}</p>
    </header>
    <section class="home__causes">
      <h2>{{ $t('home.causes.call_to_action_sentence') }}</h2>
      <button v-for="(cause, index) in causes" :key="index">
        {{ cause.name }}
      </button>
    </section>
    <section class="home__softwares">
      <div v-for="(category, indexCategory) in categories" :key="indexCategory">
        <h3>{{ category.name }}</h3>
        <div class="home__softwares-list">
          <SoftwareItem
            v-for="(software, indexSoftware) in category.softwares"
            :id="software.id"
            :key="indexSoftware"
            :name="software.name"
            :description="software.description"
            :eligibility="software.eligibility"
            :url="software.url"
          />
        </div>
      </div>
    </section>
  </div>
</template>

<script>
import getCauses from '../services/getCauses'
import getCategoriesAndSoftwares from '../services/getCategoriesAndSoftwares'
import { DEFAULT_CAUSE } from '../config'
import SoftwareItem from '../components/SoftwareItem.vue'

export default {
  components: {
    SoftwareItem
  },
  data() {
    return {
      causes: getCauses(),
      categories: getCategoriesAndSoftwares(DEFAULT_CAUSE)
    }
  }
}
</script>

<style lang="scss" scoped></style>
