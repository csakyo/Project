<script setup lang="ts">
import {ref, computed} from "vue"

interface Props {
    id: number;
    name: string;
    mail: string;
    point: number;
    note: string;
}
const props = withDefaults(
    defineProps<Props>(),
    {note: "--"}
);

// const aboutNote = computed(() => {
//     let note = props.note;
//     if (note == undefined) {
//         note = "--";
//     }
//     return note
// })

const point = ref(props.point)
const pointUp = () => {
    point.value++
}
</script>

<template>
    <section class="box">
        <h4>{{ name }}さんの情報</h4>
        <p>メールアドレス：{{ mail }}</p>
        <p>ポイント：{{ point }}</p>
        <p>備考：{{ note }}</p>
        <button @click="pointUp">ポイント加算</button>
    </section>
</template>

<style scoped>
.box {
 border: green 1px dashed;
 margin: 10px;
}
</style>
