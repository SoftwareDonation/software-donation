<template>
  <div class="software-list-empty">
    <h3 class="software-list-empty__title">
      {{ $t('empty_list.title') }}
    </h3>

    <div class="software-list-empty__row">
      <div class="software-list-empty__column">
        <p class="software-list-empty__text">
          {{ $t('empty_list.newsletter') }}
        </p>
        <TheNewsletter />
      </div>
      <div class="software-list-empty__separator"></div>
      <div class="software-list-empty__column">
        <p>
          {{ $t('empty_list.donate') }}
        </p>
        <div>
          <base-button :href="donateLink" type="primary">{{
            $t('empty_list.button')
          }}</base-button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { DONATE_LINK } from '../config'
import TheNewsletter from './TheNewsletter.vue'
import BaseButton from './BaseButton.vue'

export default {
  components: {
    TheNewsletter,
    BaseButton
  },
  data() {
    return {
      donateLink: DONATE_LINK
    }
  }
}
</script>

<style lang="scss" scoped>
.software-list-empty {
  padding: $space-xxxl 0;

  &__title {
    color: $color-grey-dark;
    text-align: center;
    font-size: $font-size-lg;
    margin-bottom: $space-lg;
  }

  &__row {
    display: grid;
    grid-template-columns: 1fr 2px 1fr;
    grid-gap: $space-md;
  }

  &__column {
    text-align: center;
  }

  &__separator {
    background-color: $color-grey;
  }
}
</style>
