<template>
    <div class="stream">
        <iframe class="stream__video" :src="linkVideo" frameborder="0"></iframe>
    </div>
</template>
<script>
import {mapGetters} from 'vuex'
export default {
    props: {
        linkVideo: String
    },
    name: 'Stream',
    computed: {
        ...mapGetters(['GET_STATE_USER']),
    }
}
</script>
<style scoped>
.stream {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
}
.stream__video {
    width: 100%;
    height: 100%;
}
</style>