<script setup lang="ts">
import { ref } from 'vue'

const emit = defineEmits<{
  (e: 'addTodo', payload: string): void
}>()

const newTodo = ref('')

function onSaveClick() {
  emit('addTodo', newTodo.value)
  newTodo.value = ''
}
</script>

<template>
  <input type="text" v-model="newTodo" />
  <button @click="onSaveClick">Save</button>
</template>

<style scoped></style>
