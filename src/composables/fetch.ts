import { ref } from 'vue'
import { onMounted } from 'vue'
import { readonly } from 'vue'
import type { MaybeRefOrGetter } from 'vue'
import { toValue } from 'vue'
import { watchEffect } from 'vue'

export function useFetch<T>(url: MaybeRefOrGetter<string>) {
  const response = ref<T | null>(null)
  const error = ref<string | null>(null)
  const loading = ref(true)

  watchEffect(() => {
    response.value = undefined
    error.value = null
    loading.value = true
    fetch(toValue(url))
      .then((res) => res.json())
      .catch((err) => (error.value = err.message))
      .then((data) => (response.value = data))
      .finally(() => (loading.value = false))
  })

  return {
    response: readonly(response),
    error: readonly(error),
    loading: readonly(loading),
  }
}
