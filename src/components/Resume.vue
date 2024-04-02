<template>
  <Information />
  <div class="r-component">
    <el-row
      :gutter="20"
    >
      <el-col
        :span="12"
        style="padding-right: 1.5rem;"
      >
        <Education />
      </el-col>
      <el-col
        :span="12"
        style="padding-left: 1.5rem;"
      >
        <Military />
      </el-col>
    </el-row>
  </div>
  <Career />
  <Stack />
  <Certificate />
</template>

<script setup>
</script>