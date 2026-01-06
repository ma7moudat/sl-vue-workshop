import { ref } from 'vue'
import { onMounted } from 'vue'
import { readonly } from 'vue'

export function useFetch<T>(url: string) {
  const response = ref<T | null>(null)
  const error = ref<string | null>(null)
  const loading = ref(true)

  onMounted(() => {
    response.value = undefined
    error.value = null
    loading.value = true
    fetch(url)
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
