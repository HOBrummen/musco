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
        getUser ({ commit }) {
            commit('setLoading', true)
            firebase
                .firestore()
                .collection('users')
                .doc('9BIjlLRPVbbD0kkdsqRP')
                .get({ source: 'server' })
                .then((doc) => {
                    commit('setLoading', false)
                    commit('setUser', doc.data())
                }).catch((err) => {
                    commit('setLoading', false)
                    commit('setError', err)
                    console.log(err)
                })
        }
    },
    getters: {
        user (state) {
            return state.user
        }
    }
}
