<script setup lang="ts">
import { onMounted, watch } from 'vue'
import { useRoute } from 'vue-router'

onMounted(() => {
    const route = useRoute()

    function triggerFadeIn() {
        console.log('fade')
        const content = document.querySelector<HTMLElement>('.fade')!
        content.style.animation = 'none'
        content.offsetHeight
        content.style.animation = ''
    }

    watch(() => route.fullPath, triggerFadeIn)
})
</script>

<template>
    <div class="fade">
        <slot></slot>
    </div>
</template>

<style scoped>
.fade {
    animation: fade 2s;
}

@keyframes fade {
    0% {
        opacity: 0;
    }

    100% {
        opacity: 1;
    }
}
</style>
