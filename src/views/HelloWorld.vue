<script setup lang="ts">
import useMenuStore from '@/stores/menu'
import useUserStore from '@/stores/user'

const appTitle = import.meta.env.VITE_APP_TITLE

const userStore = useUserStore()
const menuStore = useMenuStore()

userStore.user.name = 'laixiaofei'
</script>

<template>
  <div class="flex flex-col gap-[20px] items-center m-[10px_20px] p-[20px] text-[var(--primary-color)] font-bold rounded border-2 leading-7 shadow">
    <span>{{ appTitle }}</span>
    <BaseSvgIcon name="vue" class="cursor-pointer" @click="console.log('BaseSvgIcon test')" />
    <BaseSvgIcon name="love" />
    <div>
      <BaseAddButton @click="console.log('BaseAddButton test')" />
      <BaseSearchButton @click="console.log('BaseSearchButton test')" />
      <BaseRefreshButton @click="console.log('BaseRefreshButton test')" />
      <BaseDownloadButton @click="console.log('BaseDownloadButton test')" />
      <BaseUploadButton @click="console.log('BaseUploadButton test')" />
      <el-button v-hasRole="['admin']"> 测试指令 </el-button>
    </div>
    <div class="flex">
      {{ userStore.user.name }}
    </div>
    <div class="flex">
      {{ menuStore.menu.name }}
    </div>
  </div>
</template>

<style scoped lang="scss">
.text {
  color: var(--base-text-color);
}
</style>
