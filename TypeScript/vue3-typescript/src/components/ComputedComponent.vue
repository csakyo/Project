<script setup lang="ts">
import { computed, ref } from 'vue'
const amount = ref<number>(0)

const subTotal = computed(() => 3000 * amount.value)
</script>

<template>
    <h2>Computed</h2>
    単価: 3000<br>
    個数: <input type="number" v-model="amount">
    小計: {{ subTotal }}
</template>
