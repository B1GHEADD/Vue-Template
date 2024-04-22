import { ref } from 'vue'
import { defineStore } from 'pinia'

export const useCounterStore = defineStore('counter', () => {
  const arrayItems = ref([
    {
      name: 'Beras',
      qty: 0,
      id: 1
    },
    {
      name: 'Tepung',
      qty: 0,
      id: 2
    },
    {
      name: 'Gula',
      qty: 0,
      id: 3
    }
  ])
  const addItem = (name, qty) => {
    arrayItems.value.push({
      name: name,
      qty: qty
    })
  }
  const decreaseItem = (index) => {
    let stock = arrayItems.value[index]
    if (stock.qty > 0) {
      stock.qty--
    }
  }
  const increaseItem = (index) => {
    let stock = arrayItems.value[index]
    stock.qty++
  }
  return { arrayItems, addItem, decreaseItem, increaseItem }
})
