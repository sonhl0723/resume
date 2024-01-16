<template>
  <div class="app-wrapper">
    <DefaultLayout>
      <router-view v-if="layout==null" />
      <ProjectLayout v-if="layout==ProjectLayout" />
    </DefaultLayout>
  </div>
</template>

<script setup>
import { useRoute } from 'vue-router';
import { ref, watchEffect } from 'vue';
import DefaultLayout from '@/layouts/DefaultLayout.vue'
import ProjectLayout from './layouts/ProjectLayout.vue'


const route = useRoute();
const layout = ref(null);

watchEffect(() => {
  layout.value = route.meta.layout
  console.log(layout.value)
})
</script>