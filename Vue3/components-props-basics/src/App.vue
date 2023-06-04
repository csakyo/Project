<script setup lang="ts">
import {ref} from "vue";
import OneInfo from "./components/OneInfo.vue";

const weatherListInit: Weather[] = [
  { id: 1,
    title: '今日の天気',
    content: '今日は一日中晴でしょう'
  },
  { id: 2,
    title: '明日の天気',
    content: '明日は一日中曇りでしょう'
  },
  { id: 3,
    title: '明後日の天気',
    content: '明後日は一日中雨でしょう'
  },
]
const weatherList = ref(weatherListInit);
interface Weather {
  id: number;
  title: string;
  content: string;
}
</script>

<template>
  <section>
    <h2>TITLE</h2>
    <OneInfo v-for="weather in weatherList" 
    :key="weather.id"
    :title="weather.title"
    :content="weather.content" />
  </section>
</template>

<style>
  section {
    border: blue 1px solid;
    margin: 10px;
  }
</style>
