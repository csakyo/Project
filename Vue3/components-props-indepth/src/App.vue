<script setup lang="ts">
import { ref, computed } from 'vue'
import OneMember from './components/OneMember.vue'
</script>

<template>
  <section>
    <h1>会員リスト</h1>
    <p>全会員の保有ポイントの合計: {{ totalPoints }}</p>
    <OneMember
      v-for="[id, member] in memberList"
      :key="id"
      :id="id"
      :name="member.name"
      :mail="member.mail"
      :points="member.points"
      :note="member.note"
    />
  </section>
</template>

<style scoped>
header {
  line-height: 1.5;
}

.logo {
  display: block;
  margin: 0 auto 2rem;
}

@media (min-width: 1024px) {
  header {
    display: flex;
    place-items: center;
    padding-right: calc(var(--section-gap) / 2);
  }

  .logo {
    margin: 0 2rem 0 0;
  }

  header .wrapper {
    display: flex;
    place-items: flex-start;
    flex-wrap: wrap;
  }
}
</style>
