<template>
    <div>
        <h1>电影详情列表哦</h1>
        <h1>电影Id:{{$route.params.movieId}}</h1>
    </div>
</template>

<script>
export default {
    data(){
        return{
            detail:{}
        }
    },
    created() {
        let movieId = this.$route.params.movieId;
    },
}
</script>
