<script setup>
import { ref } from 'vue'

const datas = ref([
  { message: 'Task 1', id: 1 },
  { message: 'Task 2', id: 2 },
  { message: 'Task 3', id: 3 },
  { message: 'Task 4', id: 4 },
  { message: 'Task 5', id: 5 }
])

function deleteTask(index) {
  this.datas.splice(index, 1)
}

function selectTask(index) {
  const p = document.querySelectorAll('li')
  p[index].style.color = 'gray'
  p[index].style.textDecoration = 'line-through'
}
</script>

<template>
  <ul>
    <li
      class="bg-white px-2 py-2 mb-2 rounded-lg list-none flex justify-between"
      v-for="(data, index) in datas"
      :key="data.id"
    >
      <input type="checkbox" @click="selectTask(index)" />
      <p class="px-2 mr-auto">{{ data.message }}</p>
      <button @click="deleteTask(index)" class="bg-blue-400 rounded-lg px-2">Delete</button>
    </li>
  </ul>
</template>
