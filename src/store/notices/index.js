import firebase from '../../plugins/firebase'

let unsubscribe

export default {
    state: {
        notices: [],
        notice: null
    },
    mutations: {
        pushNotices (state, payload) {
            state.notices.forEach(notice => {
                if(notice.id !== payload) {
                    state.notices.push(payload)
                }
            })
        },
        setNotice (state, payload) {
            state.notice = payload
        }
    },
    actions: {
        async subscribeNotices ({ commit }) {
            commit('setLoading', true)
            unsubscribe = firebase
                .firestore()
                .collection('notices')
                .onSnapshot((querySnapshot) => {
                    querySnapshot.docs.forEach((doc) => {
                        commit('pushNotices', { ...doc.data(), id: doc.id })
                    })
                }, (err) => {
                    commit('setError', err)
                })
        },
        unsubscribeNotices () {
            unsubscribe()
        }
    },
    getters: {
        notices (state) {
            return state.notices
        }
    }
}