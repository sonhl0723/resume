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
            title="Middleware"
            name="Middleware"
          >
            <div v-for="item in middlewares">
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

  const allActive = ref(["Language", "Database", "Middleware", "Tool"])

  const languages = [
    "https://img.shields.io/badge/Python-14354C?style=for-the-badge&logo=python&logoColor=white",
    "https://img.shields.io/badge/Java-ED8B00?style=for-the-badge&logo=openjdk&logoColor=white",
    "https://img.shields.io/badge/C%2B%2B-00599C?style=for-the-badge&logo=c%2B%2B&logoColor=white"
  ]
  
  const databases = [
      "https://img.shields.io/badge/MySQL-005C84?style=for-the-badge&logo=mysql&logoColor=white",
      "https://img.shields.io/badge/PostgreSQL-316192?style=for-the-badge&logo=postgresql&logoColor=white"
  ]

  const middlewares = [
    "https://img.shields.io/badge/Jenkins-D24939?style=for-the-badge&logo=Jenkins&logoColor=white",
    "https://img.shields.io/badge/Nexus3-1B1C30?style=for-the-badge&logo=Sonatype&logoColor=white"
  ]

  const tools = [
    "https://img.shields.io/badge/GIT-E44C30?style=for-the-badge&logo=git&logoColor=white",
    "https://img.shields.io/badge/Jira-0052CC?style=for-the-badge&logo=Jira&logoColor=white"
  ]
  </script>