import firebase from '../../plugins/firebase'
import auth from './auth'

export default {
    state: {
        user: null
    },
    mutations: {
        setUser (state, payload) {
            state.user = payload
        }
    },
    actions: {
        ...auth,
        async getUser ({ commit, state }, id) {
            commit('setLoading', true)
            try {
                const doc = await firebase
                    .firestore()
                    .collection('users')
                    //TODO: make this the authenticated userid
                    .doc('9BIjlLRPVbbD0kkdsqRP')
                    .get({ source: 'server' })
                    const uid = id
                    uid + id
                commit('setUser', {...doc.data(), ...state.user})
            } catch (err) {
                commit('setAlert', { message: err.message, severity: 'error' })
            } finally {
                commit('setLoading', false)
            }
        }
    },
    getters: {
        user (state) {
            return state.user
        }
    }
}
