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
