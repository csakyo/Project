<script setup lang="ts">
import {ref} from "vue";
import OneMember from "./components/OneMember.vue";

// const weatherListInit = [
//   {id: 1, title:"今日の天気", content:"晴れ"},
//   {id: 2, title:"明日の天気", content:"雨"},
//   {id: 3, title:"明後日の天気", content:"曇り"},
// ]
// const weatherList = ref(weatherListInit)

const memberListInit = [
  {id:1, name:"田中太郎", mail:"aaa@gmail.com", point: 1, note:"会員メンバー" },
  {id:1, name:"佐藤二郎", mail:"bbb@gmail.com", point: 3, note:"非会員メンバー" },
  {id:1, name:"鈴木三郎", mail:"ccc@gmail.com", point: 6, },
]
const memberList = ref(memberListInit)
</script>

<template>
  <section>
    <h2>TITLE</h2>
    <OneMember v-for="member in memberList"
    :key="member.id"
    :name="member.name"
    :mail="member.mail"
    :point="member.point"
    :note="member.note" />
  </section>
</template>

<style>
  section {
    border: blue 1px solid;
    margin: 10px;
    padding: 20px;
  }
</style>
