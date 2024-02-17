<template>
  <Markdown
  v-if="markdown_content != null"
  class="project-content"
  :source="markdown_content" />
</template>

<script setup>
    import { defineProps } from 'vue';
    import Markdown from 'vue3-markdown-it'
    import axios from 'axios'
    import { onMounted, ref } from 'vue';

    const props = defineProps({
        projectMdPath: {
            type: String,
            default: ''
        }
    })

    const markdown_content = ref(null)

    onMounted(() => {
        axios.get(props.projectMdPath).then(response => {
            markdown_content.value = response.data
        })
    })
</script>

<style scoped>
    .project-content {
        text-align: left;
    }
</style>