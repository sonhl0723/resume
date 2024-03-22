<template>
  <el-menu
    :default-active="activeIndex"
    mode="horizontal"
    :ellipsis="false"
    @select="handleSelect"
  >
    <el-menu-item index="resume">
      Resume
    </el-menu-item>
    <el-menu-item index="projects">
      Projects
    </el-menu-item>
  </el-menu>
</template>

<script setup>
import { useRouter } from 'vue-router'
import { ref } from 'vue';

const activeIndex = ref('resume')
const router = useRouter()

const handleSelect = (path) => {
  if(path != null) activeIndex.value = path
  
  router.push({
    name: path
  })
}
</script>