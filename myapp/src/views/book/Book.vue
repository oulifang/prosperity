<template>
    <div>
        <swipe class="my-swipe">
        <swipe-item class="slide1" ></swipe-item>
        <swipe-item class="slide2"></swipe-item>
        <swipe-item class="slide3"></swipe-item>
        <swipe-item class="slide4"></swipe-item>
        <!-- <swipe-item class="slide5"></swipe-item>
        <swipe-item class="slide6"></swipe-item>
        <swipe-item class="slide7"></swipe-item>
        <swipe-item class="slide8"></swipe-item> -->
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
    position: absolute;
    left: 0;
    right: 0;
    top: 1rem;
    bottom: 1rem;
    width: 100%;
    height: 7rem;
    color: #fff;
    font-size: 0.6rem;
    text-align: center;
.slide1{
    background:url(http://images.zxhsd.com/photo/book_b//C/02216/3518338-fm-b.jpg);
    color: #fff;
    width: 100%;
    height: 5rem;
    background-size: cover;
}
.slide2{
    background:url(http://www.ecnbooks.com/images/e9/9787551108720.jpg);
    color: #000;
    width: 100%;
    height: 5rem;
    background-size: cover;
}
.slide3{
    background: url(http://img3m8.ddimg.cn/65/22/25108148-1_u_2.jpg);
    color: #fff;
    width: 100%;
    height: 5rem;
    background-size: cover;
}

.slide4{
    background: url(http://img3m1.ddimg.cn/55/12/24196051-1_u_6.jpg);
    width: 100%;
    height: 6rem;
}
// .slide5{
//     width: 100px;
//     height: 6rem;
// }
// .slide6{
//     width: 100px;
//     height: 6rem;
// }
// .slide7{
//     width: 100px;
//     height: 6rem;
// }
// .slide8{
//     width: 100px;
//     height: 6rem;
// }
}

</style>

