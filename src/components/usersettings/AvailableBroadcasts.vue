<template>
    <div class="available-broadcasts width-100 padding-bottom">
        {{this.GET_STATE_USER.data.data.states}}
        <h4>Список доступных трансляций</h4>
        <div class="available-broadcasts__list">
            <div class="available-broadcasts__broadcast broadcast" v-for="item in this.GET_STATE_USER.data.data.streams" :key="item.id">
                <img :src="item.image" alt="">
                <div class="broadcast__info">
                    <div class="broadcast__title">{{item.title}}</div>
                    <div class="broadcast__description">{{item.description}}</div>
                    <div class="broadcast__date">Сегодня 18:09</div>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
import {mapGetters} from 'vuex'

export default {
    name: 'AvailableBroadcasts',
    computed: {
        ...mapGetters(['GET_STATE_USER']),
        streamList() {
            return this.GET_STATE_USER.data.data.streams
        }
    }
}
</script>
<style scoped>
h4 {
    padding-bottom: 20px;
    font-size: 20px;
    font-weight: bold;
}
.broadcast {
    padding: 10px;
    display: flex;
    justify-content: space-between;
    align-content: center;
}
.broadcast:hover {
    background: #E8ECF5;
}
img {
    width: 48%;
    height: 100px;
}
.broadcast__info {
    width: 48%;
}
.broadcast__title {
    font-weight: bold;
    line-height: 1;
}
.broadcast__title, 
.broadcast__description {
    margin-bottom: 5px;
}
.broadcast__description {
    font-size: 14px;
    height: 60px;
    overflow: hidden;
}
.broadcast__date {
    color:#7A7E87;
    font-style: italic;
    font-size: 13px;
}

</style>