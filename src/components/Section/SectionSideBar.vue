<script setup>
import SidebarLink from '../Button/SidebarLinkVue.vue'
</script>
<template>
  <div class="flex-none p-5 bg-red-700 w-1/4 h-full rounded-xl">
    <p>Menu</p>
    <div class="flex flex-col gap-3 mt-2">
      <SidebarLink to="/" name="home" />
      <SidebarLink to="/components" name="components" />
    </div>
  </div>
</template>
