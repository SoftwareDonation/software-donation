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
          <a v-if="link.href" :href="link.href" :class="link.class">
            {{ link.title }}
          </a>
          <nuxt-link v-else-if="link.to" :to="link.to">{{
            link.title
          }}</nuxt-link>
        </li>
      </ul>
    </base-container>
  </nav>
</template>

<script>
import { DONATE_LINK } from '../config'
import TheLogo from './TheLogo'
import BaseContainer from './BaseContainer'

export default {
  name: 'TheNavbar',
  components: {
    TheLogo,
    BaseContainer
  },
  data() {
    return {
      links: [
        {
          title: this.$t('navigation.donate'),
          href: DONATE_LINK,
          class: 'button'
        },
        {
          title: this.$t('navigation.program'),
          to: '/program'
        },
        {
          title: this.$t('navigation.about'),
          to: '/about'
        }
      ]
    }
  }
}
</script>

<style lang="scss">
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
