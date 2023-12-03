<template>
  <div
    :style="{
      boxShadow: `--el-box-shadow-dark`,
    }"
  >
    <el-steps direction="vertical">
      <el-step :icon="CircleCheck">
        test1
      </el-step>
      <el-step :icon="CircleCheck">
        test2
      </el-step>
      <el-step :icon="CircleCheck">
        test3
      </el-step>
      <el-step :icon="CircleCheck">
        test4
      </el-step>
    </el-steps>
  </div>
</template>
  
<script setup>
import { CircleCheck } from '@element-plus/icons-vue'
</script>