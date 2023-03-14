<script setup lang="ts">
import { RouterLink, RouterView } from 'vue-router'
</script>

<template>
  <header>
    <section>
      <p>Welcome to my page!</p>
      <nav>
        <RouterLink :to="{ name: 'home' }">Home</RouterLink>
        <RouterLink :to="{ name: 'about' }">About</RouterLink>
      </nav>
    </section>
  </header>

  <section>
    <RouterView />
  </section>
</template>

<style scoped>
nav>* {
  margin: 0.2em;
}
</style>
