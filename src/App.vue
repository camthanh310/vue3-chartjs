<script setup lang="ts">
import { RouterLink, RouterView } from 'vue-router'
</script>

<template>
  <nav>
    <RouterLink to="/">Bar Chart</RouterLink>
    <RouterLink to="/line-chart">Line Chart</RouterLink>
  </nav>

  <RouterView />
</template>
