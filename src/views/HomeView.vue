<script setup>
import SectionNavbar from '../components/Section/SectionNavbar.vue'
import SectionFooter from '@/components/Section/SectionFooter.vue'
import SectionMain from '@/components/Section/SectionMain.vue'
import SectionSideBar from '@/components/Section/SectionSideBar.vue'
</script>

<template>
  <div class="flex flex-col h-screen w-screen gap-3">
    <SectionNavbar />
    <div class="flex w-full h-full gap-3">
      <SectionSideBar />
      <SectionMain />
    </div>

    <SectionFooter />
  </div>
</template>
