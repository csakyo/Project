<template>
    <div>
        CompositionTest
        <p>{{name}}</p>
        <p>{{age}}</p>
        <p>{{nameRef}}</p>
        <p>reactive: {{book.title}}</p>
        <p>reactive: {{book.author[0]}}</p>
        <p>reactiveToRefs: {{titleRef}}</p>
        <p>reactiveToRefs: {{authorRef[0]}}</p>
        <button @click="btnClick">クリック</button>
        <p>computed: {{totalPrice}}</p>
        <div>watch:<input v-model="search"></div>
        <div>watchEffect:<input v-model="search"></div>
    </div>
</template>

<script>
import { ref, reactive, toRefs, computed, watch, watchEffect, onMounted } from 'vue'
export default {
    data(){},
    setup(){
        let name = '大谷'
        const age = 23
        const nameRef = ref('田中')

        const book = reactive({
            title: 'title',
            author: ['佐藤', '伊藤']
        })

        const booktoRefs = reactive({
            titleRef: 'title2',
            authorRef: ['佐藤2', '伊藤2']
        })

        const item = reactive({
            price: 300,
            number: 1
        })

        const totalPrice = computed(() => {
            return item.price * item.number
        })

        const btnClick = (e) => {
            console.log(book.title)
            console.log(e)
        }

        const search = ref('')
        watch(search, (newValue, prevValue) => {
            console.log(`watch: ${search.value}`)
            console.log(`new: ${newValue}`)
            console.log(`prev: ${prevValue}`)
        })

        const searchEffect = ref('')
        watchEffect(()=>{
            console.log(`watchEffect: ${searchEffect.value}`)
        })

        onMounted(()=>{
            console.log('onMounted')
        })

        console.log('setup')
        return {
            name,
            age,
            nameRef,
            book,
            ...toRefs(booktoRefs),
            btnClick,
            item,
            totalPrice,
            search,
            searchEffect
        }
    },
    created(){
        console.log('created')
    },
    mounted(){
        console.log('mounted')
    }
}
</script>
