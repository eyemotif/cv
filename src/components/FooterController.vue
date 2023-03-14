<script setup lang="ts">
import { onMounted, watch } from 'vue'
import { useRoute } from 'vue-router'

onMounted(() => {
    const route = useRoute()
    const footer = document.querySelector('footer')!

    function moveFooter() {
        setTimeout(() => {
            footer.style.top = `${document.querySelector('#content')!.getBoundingClientRect().bottom}px`
        }, 20)
    }

    watch(() => route.fullPath, moveFooter)
    addEventListener('resize', moveFooter)

    moveFooter()
})
</script>

<template>
    <footer>
        <slot></slot>
    </footer>
</template>

<style scoped>
footer {
    position: absolute;
    transition: top 0.5s;
}
</style>
