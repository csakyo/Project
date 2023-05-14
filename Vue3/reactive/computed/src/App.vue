
<template>
  <p>半径{{ radius }}の円面積を円周率{{ PI }} で計算すると、{{ area }}</p>
</template>

<script setup lang="ts">
import {ref, computed} from 'vue'

const radiusInit = Math.round(Math.random() * 10)
const radius = ref(radiusInit)
const PI = ref(3.14)

const area = computed(() => {
  return radius.value * radius.value * PI.value
})

setInterval(()=> {
  radius.value = Math.round(Math.random() * 10)
}, 1000)


</script>

<style>

</style>
