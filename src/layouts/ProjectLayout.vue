<template>
  <a>test</a>
</template>

<script setup>
  import { onMounted, ref } from 'vue';
  import { useRouter } from 'vue-router'
  import { projects } from '@/stores/project'

  const router = useRouter()
  const project_info = projects().getProjectInfo
  const summary_info = ref(null)

  onMounted(() => {
    summary_info.value = project_info[router.currentRoute.value.name]
    console.log(summary_info.value)
  })
</script>