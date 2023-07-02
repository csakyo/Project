<script setup lang="ts">
import {reactive, provide} from "vue";
import {RouterLink} from "vue-router";
import type {Member} from "@/interfaces";

const memberList = new Map<number, Member>();
memberList.set(33456, {id: 33456, name: "田中太郎", email: "bow@example.com", points: 35, note: "初回入会特典あり。"});
memberList.set(47783, {id: 47783, name: "鈴木二郎", email: "mue@example.com", points: 53});
provide("memberList", reactive(memberList));
</script>

<template>
  <header>
    <div class="wrapper">
      <h1>Router サンプル</h1>
      <main>
        <RouterLink v-bind:to="{name: 'MemberList'}">
          会員管理はこちら
        </RouterLink>
      </main>
    </div>
  </header>
</template>

<style>
main {
	border: blue 1px solid;
	padding: 10px;
}
#breadcrumbs ul li {
	display: inline;
	list-style-type: none;
}
#breadcrumbs {
	margin-left: 0px;
}
#breadcrumbs ul {
	padding-left: 0px;
}
#breadcrumbs ul .current {
	color: red;
}
#breadcrumbs ul li:before {
	content: " > ";
}
#breadcrumbs ul li:first-child:before {
	content: none;
}
</style>
