<template>
    <player :musicList="musicList"></player>
</template>

<script>
import player from '@/components/Player.vue';
import axios from 'axios';
export default {
    data () {
        return {
            musicList:[]
        };
    },
    created() {
        this.$emit('switchTab','music');
        axios.get('/data/musicdata.json').then(res =>{
            this.musicList = res.data.musicData;
        })
    },
    components: {
        player
    },
}
</script>

<style lang="scss" scoped>

</style>

