<template>
  <div class="r-component">
    <el-descriptions
      title="자격증"
    />
    <el-row :gutter="el_gutter">
      <el-col
        :span="el_col"
      >
        <el-card
          shadow="hover"
          body-class="cert-card-body"
        >
          <div class="title">
            정보처리기사
          </div>
          <div class="content">
            2023.09.01 ~ 9999.99.99
            <el-divider />
            23202120216W
            <el-divider />
            한국정보과학회
          </div>
        </el-card>
      </el-col>
      <el-col
        :span="el_col"
      >
        <el-card
          shadow="hover"
          body-class="cert-card-body"
        >
          <div class="title">
            oPIC (IM)
          </div>
          <div class="content">
            2023.09.16 ~ 2025.09.15
            <el-divider />
            2A8352225312
            <el-divider />
            ACTFL
          </div>
        </el-card>
      </el-col>
      <el-col
        :span="el_col"
      >
        <el-card
          shadow="hover"
          body-class="cert-card-body"
        >
          <div class="title">
            AWS Certified Solutions Architect <br> Associate
          </div>
          <div class="content">
            2024.06.22 ~ 2027.06.22
            <el-divider />
            ac9abaabf5fc41cb88fbe5a7f6a66625
            <el-divider />
            Amazon Web Services Training and Certification
          </div>
        </el-card>
      </el-col>
    </el-row>
  </div>
</template>
  
<script setup>
  import { defineProps, ref, watchEffect } from 'vue';

  const props = defineProps({
      isMobile: {
        type: Boolean,
        default: false
      }
  })
  const el_gutter = ref(12)
  const el_col = ref(8)

  watchEffect(() => {
    if (props.isMobile) {
      el_gutter.value = 0
      el_col.value = 24
    }
    else {
      el_gutter.value = 12
      el_col.value = 8
    }
  })
</script>

<style scoped>
  .el-col {
    margin-top: 0.5rem;
  }
  .title {
    width: 100%;
    margin-bottom: 1rem;
  }
  .content {
    width: 100%;
    display: inline-block;
    text-align: left;
    line-height: 2;
  }
  .el-card:hover {
    box-shadow: 0 0 10px 0.5px #215015;
  }
</style>