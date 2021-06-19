import firebase from '../../plugins/firebase'

export default {
    signUserUp ({ commit }, payload) {
        commit('setLoading', true)
        commit('clearError')
        firebase
            .auth()
            .createUserWithEmailAndPassword(payload.email, payload.password)
            .then(user => {
                commit('setLoading', false)
                const newUser = {
                    id: user.uid,
                    name: user.displayName,
                    email: user.email,
                    photoUrl: user.photoURL
                }
                commit('setUser', newUser)
            })
            .catch(error => {
                commit('setLoading', false)
                commit('setError', error)
                console.log(error)
            })
    },
    signUserIn ({ commit }, payload) {
        commit('setLoading', true)
        commit('clearError')
        firebase
            .auth()
            .signInWithEmailAndPassword(payload.email, payload.password)
            .then(user => {
                commit('setLoading', false)
                const newUser = {
                    id: user.uid,
                    name: user.displayName,
                    email: user.email,
                    photoUrl: user.photoURL
                }
                commit('setUser', newUser)
            })
            .catch(error => {
                commit('setLoading', false)
                commit('setError', error)
                console.log(error)
            })
    },
    autoSignIn ({ commit }, payload) {
        commit('setLoading', true)
        const newUser = {
            id: payload.uid,
            name: payload.displayName,
            email: payload.email,
            photoUrl: payload.photoURL
        }
        commit('setUser', newUser)
        commit('setLoading', false)
    },
    resetPasswordWithEmail ({ commit }, payload) {
        const { email } = payload
        commit('setLoading', true)
        firebase
            .auth()
            .sendPasswordResetEmail(email)
            .then(() => {
                commit('setLoading', false)
            })
            .catch(error => {
                commit('setLoading', false)
                commit('setError', error)
                console.log(error)
            })
    },
    logout ({ commit }) {
        firebase.auth().signOut()
        commit('setUser', null)
    }
}
