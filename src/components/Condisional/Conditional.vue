<script setup>
import { ref } from 'vue'

const show = ref(true)
</script>

<template>
  <div>
    <button @click="show = !show" class="bg-blue-600 text-white pl-3 pr-3 rounded-lg">
      <p v-if="show == true">Hide</p>
      <p v-else>Show</p>
    </button>

    <p v-show="show">
      Lorem ipsum dolor sit, amet consectetur adipisicing elit. Hic, voluptatibus impedit sint odit
      quasi amet deleniti laborum ullam nesciunt porro exercitationem eum dolorum deserunt ea libero
      tenetur laboriosam? Nisi, sit.
    </p>
  </div>
</template>
