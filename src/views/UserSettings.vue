<template>
    <div class="mobile-wrapper user-settings">
        <template v-if="isData">
            <div class="indent">
                <name />
                <VolumeTV />
                <PeopleOnline />
            </div>
            <AvailableBroadcasts />
        </template>
    </div>
</template>
<script>
import Name from '../components/usersettings/Name'
import VolumeTV from '../components/usersettings/VolumeTV'
import PeopleOnline from '../components/usersettings/PeopleOnline'
import AvailableBroadcasts from '../components/usersettings/AvailableBroadcasts'

import {mapActions} from 'vuex'

export default {
    name: 'UserSettings',
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
    },
    components: {
        Name,
        VolumeTV,
        PeopleOnline,
        AvailableBroadcasts
    }
}
</script>