<template>
  <div class="base-container">
    <slot></slot>
  </div>
</template>

<style lang="scss">
.base-container {
  padding: 0 $container-padding;
  width: 100%;
  max-width: $container-width;
  margin: 0 auto;
}
</style>
