import { ref, computed } from 'vue'
import { defineStore } from 'pinia'

export const useCounterStore = defineStore('counter', () => {
  // state: () => {
  //   return {
  //     counter: 0,
  //     name: 'Eduardo',
  //     isAdmin: true,
  //   }
  // }
  // getters: {
  //   // doubleCount: (state) => state.counter * 2,
  // }
  // actions: {
  //   // increment: (state) => {
  //   //   state.counter++
  //   // },
  // }
  const count = ref(0)
  const doubleCount = computed(() => count.value * 2)
  function increment() {
    count.value++
  }

  return {
    count,
    doubleCount,
    increment
  }
})
