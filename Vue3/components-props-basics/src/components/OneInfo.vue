<script setup lang="ts">
interface Props {
    title: string;
    content: string;
    no: number;
}
defineProps<Props>();
</script>

<template>
    <section class="box">
        <h4>{{ title }}</h4>
        <p>{{ content }}</p>
        <p>{{ no }}</p>
    </section>
</template>

<style scoped>
.box {
 border: green 1px dashed;
 margin: 10px;
}
</style>
