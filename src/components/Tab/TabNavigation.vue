<script setup>
defineProps(['listTab'])
const active = defineModel()
</script>
<template>
  <div class="flex w-fit overflow-hidden rounded-t-xl">
    <button
      v-for="list in listTab"
      :key="list"
      class="px-10 pt-2 pb-4 text-sm"
      @click="active = list"
      :class="active.name == list.name ? 'bg-blue-300 text-black' : 'bg-blue-600 text-white'"
    >
      {{ list.name }}
    </button>
  </div>
</template>
