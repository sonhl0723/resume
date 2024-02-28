<template>
  <div v-if="markdown_content != null">
    <markdown-it-vue
      :content="markdown_content"
      :options="markdownIt"
    />
  </div>
</template>

<script setup>
    import { defineProps } from 'vue';
    import MarkdownItVue from 'markdown-it-vue';
    import axios from 'axios'
    import { onMounted, ref } from 'vue';

    const props = defineProps({
        projectMdPath: {
            type: String,
            default: ''
        }
    })

    const markdown_content = ref(null)
    const markdownIt = {
        html: true
    }

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