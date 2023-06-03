<script setup lag="ts">
import OneInfo from "./components/OneInfo.vue"
</script>

<template>
  <h1>Props</h1>
  <section>
    <h2>TITLE</h2>
    <OneInfo title="Propsの基礎" content="コンポーネントに値を渡す" />
  </section>
</template>

<style>
  section {
    border: blue 1px solid;
    margin: 10px;
  }
</style>
