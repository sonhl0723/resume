<template>
  <div class="r-component">
    <el-descriptions
      title="기술 스택"
    />
    <el-collapse
      v-model="allActive"
      style="margin-top: -1rem;"
    >
      <el-row :gutter="20">
        <el-col :span="12">
          <el-collapse-item
            title="Language"
            name="Language"
          >
            <div v-for="item in languages">
              <el-image
                :src="item"
              />
            </div>
          </el-collapse-item>
        </el-col>
        <el-col :span="12">
          <el-collapse-item
            title="Database"
            name="Database"
          >
            <div v-for="item in databases">
              <el-image
                :src="item"
              />
            </div>
          </el-collapse-item>
        </el-col>
        <el-col :span="12">
          <el-collapse-item
            title="Middleware & Framework"
            name="Middleware & Framework"
          >
            <div v-for="item in middlewares_framework">
              <el-image
                :src="item"
              />
            </div>
          </el-collapse-item>
        </el-col>
        <el-col :span="12">
          <el-collapse-item
            title="Tool"
            name="Tool"
          >
            <div v-for="item in tools">
              <el-image
                :src="item"
              />
            </div>
          </el-collapse-item>
        </el-col>
      </el-row>
    </el-collapse>
  </div>
</template>
  
  <script setup>
  import { ref } from 'vue';

  const allActive = ref(["Language", "Database", "Middleware & Framework", "Tool"])

  const languages = [
    "https://img.shields.io/badge/Python-14354C?style=flat&logo=python&logoColor=white",
    "https://img.shields.io/badge/Java-ED8B00?style=flat&logo=openjdk&logoColor=white",
    "https://img.shields.io/badge/C%2B%2B-00599C?style=flat&logo=c%2B%2B&logoColor=white"
  ]
  
  const databases = [
      "https://img.shields.io/badge/MySQL-005C84?style=flat&logo=mysql&logoColor=white",
      "https://img.shields.io/badge/PostgreSQL-316192?style=flat&logo=postgresql&logoColor=white"
  ]

  const middlewares_framework = [
    "https://img.shields.io/badge/Jenkins-D24939?style=flat&logo=Jenkins&logoColor=white",
    "https://img.shields.io/badge/Nexus3-1B1C30?style=flat&logo=Sonatype&logoColor=white",
    "https://img.shields.io/badge/Spring Boot-6DB33F?style=flat&logo=springboot&logoColor=white",
    "https://img.shields.io/badge/Spring Security-6DB33F?style=flat&logo=springsecurity&logoColor=white",
    "https://img.shields.io/badge/Vue.js 3-4FC08D?style=flat&logo=vuedotjs&logoColor=white"
  ]

  const tools = [
    "https://img.shields.io/badge/GIT-E44C30?style=flat&logo=git&logoColor=white",
    "https://img.shields.io/badge/Jira-0052CC?style=flat&logo=Jira&logoColor=white"
  ]
  </script>

<style scoped>
  .el-image {
    height: 24.5px;
  }
</style>