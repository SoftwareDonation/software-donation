<template>
  <div class="software-list-item">
    <div class="software-list-item__row">
      <img :src="image" :alt="alt" />
      <h4>{{ name }}</h4>
      <base-button :href="url">{{ $t('software.get') }}</base-button>
    </div>
    <p>{{ description }}</p>
    <p>{{ eligibility }}</p>
  </div>
</template>

<script>
import BaseButton from './BaseButton.vue'

export default {
  name: 'SoftwaresListItem',
  components: {
    BaseButton
  },
  props: {
    id: {
      type: String,
      required: true
    },
    name: {
      type: String,
      required: true
    },
    description: {
      type: String,
      required: true
    },
    eligibility: {
      type: String,
      required: true
    },
    url: {
      type: String,
      required: true
    }
  },
  computed: {
    image() {
      return `/images/companies/${this.id}.png`
    },
    alt() {
      return `${this.name} logo`
    }
  }
}
</script>
