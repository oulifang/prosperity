<template>
  <div id="app"> 
  <CommonHeader :selectMenu="selectMenu"></CommonHeader>
    <router-view class="content"/>
   <CommonFooter @changeTitle="changeTitle" :menuList="menuList"></CommonFooter>
  </div>
</template>

<script>
  import CommonHeader from '@/components/CommonHeader.vue';
  import CommonFooter from '@/components/CommonFooter.vue';
  export default{
     comments:{
      CommonHeader,
      CommonFooter
     },
     methods: {
    changeTitle(menu){
      this.selectMenu = menu;
        }
     },
     data(){
       return{
         menuList:[
           {
             title:'电影',
             bgColor:'#e54847',
             name:'movie',
             path:'/movie'
           },{
             title:'音乐',
             bgColor:'#e54847',
             name:'music',
             path:'/music'
           },{
             title:'书籍',
             bgColor:'#e54847',
             name:'book',
             path:'/book'
           },{
             title:'图片',
             bgColor:'#e54847',
             name:'photo',
             path:'/photo'
           }
         ],
         selectMenu:{} //当前选中的菜单
       }
     }
  }
 
</script>
<style lang="scss">
.content{
  margin: 1rem 0;
}
</style>
