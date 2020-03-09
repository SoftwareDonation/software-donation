<template>
  <nav class="the-navbar">
    <div class="the-navbar__branding">
      <nuxt-link to="/">
        <TheLogo />
      </nuxt-link>
    </div>
    <ul class="the-navbar__links">
      <li v-for="(link, index) in links" :key="index">
        <a v-if="link.href" :href="link.href" :class="link.class">
          {{ link.title }}
        </a>
        <nuxt-link v-else-if="link.to" :to="link.to">{{
          link.title
        }}</nuxt-link>
      </li>
    </ul>
  </nav>
</template>

<script>
import { DONATE_LINK } from '../config'
import TheLogo from './TheLogo'

export default {
  name: 'TheNavbar',
  components: {
    TheLogo
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

<style></style>
