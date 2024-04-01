<template>
  <markdownContent />
</template>

<script setup>
    import { defineAsyncComponent } from 'vue';
    import { useRouter } from 'vue-router'
    import vehicleCounting from '@/assets/projects_md/vehicle_counting.md';
    import raspGpt from '@/assets/projects_md/rasp_gpt.md';
    import smartArmy from '@/assets/projects_md/smart_army.md';

    const router = useRouter()

    const markdownContent = defineAsyncComponent(() => {
        return new Promise((res) => {
            switch(router.currentRoute.value.name) {
                case 'vehicle-counting':
                    res(vehicleCounting)
                    break
                case 'raspgpt':
                    res(raspGpt)
                    break
                case 'smart-army':
                    res(smartArmy)
                    break
            }
        })
    })
</script>

<style scoped>
    .project-content {
        text-align: left;
    }
</style>