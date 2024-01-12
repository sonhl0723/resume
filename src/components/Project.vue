<template>
  <component :is="router.currentRoute.value.name == 'projects' ? ProjectList : null" />
  <router-view />
</template>

<script setup>
    import ProjectList from '@/components/ProjectList.vue'
    import { useRouter } from 'vue-router'

    const router = useRouter()
</script>