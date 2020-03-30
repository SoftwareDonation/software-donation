<template>
  <div>
    <section class="softwares-causes">
      <base-container>
        <h2 class="softwares-causes__title">
          {{ $t('home.causes.call_to_action_sentence') }}
        </h2>
        <base-button
          v-for="(cause, index) in causes"
          :key="index"
          :to="getCauseLink(cause)"
          :is-selected="isCauseSelected(cause)"
          type="selector"
          size="lg"
          class="softwares-causes__buttons"
        >
          {{ cause.name }}
        </base-button>
      </base-container>
    </section>
    <section class="softwares-list">
      <SoftwaresCategoriesNavigation :categories="categories" />
      <base-container>
        <SoftwaresListEmpty v-if="categories.length === 0" />
        <div
          v-for="(category, indexCategory) in categories"
          :key="indexCategory"
          class="softwares-list__category"
        >
          <h3 :id="category.name" class="softwares-list__title">
            {{ category.name }}
          </h3>
          <div class="softwares-list__grid">
            <SoftwaresListItem
              v-for="(software, indexSoftware) in category.softwares"
              :id="software.id"
              :key="indexSoftware"
              :name="software.name"
              :description="software.description"
              :eligibility="software.eligibility"
              :url="software.url"
              :image="software.image"
            />
          </div>
        </div>
      </base-container>
    </section>
  </div>
</template>

<script>
import { DEFAULT_CAUSE } from '../config'
import SoftwaresListItem from './SoftwaresListItem.vue'
import SoftwaresListEmpty from './SoftwaresListEmpty.vue'
import SoftwaresCategoriesNavigation from './SoftwaresCategoriesNavigation.vue'
import BaseButton from './BaseButton.vue'
import BaseContainer from './BaseContainer.vue'

export default {
  name: 'SoftwaresList',
  components: {
    SoftwaresListItem,
    SoftwaresListEmpty,
    BaseButton,
    BaseContainer,
    SoftwaresCategoriesNavigation
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
    },
    isCauseSelected(cause) {
      const causeNameIsInRoute = this.$nuxt.$route.path.includes(cause.id)
      const isDefaultPage = this.$nuxt.$route.path === '/'
      const causeIsDefault = cause.id === DEFAULT_CAUSE
      return causeNameIsInRoute || (isDefaultPage && causeIsDefault)
    }
  }
}
</script>

<style lang="scss" scoped>
.softwares-causes {
  background-color: #fff;
  border-top: 2px solid $color-grey-lightest;
  padding: $space-xl 0;
  box-shadow: $shadow-elevation-1;

  &__title {
    margin-bottom: $space-lg;
    margin-top: $space-md;
  }

  &__buttons {
    margin-right: $space-xs;
    margin-bottom: $space-lg;
  }
}

.softwares-list {
  &__category {
    margin-top: $space-xxxl;
  }

  &__title {
    margin-bottom: $space-md;
    font-size: $font-size-lg;
  }

  &__grid {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    grid-gap: $space-md;

    @media screen and (max-width: $screen-lg) {
      grid-template-columns: 1fr 1fr;
    }

    @media screen and (max-width: $screen-md) {
      grid-template-columns: 1fr;
    }
  }
}
</style>
