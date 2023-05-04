<script setup lang="ts">
import { reactive } from 'vue'

type User = {
    id: number,
    name: string
}

const user1: User = {
    id: 1,
    name: '田中'
}

const user2 = reactive({} as User)
user2.id = 1
user2.name = '佐藤'

</script>

<template>
    <h2>reactive</h2>
    {{ user1.name }}
    {{ user2.name }}
</template>
