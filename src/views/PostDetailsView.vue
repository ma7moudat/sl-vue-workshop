<script setup lang="ts">
import { useFetch } from '@/composables/fetch.ts'
import type { Post } from '@/types.ts'
import AsyncResponse from '@/components/AsyncResponse.vue'

const props = defineProps<{
  id: number
}>()

const {
  response: post,
  error,
  loading,
} = useFetch<Post>(`https://dummyjson.com/posts/${props.id}?delay=1000`)
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
