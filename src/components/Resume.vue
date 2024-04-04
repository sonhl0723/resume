<template>
  <Information />
  <div
    v-if="!props.isMobile"
    class="r-component"
  >
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
  <div v-else>
    <div class="r-component">
      <Education />
    </div>
    <div class="r-component">
      <Military />
    </div>
  </div>
  <Career />
  <Stack />
  <Certificate :is-mobile="props.isMobile" />
</template>

<script setup>
  import { defineProps } from 'vue';
  import Education from './resume/Education.vue';
  import Military from './resume/Military.vue';

  const props = defineProps({
      isMobile: {
        type: Boolean,
        default: false
      }
  })
</script>