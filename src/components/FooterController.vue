<script setup lang="ts">
import { onMounted, watch } from 'vue'
import { useRoute } from 'vue-router'

onMounted(() => {
    const route = useRoute()
    const footer = document.querySelector('footer')!

    function moveFooter() {
        setTimeout(() => {
            console.log(footer.style.top = `${document.querySelector('#content')!.getBoundingClientRect().bottom}px`)

        }, 10)
    }
    watch(() => route.fullPath, moveFooter)
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
    bottom: 0;
    position: absolute;
    transition: top 0.5s;
}
</style>
