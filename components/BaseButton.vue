<template>
  <div class="button__container">
    <nuxt-link v-if="to" :to="to" class="button">
      <slot></slot>
    </nuxt-link>
    <a v-else-if="href" :href="href" :target="target" class="button">
      <slot></slot>
    </a>
  </div>
</template>

<script>
export default {
  name: 'BaseButton',
  props: {
    to: {
      type: String,
      default: null
    },
    href: {
      type: String,
      default: null
    },
    target: {
      type: String,
      default: '_self'
    },
    type: {
      type: String,
      default: null
    },
    isSelected: {
      type: Boolean,
      default: false
    }
  }
}
</script>

<style lang="scss">
.button {
  &__container {
    display: inline-block;
  }

  line-height: normal;
  margin: 0;
  padding: 0;
  width: auto;
  overflow: visible;
  min-height: 20px;
  padding: $space-xxs $space-sm;
  border-radius: 4px;
  font-weight: 500;
  cursor: pointer;
  background-color: $color-grey-lightest;
  color: $color-grey-darkest;
  font-size: $font-size-xs;
  box-shadow: $shadow-elevation-1;
  transition: all 0.3s ease;
  border: 1px solid $color-grey;

  &:hover {
    box-shadow: $shadow-elevation-3;
  }

  &:active {
    box-shadow: $shadow-elevation-2;
  }

  &:disabled {
    opacity: 0.4;
  }

  &--primary {
    background-color: $color-primary;
    color: #fff;
    border-color: $color-primary;

    &:hover {
      background-color: darken($color-primary, 5);
      border-color: darken($color-primary, 5);
    }

    &:active {
      background-color: $color-primary-darker;
      border-color: $color-primary-darker;
    }
  }
}
</style>
