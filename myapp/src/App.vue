<template>
  <div id="app">
    <CommonHeader :selectMenu="selectMenu"></CommonHeader>
    <router-view class="content"/>
    <CommonFooter @changeTitle="changeTitle" :menuList="menuList"></CommonFooter>
  </div>
</template>

<script>
// import CommonHeader from '@/components/CommoHeader.vue';
export default {
  
}
</script>


<style lang="scss">

</style>
