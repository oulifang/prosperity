<template>
  <div id="app">
    <CommonHeader :selectMenu="selectMenu"></CommonHeader>
    <router-view class="content" @switchTab="switchTab"/>
    <CommonFooter :footerBgColor="selectMenu.bgColor" @changeTitle="changeTitle" :menuList="menuList"></CommonFooter>
  </div>
</template>

<script>
import CommonHeader from '@/components/CommoHeader.vue';
import CommonFooter from '@/components/CommoFooter.vue';
export default {
  components: {
    CommonHeader,
    CommonFooter
  },
  methods:{
    changeTitle(menu){
      this.selectMenu = menu;
    },
    switchTab(menuName){
      this.menuList.forEach(menu => {
        if(menu.name === menuName){
          this.selectMenu=menu;
        }
      });
    }
  },
  data(){
    return{
      menuList:[
        {
          title:'电影',
          baColor:'#e54847',
          name:'movie',
          path:'/movie'
        },{
          title:'音乐',
          bgColor:'#009688',
          name:'music',
          path:'/music'
        },{
          title:'书籍',
          bgColor:'#795548',
          name:'book',
          path:'/book'
        },{
          title:'图片',
          bgColor:'#3f51b5',
          name:'photo',
          path:'/photo'
        }
      ],
      selectMenu:{}
    };
  },
  created() {
    console.log(this.$route);
  },
}
</script>


<style lang="scss">
.content{
  margin: 1rem 0;
}
</style>
