<template>
  <div
    :style="{
      boxShadow: `--el-box-shadow-dark`
    }"
  >
    <el-descriptions
    title="Career" />
    <el-steps
    direction="vertical"
    :active="1"
    style="--el-step__description-white-space: pre-line">
      <el-step
      :icon="CircleCheck"
      :title="ngl.title"
      :description="ngl.description" />
      <el-step
      :icon="CircleCheck"
      :title="ktds.title"
      :description="ktds.description" />
    </el-steps>
  </div>
</template>
  
<script setup>
import { CircleCheck } from '@element-plus/icons-vue'

const ngl = {
  "title": "NGL Transportation",
  "description": `2022.09~2022.12
  데이터베이스 설계
  프론트엔드 개발`
}

const ktds = {
  "title": "KT ds",
  "description": `2023.01~
  IoT 플랫폼 개발
  웹 개발`
}

</script>