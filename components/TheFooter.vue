<template>
  <base-container>
    <footer class="the-footer">
      <div>
        <TheLogo class="the-footer__logo" />
        <p class="the-footer__text">{{ $t('footer.love') }}</p>
      </div>
      <div>
        <p>
          {{ $t('footer.newsletter') }} {{ $t('footer.github') }}
          <a :href="githubLink" class="the-footer__link">GitHub</a>
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
      githubLink: GITHUB_LINK
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
  align-items: flex-end;

  @media screen and (max-width: $screen-md) {
    flex-direction: column;
    align-items: flex-start;
  }

  &__logo {
    width: 200px;
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
