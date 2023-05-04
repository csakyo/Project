<script setup lang="ts">
const handleChange = (e : Event) => {
    console.log((e.target as HTMLInputElement).value)
}

</script>

<template>
    <h2>Event</h2>
    <input @change="handleChange">
</template>
