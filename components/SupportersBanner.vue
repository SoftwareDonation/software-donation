<template>
  <div class="supporters-banner">
    <base-container>
      <h2 class="supporters-banner__title">{{ title }}</h2>
      <div :class="gridClass">
        <img
          v-for="(supporter, index) in supporters"
          :key="index"
          :src="supporter.image"
          :alt="supporter.name"
          :class="
            `supporters-banner__image supporters-banner__image--${supporter.name}`
          "
        />
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
          image: '/images/logos/typeform.svg'
        },
        {
          name: 'Miro',
          image: '/images/logos/miro.png'
        },
        {
          name: 'CodeAcademy',
          image: '/images/logos/codeacademy.png'
        },
        {
          name: 'NU',
          image: '/images/logos/nu.svg'
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
          image: '/images/logos/dropbox.svg'
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
    text-align: center;
    margin-bottom: $space-lg;
  }

  &__row {
    display: grid;
    align-items: center;
    grid-gap: $space-lg;
    justify-content: center;

    &-4 {
      grid-template-columns: repeat(4, 1fr);
    }

    &-6 {
      grid-template-columns: repeat(6, 1fr);
    }

    @media screen and (max-width: $screen-sm) {
      grid-template-columns: 1fr 1fr;
    }
  }

  &__image {
    max-width: 100%;
    width: auto;
    height: auto;
    max-height: 70px;
    margin: auto;
    filter: saturate(0);
    opacity: 0.5;

    &--Miro {
      padding: ($space-sm + 4) 0;
    }

    &--CodeAcademy {
      padding-top: $space-xxs;
    }

    &--Zoom {
      padding: $space-md 0;
    }

    &--Google {
      padding: $space-sm 0;
    }
  }
}
</style>
