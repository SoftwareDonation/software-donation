<template>
  <nav
    :class="['the-navbar', { 'the-navbar__transparent': transparentNavbar }]"
  >
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
        <li class="the-navbar__link the-navbar__link--button">
          <base-button :to="donateLink" type="primary">
            {{ $t('navigation.program') }}
          </base-button>
        </li>
      </ul>
    </base-container>
  </nav>
</template>

<script>
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
          title: this.$t('navigation.about'),
          to: '/about'
        }
      ],
      donateLink: '/program',
      transparentNavbar: true
    }
  },
  created() {
    if (process.browser) {
      this.updateNavbar()
      window.addEventListener('scroll', this.handleScroll) // eslint-disable-line
    }
  },
  destroyed() {
    if (process.browser) {
      window.removeEventListener('scroll', this.handleScroll)
    }
  },
  methods: {
    updateNavbar() {
      const TRANSPARENT_NAVBAR_TRESHOLD = 100
      const scrollTop = window.pageYOffset || document.documentElement.scrollTop
      const activateTransparentNavbar = scrollTop < TRANSPARENT_NAVBAR_TRESHOLD
      this.transparentNavbar = activateTransparentNavbar
    },
    handleScroll() {
      this.updateNavbar()
    }
  }
}
</script>

<style lang="scss" scoped>
.the-navbar {
  top: 0;
  left: 0;
  position: fixed;
  width: 100%;
  z-index: 1;
  background: #fff;
  box-shadow: $shadow-elevation-2;
  transition: all 0.3s ease;

  &__transparent {
    background: rgba(255, 255, 255, 0);
    box-shadow: none;
  }

  @media screen and (max-width: $screen-md) {
    padding-top: $space-sm;
    position: static;
    background: #fff;
  }

  &__container {
    display: flex;
    justify-content: space-between;
    align-items: center;

    @media screen and (max-width: $screen-md) {
      flex-direction: column;
    }
  }

  &__logo {
    height: 40px;
    width: 250px;
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

    @media screen and (max-width: $screen-md) {
      margin: 0 $space-xs;
      text-align: center;

      a {
        font-size: $font-size-xxs;
      }

      &--button {
        display: none;
      }
    }
  }
}
</style>
