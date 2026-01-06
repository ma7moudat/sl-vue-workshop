<script setup lang="ts"></script>

<template>
  <ul>
    <router-link to="/">Home</router-link>
    <router-link to="/todos">Todos</router-link>
    <router-link to="/posts">Posts</router-link>
  </ul>
</template>

<style scoped>
ul {
  display: flex;
  flex-wrap: wrap;
  gap: 1rem;
  margin: 0;
  padding: 1rem;
}

a {
  background: #eee;
  padding: 0.5rem 1rem;
}

.router-link-active {
  background: #dd8;
}
</style>
