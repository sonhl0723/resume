<template>
  <el-row :gutter="el_gutter">
    <el-col
      v-for="p in project_list"
      :key="p.name"
      :span="el_col"
      style="padding-bottom: 1rem;"
    >
      <el-link
        v-if="p.card_view_enable"
        :underline="false"
        style="display: flex;"
        @click="routing(p.identifier)"
      >
        <ProjectCard
          :info="p"
          :is-mobile="props.isMobile"
        />
      </el-link>
    </el-col>
  </el-row>
</template>

<script setup>
  import { defineProps, watchEffect, ref } from 'vue';
  import { useRouter } from 'vue-router'
  import { projects } from '@/stores/project'

  const router = useRouter()

  const project_list = projects().getProjectList
  const props = defineProps({
      isMobile: {
        type: Boolean,
        default: false
      }
  })

  const routing = (p) => {
    router.push({
      name: p
    })
  }

  const el_gutter = ref(20)
  const el_col = ref(8)

  watchEffect(() => {
    if (props.isMobile) {
      el_gutter.value = 0
      el_col.value = 24
    }
    else {
      el_gutter.value = 12
      el_col.value = 8
    }
  })
</script>