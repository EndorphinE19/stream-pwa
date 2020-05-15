<template>
    <div class="background">
        <img class="img" :src="linkImg">
    </div>
</template>
<script>
import {mapGetters} from 'vuex'
export default {
    props: {
        linkImg: String
    },
    name: 'Background'
}
</script>
<style scoped>
.background {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    z-index: -1;
}
</style>