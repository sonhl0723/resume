<template>
  <component :is="router.currentRoute.value.name == 'projects' ? ProjectList : ProjectLayout" />
  <router-view />
</template>

<script setup>
    import ProjectList from '@/components/ProjectList.vue'
    import ProjectLayout from '../layouts/ProjectLayout.vue';
    import { useRouter } from 'vue-router'

    const router = useRouter()
</script>