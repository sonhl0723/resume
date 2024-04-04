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
            2023.09.01 ~
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