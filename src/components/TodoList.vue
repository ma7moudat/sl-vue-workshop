<script setup lang="ts">
import { ref } from 'vue'
import { v4 as uuid } from 'uuid'
import type { Todo } from '@/types.ts'

const todos = ref<Todo[]>([
  {
    id: uuid(),
    title: 'Learn Vue 3',
    done: true,
  },
  {
    id: uuid(),
    title: 'Learn Nuxt as well',
    done: false,
  },
])

const newTodo = ref('')

function addTodo() {
  todos.value.push({
    id: uuid(),
    title: newTodo.value,
    done: false,
  })
  newTodo.value = ''
}
</script>

<template>
  <h2>My Todos</h2>
  <div>
    <input type="text" v-model="newTodo" />
    <button @click="addTodo">Save</button>
    <ul>
      <li v-for="(todo, index) in todos" :key="todo.id" :class="{ 'is-done': todo.done }">
        {{ index + 1 }} / {{ todo.title }}
        <input type="checkbox" v-model="todo.done" />
      </li>
    </ul>
  </div>
</template>

<style scoped>
.is-done {
  background-color: pink;
  text-decoration: line-through;
}
</style>
