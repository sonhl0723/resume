<template>
  <div class="app-wrapper">
    <DefaultLayout>
      <router-view :is-mobile="isMobile" />
    </DefaultLayout>
  </div>
</template>

<script setup>
  import { useRoute } from 'vue-router';
  import { onBeforeMount, onBeforeUnmount, onMounted, ref, watchEffect } from 'vue';
  import DefaultLayout from '@/layouts/DefaultLayout.vue'
  import { ElLoading } from 'element-plus'

  const route = useRoute();
  const layout = ref(null);
  const loading = ref(null);
  const isMobile = ref(screen.width <= 700)

  function detectWindowWidth() {
    isMobile.value = screen.width <= 700
  }

  onBeforeMount(() => {
    window.addEventListener("resize", detectWindowWidth)
    
    loading.value = ElLoading.service({
      lock: true,
      text: "Loading...",
      background: 'rgba(0,0,0,0,7)',
    })
  })

  onMounted(() => {
    loading.value.close()
  })

  onBeforeUnmount(() => {
    window.removeEventListener("resize", detectWindowWidth)
  })

  watchEffect(() => {
    layout.value = route.meta.layout
  })
</script>