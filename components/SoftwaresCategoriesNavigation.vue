<template>
  <div>
    <ul>
      <li v-for="(category, index) in categories" :key="index">
        <a :href="`#${category.name}`">{{ category.name }}</a>
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
