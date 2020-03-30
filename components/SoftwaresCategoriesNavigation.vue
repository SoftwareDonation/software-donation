<template>
  <div class="softwares-categories-navigation__container">
    <div class="softwares-categories-navigation">
      <ul
        v-scroll-spy-active
        v-scroll-spy-link
        class="softwares-categories-navigation__links"
      >
        <li
          v-for="(category, index) in categories"
          :key="index"
          class="softwares-categories-navigation__link"
        >
          <a
            v-smooth-scroll="{ offset: -100 }"
            :href="`#${category.name}`"
            class="softwares-categories-navigation__link-a"
            >{{ category.name }}</a
          >
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    categories: {
      type: Array,
      required: true
    }
  }
}
</script>

<style lang="scss" scoped>
.active {
  background-color: $color-primary;
  border-radius: 999px;

  a {
    color: #fff !important;
  }
}

.softwares-categories-navigation {
  display: flex;
  justify-content: flex-end;
  padding-right: $space-md;

  @media screen and (max-width: $container-width + 300px) {
    display: none;
  }

  &__container {
    display: grid;
    grid-template-columns: 1fr $container-width 1fr;
    position: sticky;
    top: 0;
    font-size: $font-size-xs;
    height: 0px;
  }

  &__links {
    list-style: none;
    padding-left: 0;
    display: inline-block;
    padding-top: 80px;
  }

  &__link {
    padding: $space-xxxs $space-xs;
  }

  &__link-a {
  }
}
</style>
