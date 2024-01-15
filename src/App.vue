<template>
  <div class="app-wrapper">
    <DefaultLayout>
      <!-- <component :is="layout"> -->
      <router-view />
      <!-- </component> -->
    </DefaultLayout>
  </div>
</template>

<script setup>
import { useRoute } from 'vue-router';
import { ref, watchEffect } from 'vue';
import DefaultLayout from '@/layouts/DefaultLayout.vue'


// const route = useRoute();
// const layout = ref(null);

// watchEffect(() => {
//   layout.value = route.meta.layout
// })
</script>