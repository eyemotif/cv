<script setup lang="ts">
import { RouterLink, RouterView } from 'vue-router'
import FadeController from './components/FadeController.vue'
import FooterController from './components/FooterController.vue'

import githubIcon from './assets/github-mark-white.svg'

const greeting = 'Hi! ' + (() => {
  switch (new Date().getHours()) {
    case 6:
    case 7:
    case 8:
    case 9:
    case 10:
    case 11:
      return 'Good morning.'
    case 12:
    case 13:
    case 14:
    case 15:
    case 16:
    case 17:
      return 'Good afternoon.'
    default:
      return 'Good evening.'
  }
})()
</script>

<template>
  <header>
    <section class="left welcome">
      <p class="greet">{{ greeting }}</p>
      <p>I'm <span class="iris">Iris</span><span class="rainbow">!</span>
      </p>
    </section>
    <section class="right">
      <nav>
        <RouterLink :to="{ name: 'home' }">Home</RouterLink>
        <RouterLink :to="{ name: 'about' }">About</RouterLink>
        <RouterLink :to="{ name: 'cv' }">CV</RouterLink>
        <RouterLink :to="{ name: 'projects' }">Projects</RouterLink>
      </nav>
    </section>
  </header>

  <br>

  <!-- #content needed for FooterController -->
  <section id="content">
    <FadeController>
      <RouterView />
    </FadeController>
  </section>

  <FooterController>
    <br>
    <hr>
    <nav class="social">
      <a href="https://github.com/eyemotif/cv"><img class="icon github" :src="githubIcon"></a>
    </nav>
  </FooterController>
</template>

<style scoped>
header {
  overflow: auto;
}

header p {
  margin-top: 0;
  margin-bottom: 0.5em;
}

header nav>* {
  margin: 0.2em;
  display: block;
}

header .welcome {
  font-family: Hornbill;
  text-shadow: 0.25rem 0.25rem black;
  font-size: 4rem;
  color: #FFDD55;
}

header .left {
  float: left;
  width: 90%
}

header .right {
  float: right;
  width: 10%;
}

header .greet {
  font-size: 2rem;
}

header .iris {
  color: #cf86e3;
}

header .rainbow {
  text-shadow: none;
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
}

footer .icon {
  height: 32px;
}

[aria-current] {
  font-weight: bold;
}
</style>
