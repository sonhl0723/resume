<template>
  <div
    class="r-component"
  >
    <el-descriptions
      title="Education"
    />
    <el-timeline>
      <el-timeline-item
        center
        timestamp="2014.03 ~ 2017.02"
        placement="top"
      >
        <el-card body-class="edu-card-body">
          <div class="title">
            충북고등학교
          </div>
        </el-card>
      </el-timeline-item>
      <el-timeline-item
        center
        timestamp="2017.03 ~ 2023.02"
        placement="top"
      >
        <el-card body-class="edu-card-body">
          <div class="title">
            한양대학교 ERICA 캠퍼스
          </div>
          <div class="content">
            <p>전공&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;:&nbsp;컴퓨터공학</p>
            <p>학점&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;:&nbsp;3.91 / 4.5</p>
            <p>전공학점&nbsp;:&nbsp;4.25 / 4.5</p>
          </div>
        </el-card>
      </el-timeline-item>
    </el-timeline>
  </div>
</template>
  
<script setup>
import { CircleCheck } from '@element-plus/icons-vue'
</script>