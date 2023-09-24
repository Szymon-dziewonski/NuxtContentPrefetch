<script lang="ts" setup>
const { prev, next } = useContent();
</script>

<template>
  <NuxtLink v-if="prev?._path" :to="prev._path">Previous</NuxtLink>
  <NuxtLink v-if="next?._path" :to="next._path">Next</NuxtLink>
  <NuxtPage class="prose text-left" />
</template>
