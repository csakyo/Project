<script setup lang="ts">
import {ref} from "vue";
import OneInfo from "./components/OneInfo.vue";

const weatherListInit = [
  {id: 1, title:"今日の天気", content:"晴れ"},
  {id: 2, title:"明日の天気", content:"雨"},
  {id: 3, title:"明後日の天気", content:"曇り"},
]
const weatherList = ref(weatherListInit)
</script>

<template>
  <section>
    <h2>TITLE</h2>
    <OneInfo v-for="weather in weatherList"
    :key="weather.id"
    :title="weather.title"
    :content="weather.content"/>
  </section>
</template>

<style>
  section {
    border: blue 1px solid;
    margin: 10px;
    padding: 20px;
  }
</style>
