<script setup lang="ts">
import { useRoute } from 'vue-router'
import { useFetch } from '@/composables/fetch.ts'
import type { Post } from '@/types.ts'
import AsyncResponse from '@/components/AsyncResponse.vue'

const route = useRoute()

const {
  response: post,
  error,
  loading,
} = useFetch<Post>(`https://dummyjson.com/posts/${route.params.id}?delay=1000`)
</script>

<template>
  <AsyncResponse :response="post" :error="error" :loading="loading">
    <ul v-if="post">
      <h2>{{ post.title }}</h2>
      <div>{{ post.body }}</div>
    </ul>
  </AsyncResponse>
</template>

<style scoped></style>
