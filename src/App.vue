<script setup>
import SectionNavbar from '@/components/Section/SectionNavbar.vue'
import SectionFooter from '@/components/Section/SectionFooter.vue'
import SectionMain from '@/components/Section/SectionMain.vue'
import SectionSideBar from '@/components/Section/SectionSideBar.vue'
</script>

<template>
  <div class="flex flex-col gap-5 w-screen h-screen">
    <SectionNavbar />
    <div class="flex h-screen w-screen gap-5">
      <SectionSideBar />
      <SectionMain />
    </div>
    <SectionFooter />
  </div>
</template>
