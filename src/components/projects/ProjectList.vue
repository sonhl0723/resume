<template>
  <!-- <a>ProjectList</a> -->
  <el-row :gutter="20">
    <el-col
      v-for="project in project_list"
      :span="6"
      style="padding-bottom: 1rem;"
    >
      <el-link
        href="/projects/vehicle-counting"
        :underline="false"
        style="display: flex;"
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
const curr_path = window.location.pathname

const project_list = [
  {
    name: '/vehicle-counting',
    path: '/projects/vehicle-counting',
    view: true
  },
  {
    name: '/raspgpt',
    path: curr_path+'raspgpt',
    view: true
  },
  {
    name: '/smart-army',
    path: curr_path+'smart-army',
    view: true
  },
  {
    name: '/smart-army',
    path: curr_path+'smart-army',
    view: true
  },
  {
    name: '/smart-army',
    path: curr_path+'smart-army',
    view: true
  }
]
</script>