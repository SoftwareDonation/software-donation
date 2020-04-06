<template>
  <base-container>
    <footer class="the-footer">
      <div>
        <TheLogo class="the-footer__logo" />
        <p class="the-footer__social">
          {{ $t('footer.follow') }} ‒
          <span v-for="(socialLink, index) in socialLinks" :key="index">
            <a :href="socialLink.href" target="_blank" class="the-footer__link">
              {{ socialLink.title }}
            </a>
          </span>
        </p>
      </div>
      <div>
        <p class="the-footer__follow">
          {{ $t('footer.newsletter') }}
        </p>
        <TheNewsletter />
      </div>
    </footer>
  </base-container>
</template>

<script>
import { GITHUB_LINK } from '../config'
import BaseContainer from './BaseContainer'
import TheLogo from './TheLogo'
import TheNewsletter from './TheNewsletter'

export default {
  name: 'TheFooter',
  components: {
    BaseContainer,
    TheLogo,
    TheNewsletter
  },
  data() {
    return {
      socialLinks: [
        {
          title: 'GitHub',
          href: GITHUB_LINK
        }
      ]
    }
  }
}
</script>

<style lang="scss" scoped>
.the-footer {
  padding: $space-lg 0 $space-xl 0;
  border-top: 2px solid $color-grey;
  color: $color-grey-dark;
  font-weight: 500;
  display: flex;
  width: 100%;
  justify-content: space-between;
  align-items: flex-start;

  @media screen and (max-width: $screen-md) {
    flex-direction: column;
    align-items: flex-start;
  }

  &__follow {
    margin-top: $space-xxxs;
  }

  &__social {
    margin-top: 0;
  }

  &__logo {
    width: 200px;

    @media screen and (max-width: $screen-md) {
      display: none;
    }
  }

  &__link {
    color: $color-primary;

    &:hover {
      color: $color-primary-darker;
    }
  }

  &__text {
    margin-bottom: 0;
  }
}
</style>
