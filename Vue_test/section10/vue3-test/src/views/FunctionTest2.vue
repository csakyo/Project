<template>
    <div>
        <p>{{item.amount}}</p>
        <p>{{totalPrice}}</p>
        <button @click="increment">+</button>
        <button @click="decrement">-</button>
    </div>
</template>

<script>
import { reactive } from 'vue'
import useCounter from '@/composables/useCounter'

// const useCounter = item => {
//    const increment = () => {
//         item.amount++
//     }
//     const decrement = () => {
//         item.amount--
//     }
//     const totalPrice = computed(()=>{
//         return item.price * item.amount
//     })
//     return {increment, decrement, totalPrice}
// }

export default {
    setup(){
        const item = reactive({
            title: 'タイトル',
            price: 100,
            amount:  0
        })

        const {increment, decrement, totalPrice} = useCounter(item)
        return {
            item,
            increment,
            decrement,
            totalPrice
        }
    }
}
</script>
<style>

</style>
