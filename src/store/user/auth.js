import firebase from '../../plugins/firebase'

export default {
    async signUserUp ({ commit }, payload) {
        commit('clearError')
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
            commit('setError', err)
        } finally {
            commit('setLoading', false)

        }

    },
    async signUserIn ({ commit }, payload) {
        commit('setLoading', true)
        commit('clearError')
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
            commit('setError', err)
        } finally {
            commit('setLoading', false)
        }
    },
    autoSignIn ({ commit }, payload) {
        commit('setLoading', true)
        commit('clearError')
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
        } catch (err) {
            commit('setError', err)

        } finally {
            commit('setLoading', false)
        }
    },
    async logout ({ commit }) {
        commit('setLoading', true)
        commit('clearError')
        try {
            await firebase.auth().signOut()
            commit('setUser', null)
        } catch (err) {
            commit('setError', err)
        } finally {
            commit('setLoading', false)
        }
    }
}
