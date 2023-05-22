<script setup>
import {ref, computed} from "vue";

const msg = "HELLO";

const txtColorRed = ref("red");
const style1 = ref({
  fontSize: "25px",
  color: "blue" 
});
const style2 = ref({
  fontSize: "28px",
  background: "green"
})
const fontSizeStyle = computed(() => {
    const size = Math.round(Math.random() * 25);
    return `${size}px`
  })

</script>

<template>
  <p v-bind:style="{color: 'pink'}"> {{ msg }} </p>
  <p v-bind:style="{color: txtColorRed}"> {{ msg }} </p>
  <p v-bind:style="style1"> {{ msg }} </p>
  <p v-bind:style="[style1, style2]"> {{ msg }} </p>
  <p v-bind:style="{fontSize: fontSizeStyle}"> {{ msg }} </p>
</template>
