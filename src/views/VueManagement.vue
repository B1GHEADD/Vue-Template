<script setup>
import { useCounterStore } from '../stores/counter'
import { ref } from 'vue'

const store = useCounterStore()
const { minusItem, plusItem } = store

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
</script>
<template>
  <main>
    <div>
      <p>Storage Manager Pinia</p>
      <table class="h-full w-full bg-gray-400 border border-black">
        <thead class="flex justify-between font-bold">
          <tr class="border border-black w-full h-full pl-2">
            NAME
          </tr>
          <tr class="border border-black w-full h-full pl-2">
            QUALITY
          </tr>
          <tr class="border border-black w-full h-full pl-2">
            ACTION
          </tr>
        </thead>
        <tbody
          class="flex justify-between"
          v-for="(arrayItem, index) in store.arrayItems"
          :key="index"
        >
          <tr class="border border-black w-full h-full pl-2">
            {{
              arrayItem.name
            }}
          </tr>
          <tr class="border border-black w-full h-full pl-2">
            {{
              arrayItem.qty
            }}
          </tr>
          <tr class="border border-black w-full h-full pl-2">
            <button @click="store.increaseItem(index)" class="bg-blue-200 px-3 rounded-lg mr-2">
              +
            </button>
            <button @click="store.decreaseItem(index)" class="bg-blue-200 px-3 rounded-lg">
              -
            </button>
          </tr>
        </tbody>
      </table>
    </div>
  </main>
</template>
