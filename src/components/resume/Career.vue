<template>
  <div
    class="r-component"
  >
    <el-descriptions
      title="경력 사항"
    />
    <el-steps
      direction="vertical"
      :active="1"
      style="--el-step__description-white-space: pre-line"
    >
      <el-step
        :icon="CircleCheck"
        :title="ngl.title"
        :description="ngl.description"
      />
      <el-step
        :icon="CircleCheck"
        :title="ktds.title"
        :description="ktds.description"
      />
    </el-steps>
  </div>
</template>
  
<script setup>
import { CircleCheck } from '@element-plus/icons-vue'

const ngl = {
  "title": "NGL Transportation",
  "description": `2022.09~2022.12
  인턴
  
  - 데이터베이스 설계 - PostgreSQL
  - 프론트엔드 개발 - React.js`
}

const ktds = {
  "title": "KT ds",
  "description": `2023.01~
  정규직

  IoT 플랫폼 개발 - Spring Boot, Netty, 
  웹 개발 - BackEnd(Spring Boot, PostgreSQL, Nexus3)`
}

</script>