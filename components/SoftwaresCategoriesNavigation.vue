<template>
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
  float: left;
  position: sticky;
  top: 80px;
  left: 20px;
  max-width: 300px;
  margin-top: -8px;

  &__links {
    list-style: none;
    padding-left: 0;
  }

  &__link {
    padding: $space-xxxs $space-xs;
  }

  &__link-a {
  }
}
</style>
