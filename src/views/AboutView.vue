<script setup lang="ts">
import { computed, ref, onMounted } from 'vue'
import { Line } from 'vue-chartjs'
import type { ChartData } from 'chart.js'
import { useDateFormat } from '@vueuse/core'

const weatherData = ref()

onMounted(() => {
  fetch(
    'https://api.open-meteo.com/v1/forecast?latitude=52.52&longitude=13.41&current_weather=true&hourly=temperature_2m,relativehumidity_2m,windspeed_10m'
  )
    .then(async (res) => (weatherData.value = await res.json()))
    .catch((error) => alert(error.message))
})
const chartData = computed((): ChartData<'line'> => {
  return {
    labels: weatherData.value.hourly.time.map(
      (timestamp: string) => useDateFormat(timestamp, 'dddd h aa').value
    ),
    datasets: [
      {
        label: 'Temperature',
        data: weatherData.value.hourly.temperature_2m
      }
    ]
  }
})
</script>

<template>
  <div>
    <Line v-if="weatherData" :data="chartData" />
  </div>
</template>
