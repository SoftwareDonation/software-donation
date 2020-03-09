<template>
  <nav class="the-navbar">
    <base-container class="the-navbar__container">
      <div class="the-navbar__branding">
        <nuxt-link to="/">
          <TheLogo class="the-navbar__logo" />
        </nuxt-link>
      </div>
      <ul class="the-navbar__links">
        <li
          v-for="(link, index) in links"
          :key="index"
          class="the-navbar__link"
        >
          <nuxt-link :to="link.to">{{ link.title }}</nuxt-link>
        </li>
        <li class="the-navbar__link">
          <base-button :href="donateLink" type="primary">
            {{ $t('navigation.donate') }}
          </base-button>
        </li>
      </ul>
    </base-container>
  </nav>
</template>

<script>
import { DONATE_LINK } from '../config'
import TheLogo from './TheLogo'
import BaseContainer from './BaseContainer'
import BaseButton from './BaseButton'

export default {
  name: 'TheNavbar',
  components: {
    TheLogo,
    BaseContainer,
    BaseButton
  },
  data() {
    return {
      links: [
        {
          title: this.$t('navigation.program'),
          to: '/program'
        },
        {
          title: this.$t('navigation.about'),
          to: '/about'
        }
      ],
      donateLink: DONATE_LINK
    }
  }
}
</script>

<style lang="scss" scoped>
.the-navbar {
  &__container {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  &__logo {
    height: 40px;
  }

  &__links {
    padding: 0;
    list-style: none;
    display: flex;
    align-items: center;
  }

  &__link {
    margin-left: $space-md;
    font-weight: 500;
  }
}
</style>
