<script setup lang="ts">
import { ref } from 'vue'
import type { Post } from '@/types.ts'
import { onMounted } from 'vue'
import type { PostsResponse } from '@/types.ts'

const postsResponse = ref<PostsResponse>()
const error = ref<string | null>(null)
const loading = ref(true)

onMounted(() => {
  postsResponse.value = undefined
  error.value = null
  loading.value = true
  fetch('https://dummyjson.com/posts/?delay=1000')
    .then((res) => res.json())
    .catch((err) => (error.value = err.message))
    .then((data) => (postsResponse.value = data))
    .finally(() => (loading.value = false))
})
</script>

<template>
  <h1>Posts</h1>
  <div v-if="loading">LOADING...</div>
  <div v-else-if="error">Error: {{ error }}</div>
  <ul v-else-if="postsResponse?.posts.length">
    <li v-for="post in postsResponse?.posts" :key="post.id">{{ post.title }}</li>
  </ul>
  <div v-else>Nothing found</div>
</template>

<style scoped></style>
