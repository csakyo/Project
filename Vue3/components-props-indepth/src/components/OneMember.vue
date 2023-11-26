<script setup lang="ts">
import { ref, computed } from 'vue'

interface Props {
  id: number
  name: string
  mail: string
  points: string
  note?: string
}

const props = defineProps<Props>()

const localPoints = ref(props.points)

const localNote = computed((): string => {
  let localNote = props.note
  if (localNote === undefined) {
    localNote = '--'
  }
  return localNote
})

const pointUp = (): void => {
  localPoints.value++
}
</script>

<template>
  <section class="box">
    <h4>{{ name }}</h4>
    <dl>
      <dt>ID</dt>
      <dd>{{ id }}</dd>
      <dt>メールアドレス</dt>
      <dd>{{ mail }}</dd>
      <dt>保有ポイント</dt>
      <dd>{{ point }}</dd>
      <dt>備考</dt>
      <dd>{{ localNote }}</dd>
    </dl>
    <button @click="pointUp">ポイント加算</button>
  </section>
</template>
<style>
.box {
  border: green 1px solid;
  margin: 10px;
}
</style>
