<template>
  <el-card
    shadow="hover"
    style="height: max-content;"
  >
    <el-image
      :src="info.card_img"
      style="width: 60%; height: 150px; margin: 0 0 0.5rem 0;"
    />
    <div class="proj_description">
      <el-text style="font-weight: bolder; font-size: 18px; color: #215015; margin-bottom: 0.5rem">
        {{ props.info.card_title }}
      </el-text>
      <div
        v-if="!props.isMobile"
        class="flex space-x-2 card-text"
      >
        <el-tag
          v-for="t in props.info.card_tag"
          :key="t"
          class="ml-2"
        >
          {{ t }}
        </el-tag>
      </div>
      <el-text style="color: #000000; margin-top: 0.7rem;">
        {{ props.info.card_description }}
      </el-text>
    </div>
  </el-card>
</template>

<script setup>
  import { defineProps } from 'vue';

  const props = defineProps({
      info: {
        type: Object,
        default: new Object
      },
      isMobile: {
        type: Boolean,
        default: false
      }
  })
</script>

<style scoped>
.proj_description {
  display: grid;
}
</style>