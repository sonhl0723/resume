<template>
  <div class="app-wrapper">
    <DefaultLayout>
      <router-view />
    </DefaultLayout>
  </div>
</template>

<script setup>
import { useRoute } from 'vue-router';
import { onBeforeMount, onMounted, ref, watchEffect } from 'vue';
import DefaultLayout from '@/layouts/DefaultLayout.vue'
import { ElLoading } from 'element-plus'

const route = useRoute();
const layout = ref(null);
const loading = ref(null);

onBeforeMount(() => {
  loading.value = ElLoading.service({
    lock: true,
    text: "Loading...",
    background: 'rgba(0,0,0,0,7)',
  })
})

onMounted(() => {
  loading.value.close()
})

watchEffect(() => {
  layout.value = route.meta.layout
})
</script>