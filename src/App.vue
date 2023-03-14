<script setup lang="ts">
import { RouterLink, RouterView, useRouter } from 'vue-router'
import FadeController from './components/FadeController.vue'
import FooterController from './components/FooterController.vue'
</script>

<template>
  <header>
    <section class="welcome">
      <p>Welcome to my page!</p>
    </section>
    <section>
      <nav>
        <RouterLink :to="{ name: 'home' }">Home</RouterLink>
        <RouterLink :to="{ name: 'about' }">About</RouterLink>
      </nav>
    </section>
  </header>

  <section id="content">
    <FadeController>
      <RouterView />
    </FadeController>
  </section>

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

header .welcome {
  font-family: Hornbill;
  text-shadow: 0.25rem 0.25rem black;
  font-size: 3rem;
  color: #FFDD55;
}

footer {
  width: 80%;
  text-align: center;
}

footer hr {
  height: 1px;
  border-width: 0;
  color: var(--main-fore-color);
  background-color: var(--main-fore-color);

  /* --mask:
    radial-gradient(3.75px at 50% 5.25px, #000 99%, #0000 101%) calc(50% - 6px) 0/12px 51% repeat-x,
    radial-gradient(3.75px at 50% -2.25px, #0000 99%, #000 101%) 50% 3px/12px calc(51% - 3px) repeat-x,
    radial-gradient(3.75px at 50% calc(100% - 5.25px), #000 99%, #0000 101%) calc(50% - 6px) 100%/12px 51% repeat-x,
    radial-gradient(3.75px at 50% calc(100% + 2.25px), #0000 99%, #000 101%) 50% calc(100% - 3px)/12px calc(51% - 3px) repeat-x;
  -webkit-mask: var(--mask);
  mask: var(--mask); */

}
</style>
