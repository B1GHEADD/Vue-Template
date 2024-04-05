<script setup>
import Conditional from '@/components/Condisional/Conditional.vue'
import List from '@/components/Condisional/List.vue'
import TabNavigation from '@/components/Tab/TabNavigation.vue'

import { ref } from 'vue'

const landingPage = ref({
  name: 'Conditional Rendering',
  component: Conditional
})

const list_tab = ref([
  {
    name: 'Conditional Rendering',
    component: Conditional
  },
  {
    name: 'List Rendering',
    component: List
  }
])
</script>

<template>
  <div class="flex flex-col h-full">
    <p class="mb-3">Vue Components</p>
    <TabNavigation :list-tab="list_tab" v-model="landingPage" />
    <div class="bg-blue-300 rounded-b-xl rounded-r-xl p-5 w-full h-full">
      <component :is="landingPage.component"></component>
    </div>
  </div>
</template>
