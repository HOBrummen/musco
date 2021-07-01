import store from '@/store/shared'
import Sinon from 'sinon'
const { mutations, getters, actions } = store

describe('store/shared', () => {
    let state
    beforeEach(() => {
        state = {
            loading: false,
            alert: null
        }
    })

    describe('mutations', () => {
        it('updates loading state', () => {
            mutations.setLoading(state, true)
            expect(state.loading).toBe(true)
        })
        it('updates an error', () => {
            mutations.setAlert(state, 'Generic errormessage')
            expect(state.alert).toBe('Generic errormessage')
        })

        it('clears an error', () => {
            mutations.clearAlert(state)
            expect(state.alert).toBe(null)
        })
    })
    describe('actions', () => {
        let commit

        beforeEach(() => {
            commit = Sinon.spy()
        })

        afterEach(() => {
            commit = null
        })

        it('sets an error', () => {
            actions.setAlert({ commit, state }, 'Generic errormessage')
            expect(commit.args).toEqual([
                ['setAlert', 'Generic errormessage']
            ])
        })
        it('clears an error', () => {
            actions.clearAlert({ commit, state })
            expect(commit.args).toEqual([
                ['clearAlert']
            ])
        })
    })
    describe('getters', () => {
        it('gets the loading state', () => {
            const result = getters.loading(state)
            expect(result).toBe(false)
        })
        it('gets an error from state', () => {
            state = {
                loading: false,
                alert: 'Generic errormessage'
            }
            const result = getters.alert(state)
            expect(result).toBe('Generic errormessage')
        })
    })
})