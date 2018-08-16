<template>
    <div class="detail">
        <h1 class="detail-title">{{detail.title}}</h1>
        <p class="detail-summary">{{detail.summary}}</p>
    </div>
</template>

<script>
import axios from "axios";
export default {
    data () {
        return {
            detail:{}
        }
    },
    created () {
        let url = `https://bird.ioliu.cn/v2?url=https://api.douban.com/v2/movie/subject/${
            this.$route.params.movieId
            }`;
            axios.get(url).then(res =>{
                // console(res);
                this.detail=res.data;
            });
    }
    
};
</script>

<style lang="scss" scoped>
.detail{
    // position: relative;
    
    &-title{
        // margin-bottom: 0.2rem;
        text-align: center;
        height: 0.5rem;
        color: #800000;
        padding: 0.5rem;
        font-weight: 700;
        font-style: 0.48rem;
        background-color: #ffb6c1;
        line-height: 0.5rem;
    }
    &-summary{
        // position: absolute;
        // left: 0;
        // right: 0;
        // bottom: 1rem;
        // top: 1.8rem;
        font-size: 0.36rem;
        background-color: #ffe4e1;
        text-indent: 2em;
    }
}
</style>

