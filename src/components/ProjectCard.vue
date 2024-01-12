<template>
  <el-card
    shadow="hover"
  >
    <el-image
      :src="parseImgUrl(info.card_img)"
      fit="scale-down"
    >
      <div class="p-5">
        <el-text>
          {{ props.info.card_title }}
        </el-text>
        <div class="flex space-x-2">
          <el-tag class="ml-2">
            HTML
          </el-tag>
          <el-tag class="ml-2">
            CSS
          </el-tag>
          <el-tag class="ml-2">
            Javascript
          </el-tag>
        </div>
        <el-text>
          {{ info.card_description }}
        </el-text>
      </div>
    </el-image>
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