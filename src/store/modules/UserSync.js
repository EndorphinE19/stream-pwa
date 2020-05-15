import axios from 'axios'

export default {
    state: {
        url: 'https://stream.crona.tech/api/streams/device/detail/?id=1',
        userData: null
    },
    mutations: {

        UPDATE_USER_DATA(state, data) {
            state.userData = data
        }
    },
    actions: {

        async GET_USER_SYNC(ctx) {
            await axios.get(ctx.state.url)
            .then(result => {
                ctx.commit('UPDATE_USER_DATA', result)
            })

            return true
        }
    },
    getters: {
        GET_STATE_USER(state) {
            return state.userData
        }
    }
}