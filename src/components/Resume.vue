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
import Career from '@/components/resume/Career.vue';
import Certificate from '@/components/resume/Certificate.vue';
import Education from '@/components/resume/Education.vue';
import Military from '@/components/resume/Military.vue';
import Information from '@/components/resume/Information.vue';
import Stack from '@/components/resume/Stack.vue';

</script>