<template>
  <div class="software-list-item">
    <h4>{{ name }}</h4>
  </div>
</template>

<script>
export default {
  name: 'SoftwaresListItem',
  props: {
    id: {
      type: String,
      required: true
    },
    name: {
      type: String,
      required: true
    },
    description: {
      type: String,
      required: true
    },
    eligibility: {
      type: String,
      required: true
    },
    url: {
      type: String,
      required: true
    }
  }
}
</script>
