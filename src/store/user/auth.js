import firebase from '../../plugins/firebase'

export default {
    async signUserUp ({ commit }, payload) {
        commit('clearAlert')
        commit('setLoading', true)
        try {
            const doc = await firebase
                .auth()
                .createUserWithEmailAndPassword(payload.email, payload.password)
            const newUser = {
                id: doc.uid,
                name: doc.displayName,
                email: doc.email,
                photoUrl: doc.photoURL
            }
            commit('setUser', newUser)
        } catch (err) {
            commit('setAlert', { message: err.message, severity: 'error' })
        } finally {
            commit('setLoading', false)
        }
    },
    async signUserIn ({ commit }, payload) {
        commit('clearAlert')
        commit('setLoading', true)
        try {
            const doc = await firebase
                .auth()
                .signInWithEmailAndPassword(payload.email, payload.password)
            commit('setLoading', false)
            const newUser = {
                id: doc.uid,
                name: doc.displayName,
                email: doc.email,
                photoUrl: doc.photoURL
            }
            commit('setUser', newUser)
        } catch (err) {
            commit('setAlert', { message: err.message, severity: 'error' })
        } finally {
            commit('setLoading', false)
        }
    },
    autoSignIn ({ commit }, payload) {
        commit('clearAlert')
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
    async resetPasswordWithEmail ({ commit }, payload) {
        const { email } = payload
        commit('setLoading', true)
        try {
            await firebase
                .auth()
                .sendPasswordResetEmail(email)
            commit('setAlert', { message: 'Email has been sent.', severity: 'success' })
        } catch (err) {
            commit('setAlert', { message: err.message, severity: 'error' })
        } finally {
            commit('setLoading', false)
        }
    },
    async logout ({ commit }) {
        commit('clearAlert')
        commit('setLoading', true)
        try {
            await firebase.auth().signOut()
            commit('setUser', null)
        } catch (err) {
            commit('setAlert', { message: err.message, severity: 'error' })
        } finally {
            commit('setLoading', false)
        }
    }
}
