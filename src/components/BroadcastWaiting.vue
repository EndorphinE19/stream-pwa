<template>
    <div class="broadcast-waiting">
        <template v-if="isData">
            <main-screen />
        </template>
    </div>
</template>
<script>
import MainScreen from './MainScreen'
import {mapActions} from 'vuex'
export default {
    name: 'BroadcastWaiting',
    data() {
        return {
            isData: false
        }
    },
    methods:mapActions(['GET_USER_SYNC']),
    async mounted() {

        this.GET_USER_SYNC()
        .then(res => {
            this.isData = res
        })

        setInterval(async () => {
            this.GET_USER_SYNC()
            .then(res => {
                this.isData = res
            })
        }, 10000)
    },
    components: {
        MainScreen
    }
}
</script>