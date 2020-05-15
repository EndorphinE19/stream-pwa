<template>
    <div class="main-screen">
        <stream v-if="streamStart" :linkVideo="streamVideo" />
        <template v-else>
            <bg :linkImg="streamImg" />
            <div class="banners">
                <banners-info :timer="timer" />
                <banners-control-mobile />
            </div>
        </template>
    </div>
</template>
<script>
import {mapGetters} from 'vuex'
import Bg from './Background'
import Stream from './Stream'
import BannersInfo from './BannersInfo'
import BannersControlMobile from './BannersControlMobile'
export default {
    name: 'MainScreen',
    data() {
        return {
            obj_timer: {
                hours:0,
                minutes:0
            },
            streamStart:false
        }
    },
    computed: {
        ...mapGetters(['GET_STATE_USER']),
        currentStreamId() {
            const properties = eval('({obj:' + this.GET_STATE_USER.data.data.states[0].properties + '})');
            return properties.obj.current_stream
        },
        currentStream() {
            return this.GET_STATE_USER.data.data.streams.filter(item => item.id === this.currentStreamId)
        },
        streamImg() {
            return this.currentStream[0].image
        },
        streamVideo() {
            return this.currentStream[0].video_link
        },
        timer() {
	
            let timer = setInterval(() => {
                
                let now = Date.parse(new Date());                       
                let date = Date.parse(new Date(this.currentStream[0].started_at));
               
                let ms_left = date - now;
                
                if (ms_left <= 0) {
        
                    clearInterval(timer);

                    this.streamStart = true
                } else {
                   
                    this.streamStart = false
                    
                    let res = new Date(ms_left);
                    
                    this.obj_timer.hours = res.getUTCHours()
                    this.obj_timer.minutes = res.getUTCMinutes()
                }
            }, 1000)

            return this.obj_timer
        }
    },
    components: {
        Bg,
        Stream,
        BannersInfo,
        BannersControlMobile
    }
}
</script>
<style scoped>
.banners {
    position: absolute;
    bottom: 0;
    left: 0;
}
</style>