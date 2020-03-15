<template>
  <div>
    <ProgramHeader />
    <main>
      <section class="program__section program__section--first">
        <div class="program__section-content program__section-content--first">
          <h2>{{ $t('program.sections.first.title') }}</h2>
          <p>{{ $t('program.sections.first.description') }}</p>
          <base-button :href="donateLink" type="primary">
            {{ $t('program.sections.first.button') }}
          </base-button>
        </div>
        <div class="program__section-image program__section-image--first"></div>
      </section>
      <section class="program__section program__section--second">
        <div
          class="program__section-image program__section-image--second"
        ></div>
        <div class="program__section-content program__section-content--second">
          <h2>{{ $t('program.sections.second.title') }}</h2>
          <p>{{ $t('program.sections.second.description') }}</p>
          <base-button :href="donateLink" type="primary">
            {{ $t('program.sections.second.button') }}
          </base-button>
        </div>
      </section>
    </main>
  </div>
</template>

<script>
import { DONATE_LINK, MAIN_TITLE } from '../config'
import ProgramHeader from '../components/ProgramHeader.vue'
import BaseButton from '../components/BaseButton.vue'

export default {
  title: 'Program',
  components: {
    ProgramHeader,
    BaseButton
  },
  data() {
    return {
      donateLink: DONATE_LINK
    }
  },
  head() {
    const description = this.$t('program.meta_description')
    return {
      title: `${description} – ${MAIN_TITLE}`,
      meta: [
        {
          hid: 'description',
          name: 'description',
          content: description
        }
      ]
    }
  }
}
</script>

<style lang="scss" scoped>
.program {
  $column-size: $container-width/2 - $container-padding;

  &__section {
    display: grid;
    grid-template-columns: 1fr $column-size $column-size 1fr;
    height: 70vh;
    min-height: 400px;
    margin-bottom: -2px;

    @media screen and (max-width: $screen-lg) {
      grid-template-columns: 1fr;
      height: auto;
      min-height: 700px;
    }

    &--second {
      box-shadow: $shadow-elevation-3;
    }
  }

  &__section-content {
    padding: $space-xl;
    display: flex;
    justify-content: center;
    flex-direction: column;
    background: $color-grey-light;

    &--first {
      grid-column-start: 2;
      grid-column-end: 3;
      padding-left: 0;
    }

    &--second {
      grid-column-start: 3;
      grid-column-end: 4;
      padding-right: 0;
    }

    @media screen and (max-width: $screen-lg) {
      grid-column-start: 1;
      grid-column-end: 2;
      padding: $container-padding;
    }
  }

  &__section-image {
    background-size: cover;

    &--first {
      grid-column-start: 3;
      grid-column-end: 5;
      background-image: url('/images/program/remote.jpg');
      @media screen and (max-width: $screen-lg) {
        order: -1;
      }
    }

    &--second {
      grid-column-start: 1;
      grid-column-end: 3;
      background-image: url('/images/program/covid.jpg');
    }

    @media screen and (max-width: $screen-lg) {
      grid-column-start: 1;
      grid-column-end: 2;
    }
  }
}
</style>
