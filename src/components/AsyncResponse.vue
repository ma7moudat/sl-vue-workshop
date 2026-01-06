<script setup lang="ts" generic="T">
defineProps<{
  response: T
  error: string | null
  loading: boolean
}>()
</script>

<template>
  <div v-if="loading">LOADING...</div>
  <div v-else-if="error">Error: {{ error }}</div>
  <slot v-else-if="response" />
</template>

<style scoped></style>
