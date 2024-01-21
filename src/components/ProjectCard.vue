<template>
  <el-card
    shadow="hover"
  >
    <el-image
      :src="parseImgUrl(info.card_img)"
      style="width: 350px%; height: 150px;"
    />
    <div class="p-5">
      <el-text>
        {{ props.info.card_title }}
      </el-text>
      <div class="flex space-x-2 card-text">
        <el-tag
          v-for="t in props.info.card_tag"
          :key="t"
          class="ml-2"
        >
          {{ t }}
        </el-tag>
      </div>
      <el-text>
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

    const parseImgUrl = (i_url) => {
        return new URL(i_url, import.meta.url)
    }
</script>