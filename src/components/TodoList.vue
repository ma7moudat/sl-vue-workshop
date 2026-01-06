<script setup lang="ts">
import { ref } from 'vue'
import { v4 as uuid } from 'uuid'
import type { Todo } from '@/types.ts'
import TodoForm from '@/components/TodoForm.vue'
import TodoItem from '@/components/TodoItem.vue'

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

function onAddTodo(title: string) {
  todos.value.push({
    id: uuid(),
    title,
    done: false,
  })
}
</script>

<template>
  <h2>My Todos</h2>
  <div>
    <TodoForm @add-todo="onAddTodo" />
    <ul>
      <TodoItem
        v-for="(todo, index) in todos"
        :key="todo.id"
        :index="index"
        :todo="todo"
        @toggle-todo="todo.done = $event"
      />
    </ul>
  </div>
</template>

<style scoped></style>
