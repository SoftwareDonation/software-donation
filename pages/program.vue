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
    <DonationBanner />
  </div>
</template>

<script>
import { DONATE_LINK } from '../config'
import ProgramHeader from '../components/ProgramHeader.vue'
import DonationBanner from '../components/DonationBanner.vue'
import BaseButton from '../components/BaseButton.vue'

export default {
  title: 'Program',
  components: {
    ProgramHeader,
    DonationBanner,
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
.program {
  $column-size: $container-width/2 - $container-padding;

  &__section {
    display: grid;
    grid-template-columns: 1fr $column-size $column-size 1fr;
    height: 70vh;
    min-height: 400px;

    &--second {
      box-shadow: $shadow-elevation-3;
    }
  }

  &__section-content {
    padding: $space-xl;
    display: flex;
    justify-content: center;
    flex-direction: column;

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
  }

  &__section-image {
    background-size: cover;

    &--first {
      grid-column-start: 3;
      grid-column-end: 5;
      background-image: url('/images/program/remote.jpg');
    }

    &--second {
      grid-column-start: 1;
      grid-column-end: 3;
      background-image: url('/images/program/covid.jpg');
    }
  }
}
</style>
