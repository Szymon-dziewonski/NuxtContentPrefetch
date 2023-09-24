<script setup lang="ts">
const { navigation, page } = useContent();
console.log(page.value);
</script>

<template>
  <NuxtLink to="/">aNavigation button</NuxtLink>
</template>
