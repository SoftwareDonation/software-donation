<template>
  <div>
    <section class="home__causes">
      <h2>{{ $t('home.causes.call_to_action_sentence') }}</h2>
      <base-button
        v-for="(cause, index) in causes"
        :key="index"
        :to="getCauseLink(cause)"
      >
        {{ cause.name }}
      </base-button>
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
import SoftwaresListItem from './SoftwaresListItem.vue'
import BaseButton from './BaseButton.vue'

export default {
  name: 'SoftwaresList',
  components: {
    SoftwaresListItem,
    BaseButton
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
  },
  methods: {
    getCauseLink(cause) {
      return `/${cause.id}`
    }
  }
}
</script>

<style></style>
