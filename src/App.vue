<script setup lang="ts">
import { RouterLink, RouterView } from 'vue-router'
import FadeController from './components/FadeController.vue'
import FooterController from './components/FooterController.vue'
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

  <FadeController>
    <section id="content">
      <RouterView />
    </section>
  </FadeController>

  <FooterController>
    <br>
    <hr>
    <p>This is a footer!</p>
  </FooterController>
</template>

<style scoped>
nav>* {
  margin: 0.2em;
}
</style>
