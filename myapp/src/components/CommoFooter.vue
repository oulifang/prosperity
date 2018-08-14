<template>
    <ul class="footer" :style="{background:bgColor}">
        <li class="footer-menu" v-for="(menu, index) in menuList" :key="index">
            <router-link @click.native="selectMenu(menu)" :to="menu.path">{{menu.title}}</router-link>
        </li>
    </ul>
</template>
<script>
export default {
    data(){
        return{
            bgColor:""
        };
    },
    props:["menuList"],
    methods:{
        selectMenu(menu){
            this.bgColor = menu.bgColor;
            this.$emit('changeTitle',menu);
        }
    }
};
</script>
