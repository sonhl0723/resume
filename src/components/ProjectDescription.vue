<template>
  <h2 class="project-title">
    {{ projectDescription['제목'] }}
  </h2>
  <el-card class="box-card">
    <el-row
      v-for="(value, name, index) in props.projectDescription"
      :key="index"
      class="description-row"
      :span="24"
    >
      <el-col
        v-if="name!='프로젝트 내용' && name!='제목'"
        :span="8"
        class="description-col-title"
      >
        {{ name }}
      </el-col>
      <el-col
        v-if="name!='기술 스택' && name!='프로젝트 내용' && name!='제목'"
        :span="16"
        class="description-col-content"
      >
        {{ value }}
      </el-col>
      <el-col
        v-else-if="name=='기술 스택'"
        class="description-col-content"
        :span="16"
      >
        <el-tag
          v-for="(stack, s_idx) in value"
          :key="s_idx"
          class="tag-content"
          color="#336837"
        >
          {{ stack }}
        </el-tag>
      </el-col>
    </el-row>
  </el-card>
</template>
  
<script setup>
    import { defineProps } from 'vue';

    const props = defineProps({
        projectDescription: {
            '기간': String,
            '발주처': String,
            '기술 스택': Array,
            '역할': String
        }
    })
</script>
  
<style scoped>
  @media screen and (max-width: 700px) {
    .box-card {
      width: 100% !important;

    }
    .description-col-title {
      padding-left: 0%;
      border-right: 0 !important;
      display: block;
      max-width: max-content;
    }
    .description-col-content {
      display: grid;
      max-width: max-content;
    }
    .description-row {
      display: inherit;
    }
    .p {
      font-size: 14px !important;
    }
  }
  .project-title {
    font-weight: bolder;
    font-size: xx-large;
    text-align: left;
    padding-bottom: 1.6rem;
    color: #215015;
  }
  .box-card {
    margin: 0.7rem 0 3rem 0;
    width: 70%;
  }
  .text-item {
    width: 100%;
  }
  .description-row {
    margin-bottom: 8px;
  }
  
  .description-col-title {
    text-align: left;
    padding-left: 2rem;
    font-weight: bold;
    border-right: 3px solid;
  }
  
  .description-col-content {
    text-align: left;
    padding-left: 2rem;
  }
  
  .tag-content {
    color: #FFFFFF;
    font-weight: normal;
  }
</style>