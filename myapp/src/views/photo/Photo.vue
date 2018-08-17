<template>
   <ul class="clearfix">
       <li @click="gotoDetail(index)" class="photo" v-for="(photo, index) in $store.state.photoList" :key="photo.src">
           <img :src="photo.src" alt="">
       </li>
   </ul>
</template>

<script>
import axios from "axios";
export default {
    data () {
        return {
            
        }
    },
    created() {
        this.$emit("switchTab","photo");
        axios.get("/data/photodata.json").then(res =>{
            this.$store.commit('setPhotoList',res.data.photoData);
        });
    },
    methods:{
        gotoDetail(index){
            this.$router.push(`/photodetail/${index}`);
        }
    },
}
</script>

<style lang="scss" scoped>
.photo{
    width: 50%;
    float: left;
    margin-bottom: 0.1rem;
    img{
        width: 185px;
        height: 125px;
    }
}
.clearfix::after{
    content:'';
    display: block;
    clear: both;
}
</style>

