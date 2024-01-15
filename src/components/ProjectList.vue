<template>
  <el-row :gutter="20">
    <el-col
      v-for="p in project_list"
      :key="p.name"
      :span="8"
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
        />
      </el-link>
    </el-col>
  </el-row>
</template>

<script setup>
  import { useRouter } from 'vue-router'

  import ProjectCard from '@/components/ProjectCard.vue'
  import { projects } from '@/stores/project'

  const router = useRouter()

  const project_list = projects().getProjectList

  const routing = (p) => {
    router.push({
      name: p
    })
  }
</script>