<template>
  <ProjectDescription 
    :project-description="summary_info"
  />
  <ProjectContent />
</template>

<script setup>
  import { onBeforeMount, ref } from 'vue';
  import { useRouter } from 'vue-router'
  import { projects } from '@/stores/project'
  import ProjectDescription from '@/components/ProjectDescription.vue'
  import ProjectContent from '@/components/ProjectContent.vue'

  const router = useRouter()
  const project_info = projects().getProjectInfo
  const summary_info = ref(null)

  onBeforeMount(() => {
    summary_info.value = (project_info[router.currentRoute.value.name])
  })
</script>