<template>
    <div
     class="volumeTV width-100 padding-bottom">
        <b-field v-on:click="alerts()" class="volumeTV__volume" label="Громкость трасляции на ТВ">
            {{this.GET_STATE_USER.data.data.states[0]}}
            <div
             @mousedown="updateVolume({id:currentId, volume:volume, current_stream:currentStream})"
             @mouseup="updateVolume({id:currentId, volume:volume, current_stream:currentStream})">
                <b-slider
                type="is-info"
                v-model="volume"
                :value="currentVolume">
                </b-slider>
                {{currentVolume}}
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
        currentVolume() {
            const properties = eval('({obj:' + this.GET_STATE_USER.data.data.states[0].properties + '})');
            return properties.obj.volume
        },
        currentStream() {
            const properties = eval('({obj:' + this.GET_STATE_USER.data.data.states[0].properties + '})');
            return properties.obj.current_stream
        },
        currentId() {
            return this.GET_STATE_USER.data.data.states[0].id
        }
    },
    methods: {
        ...mapActions(['UPDATE_VOLUME']),
        updateVolume(data) {
            this.UPDATE_VOLUME(data)
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