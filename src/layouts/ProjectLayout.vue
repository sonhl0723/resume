<template>
  <ProjectDescription 
    :project-description="summary_info"
  />
  <ProjectContent 
    :project-md-path="router.currentRoute.value.name+'.md'"
  />
</template>

<script setup>
  import { onMounted, ref } from 'vue';
  import { useRouter } from 'vue-router'
  import { projects } from '@/stores/project'
  import ProjectDescription from '@/components/ProjectDescription.vue'
  import ProjectContent from '@/components/ProjectContent.vue'

  const router = useRouter()
  const project_info = projects().getProjectInfo
  const summary_info = ref(null)


  onMounted(() => {
    summary_info.value = (project_info[router.currentRoute.value.name])
  })
</script>