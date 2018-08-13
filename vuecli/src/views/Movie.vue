<template>
    <ul>
        <li @click="showDetail(movie)" v-for="movie in movielist" :key="movie.id">
            <!-- <router-link :to="'/moviedetail/'+movie.id"> -->
                {{movie.name}}
            <!-- </router-link>
             -->
        </li>
    </ul>
</template>

<script>
export default {
    data(){
        return{
            movielist:[
            {
                id:1,
                name:"爱情公寓"
            },
            {
                id:2,
                name:"一出好戏"
            },{
                id:3,
                name:"狄仁杰4"
            },{
                id:4,
                name:"蚁人2"
            },{
                id:5,
                name:"巨齿鲨"
            }
        ]
        }; 
    },
    methods:{
        showDetail(movie){
            this.$router.push('/moviedetail/'+movie.id);
        }
    }
}
</script>

<style lang="scss" scoped>

</style>

