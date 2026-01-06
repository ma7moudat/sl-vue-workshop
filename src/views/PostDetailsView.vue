<script setup lang="ts">
import { useRoute } from 'vue-router'
import { ref } from 'vue'
import { onMounted } from 'vue'
import type { Post } from '@/types.ts'

const route = useRoute()

const post = ref<Post>()
const error = ref<string | null>(null)
const loading = ref(true)

onMounted(() => {
  post.value = undefined
  error.value = null
  loading.value = true
  fetch(`https://dummyjson.com/posts/${route.params.id}?delay=1000`)
    .then((res) => res.json())
    .catch((err) => (error.value = err.message))
    .then((data) => (post.value = data))
    .finally(() => (loading.value = false))
})
</script>

<template>
  <div v-if="loading">LOADING...</div>
  <div v-else-if="error">Error: {{ error }}</div>
  <ul v-else-if="post">
    <h2>{{ post.title }}</h2>
    <div>{{ post.body }}</div>
  </ul>
</template>

<style scoped></style>
