<template>
  <div class="supporters-banner">
    <base-container>
      <h2 class="supporters-banner__title">{{ title }}</h2>
      <div class="supporters-banner__logos" :class="gridClass">
        {{ supporters }}
      </div>
    </base-container>
  </div>
</template>

<script>
import BaseContainer from './BaseContainer'

export default {
  name: 'SupportersBanner',
  components: {
    BaseContainer
  },
  props: {
    title: {
      type: String,
      default: ''
    },
    type: {
      type: String,
      default: 'partners'
    }
  },
  data() {
    return {
      partners: [
        {
          name: 'Typeform',
          image: '/images/logos/typeform.png'
        },
        {
          name: 'Miro',
          image: '/images/logos/miro.png'
        },
        {
          name: 'CodeAcademy',
          image: '/images/logos/codeAcademy.png'
        },
        {
          name: 'NU',
          image: '/images/logos/nu.png'
        }
      ],
      all: [
        {
          name: 'Google',
          image: '/images/logos/google.png'
        },
        {
          name: 'Zoom',
          image: '/images/logos/zoom.png'
        },
        {
          name: 'Atlassian',
          image: '/images/logos/atlassian.png'
        },
        {
          name: 'Miro',
          image: '/images/logos/miro.png'
        },
        {
          name: 'Airtable',
          image: '/images/logos/airtable.png'
        },
        {
          name: 'Dropbox',
          image: '/images/logos/dropbox.png'
        }
      ]
    }
  },
  computed: {
    supporters() {
      return this[this.type]
    },
    gridClass() {
      return `supporters-banner__row supporters-banner__row-${this.supporters.length}`
    }
  }
}
</script>

<style lang="scss" scoped>
.supporters-banner {
  background: #fff;
  padding: $space-lg 0;

  &__title {
    font-size: $font-size-xl;
  }
}
</style>
