<script setup lang="ts">
import {ref} from "vue";

const inputNameBind = ref('aaa')
const inputNameOn = ref('bbb')


const onInputName = (e) => {
  const element = e.target.value;
  inputNameOn.value = element
}
</script>

<template>
	<section>
		<input type="text" v-bind:value="inputNameBind">
	<br>
		<input type="text" v-on:input="onInputName">
		<p>{{inputNameOn}}</p>
	</section>
</template>
