import axios from 'axios'

export default {
    state: {
        url: 'https://stream.crona.tech/api/streams/device/detail/?id=1',
        urlNotParam: 'https://stream.crona.tech/api/streams/display-state/detail/',
        userData: null
    },
    mutations: {

        UPDATE_USER_DATA(state, data) {
            state.userData = data
        }
    },
    actions: {

        //получаем данные о трансляциях
        async GET_USER_SYNC(ctx) {
            await axios.get(ctx.state.url)
            .then(result => {
                ctx.commit('UPDATE_USER_DATA', result)
            })

            return true
        },

        async UPDATE_VOLUME(ctx, data) {
            
            await axios.patch(ctx.state.urlNotParam + '?id=' + data.id, {
                "id":`${data.id}`,
                "properties": `{\"volume\": \"${data.volume}\", \"current_stream\": ${data.current_stream}}`})
        }
    },
    getters: {
        GET_STATE_USER(state) {
            return state.userData
        }
    }
}