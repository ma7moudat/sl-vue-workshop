<script setup lang="ts">
import type { Todo } from '@/types.ts'

const props = defineProps<{
  index: number
  todo: Todo
}>()

const emit = defineEmits<{
  (e: 'toggleTodo', payload: boolean): void
}>()
</script>

<template>
  <li :class="{ 'is-done': props.todo.done }">
    {{ props.index + 1 }} / {{ props.todo.title }}
    <input
      type="checkbox"
      :checked="props.todo.done"
      @click="emit('toggleTodo', ($event.target as HTMLInputElement).checked)"
    />
  </li>
</template>

<style scoped>
.is-done {
  background-color: pink;
  text-decoration: line-through;
}
</style>
