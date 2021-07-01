export default {
    state: {
        loading: false,
        alert: null
    },
    mutations: {
        setLoading (state, payload) {
            state.loading = payload
        },
        setAlert (state, payload) {
            state.alert = payload
        },
        clearAlert (state) {
            state.alert = null
        }
    },
    actions: {
        clearAlert ({ commit }) {
            commit('clearAlert')
        },
        setAlert ({ commit }, payload) {
            commit('setAlert', payload)
        }
    },
    getters: {
        loading (state) {
            return state.loading
        },
        alert (state) {
            return state.alert
        }
    }
}