<script setup lang="ts">
import type { PostsResponse } from '@/types.ts'
import { useFetch } from '@/composables/fetch.ts'
import AsyncResponse from '@/components/AsyncResponse.vue'

const {
  response: postsResponse,
  error,
  loading,
} = useFetch<PostsResponse>('https://dummyjson.com/posts/?delay=1000')
</script>

<template>
  <h1>Posts</h1>
  <AsyncResponse :response="postsResponse" :error="error" :loading="loading">
    <ul v-if="postsResponse?.posts.length">
      <li v-for="post in postsResponse?.posts" :key="post.id">
        <RouterLink :to="`/posts/${post.id}`">
          {{ post.title }}
        </RouterLink>
      </li>
    </ul>
    <div v-else>Nothing found</div>
  </AsyncResponse>
</template>

<style scoped></style>
