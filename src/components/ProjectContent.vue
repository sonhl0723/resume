<template>
  <a>{{ props.projectMdPath }}</a>
</template>

<script setup>
    import { defineProps } from 'vue';

    const props = defineProps({
        projectMdPath: {
            type: String,
            default: ''
        }
    })
</script>