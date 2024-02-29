<template>
  <markdownContent />
</template>

<script setup>
    import { defineProps, defineAsyncComponent } from 'vue';

    const props = defineProps({
        projectMdPath: {
            type: String,
            default: ''
        }
    })
    const markdownContent = defineAsyncComponent(() => import(props.projectMdPath))
</script>

<style scoped>
    .project-content {
        text-align: left;
    }
</style>