<template>
    <div class="banners-info">
        <h2 class="banners-info__title">До начала трансляции: {{timer.hours}} часов {{timer.minutes}} минут</h2>
        <h4 class="banners-info__subtitle">Громкость: {{volume}}%</h4>
    </div>
</template>
<script>
import {mapGetters} from 'vuex'
export default {
    props: {
        timer: Object
    },
    name: 'BannersInfo',
    computed: {
        ...mapGetters(['GET_STATE_USER']),
        volume() {
            const properties = eval('({obj:' + this.GET_STATE_USER.data.data.states[0].properties + '})');
            return properties.obj.volume
        }
    }
}
</script>
<style scoped>
.banners-info {
    max-width: 600px;
    width: 100%;
    background-image: linear-gradient(45deg, black, rgba(0,0,0,0));
    padding: 10px;
    margin-bottom: 10px;
}
.banners-info__title,
.banners-info__subtitle {
    color: white;
}
.banners-info__title {
    padding-bottom: 10px;
    font-size: 20px;
}
.banners-info__subtitle {
    font-family:arial,sans-serif,Helvetica;
    font-size: 15px;
}
</style>