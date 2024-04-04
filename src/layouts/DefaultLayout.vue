<template>
  <BaseHeader />
  <div class="container">
    <div class="contents-wrapper">
      <slot />
    </div>
    <el-backtop
      target=".contents-wrapper"
      :visibility-height="-1"
    />
  </div>
  <BaseFooter />
</template>
    
<script setup>
  import { ElBacktop } from 'element-plus';
  import BaseHeader from '../components/BaseHeader.vue';
</script>