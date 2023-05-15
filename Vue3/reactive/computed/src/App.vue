
<template>
  <p>半径{{ data.radius }}の円面積を円周率{{ PI }} で計算すると、{{ area }}</p>
</template>

<script setup lang="ts">
import {reactive, computed} from 'vue'

const data = reactive({
    PI: 3.14,
    radius: Math.round(Math.random() * 10)
  })

const area = computed(() => {
  return data.radius * data.radius * data.PI
})
const radiusInit = Math.round(Math.random() * 10)


setInterval(()=> {
  data.radius = Math.round(Math.random() * 10)
}, 1000)


</script>

<style>

</style>
