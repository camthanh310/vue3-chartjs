<script lang="ts" setup>
import { computed, onMounted, ref } from 'vue'
import type { ChartData } from 'chart.js'
import { Bar } from 'vue-chartjs'

interface Movie {
  title: string
  rating: number
}

const movies = ref<Movie[]>([])

const chartData = computed((): ChartData<'bar'> => {
  return {
    labels: movies.value.map((movie) => movie.title),
    datasets: [
      {
        label: 'IMDb rating',
        backgroundColor: '#c82834',
        data: movies.value.map((movie) => movie.rating)
      }
    ]
  }
})

onMounted(() => {
  fetch('/api.json')
    .then(async (res) => (movies.value = await res.json()))
    .catch((err) => console.error(err))
})
</script>

<template>
  <div>
    <Bar v-if="movies.length" :data="chartData" />
  </div>
</template>
