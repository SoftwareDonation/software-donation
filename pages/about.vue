<template>
  <div class="about">
    <AboutHeader />
    <base-container>
      <section class="about__text">{{ $t('about.text') }}</section>
      <base-button
        type="primary"
        :href="contactFormLink"
        class="about__contact"
        >{{ $t('about.button') }}</base-button
      >
    </base-container>
    <SupportersBanner :title="$t('home.sponsor')" />
  </div>
</template>

<script>
import { MAIN_TITLE, CONTACT_FORM_LINK } from '../config'
import AboutHeader from '../components/AboutHeader.vue'
import BaseContainer from '../components/BaseContainer.vue'
import BaseButton from '../components/BaseButton.vue'
import SupportersBanner from '../components/SupportersBanner.vue'

export default {
  title: 'About',
  components: {
    AboutHeader,
    BaseContainer,
    BaseButton,
    SupportersBanner
  },
  data() {
    return {
      contactFormLink: CONTACT_FORM_LINK
    }
  },
  head() {
    return {
      title: `${this.$t('about.meta_title')} – ${MAIN_TITLE}`
    }
  }
}
</script>

<style lang="scss" scoped>
.about {
  background: #fff;
  margin-bottom: -2px;
  position: relative;

  &__text {
    padding-top: $space-xxxl;
    font-size: $font-size-md;
  }

  &__contact {
    margin-top: $space-md;
    margin-bottom: $space-xxxl;
  }
}
</style>
