<template>
    <div>
        <swipe class="my-swipe">
        <swipe-item class="slide1" ></swipe-item>
        <swipe-item class="slide2"></swipe-item>
        <swipe-item class="slide3"></swipe-item>
    </swipe>

    <!-- <swiper class="my-swiper">
        <swiper-slide></swiper-slide>
        <swiper-slide></swiper-slide>
        <swiper-slide></swiper-slide>
    </swiper> -->

    </div>
    
</template>

<script>
import 'vue-swipe/dist/vue-swipe.css';
import {Swipe,SwipeItem} from "vue-swipe";
// import "swiper/dist/css/swiper.css";
// import {swiper,swiperSlide} from "vue-awesome-swiper";
import axios from "axios";
// import shinian from "../assets/img/shinian.jpg";
// import weiwei from "../assets/img/weiwei.jpg";
// import hongloumeng from "../assets/img/hongloumeng.jpg";
export default {
    // name:"Carouse1",
    data () {
        return {
            // slides:[shinian,weiwei,hongloumeng],
            // swiperOption:{
            //     autoplay:true,
            //     loop:true,
            //     pagination:{
            //         el:'.swiper-pagination',
            //         clickable:true,
            //     }
            // }
            
        }
    },
    created() {
        this.$emit('switchTab','book');
        // axios.get("/data/bookdata.json").then(res =>{
        //     this.$store.commit('setBookList',res.data.photoData);
            // console.log(this.$store.commit('setBookList',res.data.photoData));
        // })
    },
    methods: {
        // gotoDetail(index){
        //     this.$router.push(`/bookdata/${index}`)
        // }
    },
    components:{
        Swipe:Swipe,
        "swipe-item":SwipeItem,
        // swiper,
        // swiperSlide
    },
    computed:{
        // swiper(){
        //     return this.$refs.mySwiper.swiper;
        // }
    },
    mounted() {
        // console.log("this id current swiper instance object",this.swiper);
    },
}
</script>

<style lang="scss" scoped>
.my-swipe{
    height: 4rem;
    color: #fff;
    font-size: 0.6rem;
    text-align: center;
.slide1{
    background-color: #ffbb66;
    color: #fff;
    img{

    }
}
.slide2{
    background-color: #ff8888;
    color: #000;
    img{

    }
}
.slide3{
    background-color: #ffb3ff;
    // background: url();
    color: #fff;
}
}

</style>

