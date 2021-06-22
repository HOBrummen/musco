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
        async getUser ({ commit }, id) {
            commit('setLoading', true)
            try {
                const doc = await firebase
                    .firestore()
                    .collection('users')
                    .doc(id)
                    .get({ source: 'server' })
                commit('setUser', doc.data())
            } catch (err) {
                commit('setError', err)
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
