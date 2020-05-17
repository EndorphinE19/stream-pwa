<template>
    <div
     class="volumeTV width-100 padding-bottom">
        <b-field class="volumeTV__volume" label="Громкость трасляции на ТВ">
            <div
             @mousedown="updateVolume({id:currentId, volume:volume, current_stream:currentStream})"
             @mouseup="updateVolume({id:currentId, volume:volume, current_stream:currentStream})">
                <b-slider
                type="is-info"
                v-model="volume"
                :value="currentVolume">
                </b-slider>
             </div>
        </b-field>
    </div>
</template>
<script>
import {mapActions, mapGetters} from 'vuex'

export default {
    name: 'VolumeTV',
    data() {
        return {
            volume: 0
        }
    },
    computed: {
        ...mapGetters(['GET_STATE_USER']),
        properties() {
            return eval('({obj:' + this.GET_STATE_USER.data.data.states[0].properties + '})')
        },
        currentVolume() {
            return this.properties.obj.volume
        },
        currentStream() {
            return this.properties.obj.current_stream
        },
        currentId() {
            return this.GET_STATE_USER.data.data.states[0].id
        }
    },
    methods: {
        ...mapActions(['GET_USER_SYNC', 'UPDATE_VOLUME']),

        async updateVolume(data) {
            this.UPDATE_VOLUME(data)
            .then(async () => {
                this.GET_USER_SYNC()
            })
        }
    }
}
</script>
<style>
.b-slider .b-slider-thumb-wrapper .b-slider-thumb {
    border-radius: 100px;
}
.b-slider .b-slider-thumb {
    width: 1.2rem;
    height: 1.2rem;
}
.b-slider .b-slider-track {
    height: .2rem;
    background: #8EAEE7;
}
.label:not(:last-child) {
    margin-bottom: 25px;
    font-size:20px;
    font-weight: bold;
}
</style>