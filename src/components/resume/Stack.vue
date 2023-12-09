<template>
  <el-descriptions
  title="Stack" />
  <el-collapse
  v-model="allActive">
    <el-collapse-item
    title="Language"
    name="Language">
      <div v-for="item in languages">
        {{ item.tech }} - {{ item.used }}
      </div>
    </el-collapse-item>
    <el-collapse-item
    title="Database"
    name="Database">
      <div v-for="item in databases">
        {{ item.tech }} - {{ item.used }}
      </div>
    </el-collapse-item>
    <el-collapse-item
    title="Middleware"
    name="Middleware">
      <div v-for="item in middlewares">
        {{ item.tech }} - {{ item.used }}
      </div>
    </el-collapse-item>
    <el-collapse-item
    title="Tool"
    name="Tool">
      <div v-for="item in tools">
        {{ item.tech }} - {{ item.used }}
      </div>
    </el-collapse-item>
  </el-collapse>
</template>
  
  <script setup>
  import { ref } from 'vue';

  const allActive = ref(["Language", "Database", "Middleware", "Tool"])

  const languages = [
    {
      "tech": "Python",
      "used": "4"
    },
    {
      "tech": "Java",
      "used": "4"
    },
    {
      "tech": "C++",
      "used": "4"
    }
  ]
  
  const databases = [
    {
      "tech": "MySQL",
      "used": "4"
    },
    {
      "tech": "PostgreSQL",
      "used": "4"
    }
  ]

  const middlewares = [
    {
      "tech": "jenkins",
      "used": "4"
    },
    {
      "tech": "kafka",
      "used": "4"
    }
  ]

  const tools = [
    {
      "tech": "git",
      "used": "4"
    },
    {
      "tech": "jira",
      "used": "4"
    }
  ]
  </script>