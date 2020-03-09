<template>
  <div class="button__container">
    <nuxt-link v-if="to" :to="to" class="button">
      <slot></slot>
    </nuxt-link>
    <a v-else-if="href" :href="href" :target="target">
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
    }
  }
}
</script>

<style lang="scss">
.button {
  background: #fff;
}
</style>
