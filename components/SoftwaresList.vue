<template>
  <div>
    <section class="home__causes">
      <h2>{{ $t('home.causes.call_to_action_sentence') }}</h2>
      <button v-for="(cause, index) in causes" :key="index">
        {{ cause.name }}
      </button>
    </section>
    <section class="softwares">
      <div v-for="(category, indexCategory) in categories" :key="indexCategory">
        <h3>{{ category.name }}</h3>
        <div class="softwares-list">
          <SoftwaresListItem
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
import SoftwaresListItem from '../components/SoftwaresListItem.vue'

export default {
  name: 'SoftwaresList',
  components: {
    SoftwaresListItem
  },
  props: {
    causes: {
      type: Array,
      required: true
    },
    categories: {
      type: Array,
      required: true
    }
  }
}
</script>

<style></style>
