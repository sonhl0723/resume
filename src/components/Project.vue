<template>
  <component
    :is="router.currentRoute.value.name == 'projects' ? ProjectList : ProjectLayout"
    :is-mobile="props.isMobile"
  />
  <router-view />
</template>

<script setup>
  import { defineProps } from 'vue';
  import ProjectList from '@/components/ProjectList.vue'
  import ProjectLayout from '../layouts/ProjectLayout.vue';
  import { useRouter } from 'vue-router'

  const router = useRouter()

  const props = defineProps({
      isMobile: {
        type: Boolean,
        default: false
      }
  })
</script>