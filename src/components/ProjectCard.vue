<template>
  <el-card
    shadow="hover"
    style="height: 320px;"
  >
    <el-image
      :src="info.card_img"
      style="width: 250px; height: 150px; margin: 0 0 0.5rem 0;"
    />
    <div class="p-5">
      <el-text style="font-weight: bolder; font-size: 18px; color: #215015;">
        {{ props.info.card_title }}
      </el-text>
      <div
        class="flex space-x-2 card-text"
        style="margin: 0.5rem 0 0.7rem 0;"
      >
        <el-tag
          v-for="t in props.info.card_tag"
          :key="t"
          class="ml-2"
        >
          {{ t }}
        </el-tag>
      </div>
      <el-text style="color: #000000;">
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
        }
    })
</script>