<template>
  <el-row :gutter="20">
    <el-col
      :span="12"
      :offset="6"
    >
      <el-card class="box-card">
        <el-row
          v-for="(value, name, index) in summary_info"
          :key="index"
          class="description-row"
          :span="24"
        >
          <el-col
            :span="8"
            class="description-col-title"
          >
            {{ name }}
          </el-col>
          <el-col
            v-if="name!='기술 스택'"
            :span="16"
            class="description-col-content"
          >
            {{ value }}
          </el-col>
          <el-col
            v-else
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
    </el-col>
  </el-row>
</template>

<script setup>
  import { onMounted, ref } from 'vue';
  import { useRouter } from 'vue-router'
  import { projects } from '@/stores/project'

  const router = useRouter()
  const project_info = projects().getProjectInfo
  const summary_info = ref(null)

  onMounted(() => {
    summary_info.value = (project_info[router.currentRoute.value.name])
  })
</script>

<style scoped>
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