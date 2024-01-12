<template>
  <el-row :gutter="20">
    <el-col
      v-for="project in project_list"
      :span="6"
      style="padding-bottom: 1rem;"
    >
      <el-link
        v-if="project.view"
        :underline="false"
        style="display: flex;"
        @click="routing(project.name)"
      >
        <el-card
          shadow="hover"
        >
          <p>
            {{ project.name }}
          </p>
        </el-card>
      </el-link>
    </el-col>
  </el-row>
</template>

<script setup>
  import { useRouter } from 'vue-router'

  const router = useRouter()

  const project_list = [
    {
      name: 'vehicle-counting',
      view: true
    },
    {
      name: 'raspgpt',
      view: true
    },
    {
      name: 'smart-army',
      view: true
    },
    {
      name: 'smart-army',
      view: false
    },
    {
      name: 'smart-army',
      view: false
    }
  ]

  const routing = (p) => {
    router.push({
      name: p
    })
  }
</script>