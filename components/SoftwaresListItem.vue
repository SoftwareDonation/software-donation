<template>
  <div class="software-list-item">
    <div class="software-list-item__row software-list-item__row--spaced">
      <div class="software-list-item__row">
        <img
          v-if="image"
          :src="image"
          :alt="alt"
          class="software-list-item__image"
        />
        <div
          v-else
          class="software-list-item__image software-list-item__image--placeholder"
        >
          {{ name | firstLetter }}
        </div>
        <h4>{{ name }}</h4>
      </div>
      <base-button :href="url" target="_blank">{{
        $t('software.get')
      }}</base-button>
    </div>
    <p class="software-list-item__description">{{ description }}</p>
    <p class="software-list-item__eligibility">{{ eligibility }}</p>
  </div>
</template>

<script>
import BaseButton from './BaseButton.vue'

export default {
  name: 'SoftwaresListItem',
  components: {
    BaseButton
  },
  filters: {
    firstLetter(value) {
      if (!value) return ''
      value = value.toString()
      return value.charAt(0)
    }
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
    },
    image: {
      type: String,
      default: null
    }
  },
  computed: {
    alt() {
      return `${this.name} logo`
    }
  }
}
</script>

<style lang="scss" scoped>
$image-size: 42px;

.software-list-item {
  padding: $space-md;
  background-color: #fff;
  box-shadow: $shadow-elevation-1;
  border-radius: $border-radius-card;

  p {
    margin: 0;
  }

  &__row {
    display: flex;
    align-items: center;
    font-size: $font-size-md;

    &--spaced {
      justify-content: space-between;
    }
  }

  &__image {
    height: $image-size;
    width: $image-size;
    min-height: $image-size;
    min-width: $image-size;
    object-fit: contain;
    margin-right: 16px;
    background-color: $color-grey-light;
    border-radius: 3px;
    padding: 8px;
    box-sizing: border-box;

    &--placeholder {
      font-size: $font-size-md;
      display: flex;
      align-items: center;
      justify-content: center;
      color: $color-grey-dark;
      font-weight: 900;
    }
  }

  &__description {
    padding: $space-xs 0;
  }

  &__eligibility {
    font-weight: 500;
    color: $color-grey-dark;
    font-size: $font-size-xxs;
  }
}
</style>
