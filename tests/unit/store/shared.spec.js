import store from '@/store/shared'
import Sinon from 'sinon'
const { mutations, getters, actions } = store

describe('store/shared', () => {
    let state
    beforeEach(() => {
        state = {
            loading: false,
            error: null
        }
    })

    describe('mutations', () => {
        it('updates loading state', () => {
            mutations.setLoading(state, true)
            expect(state.loading).toBe(true)
        })
        it('updates an error', () => {
            mutations.setError(state, 'Generic errormessage')
            expect(state.error).toBe('Generic errormessage')
        })

        it('clears an error', () => {
            mutations.clearError(state)
            expect(state.error).toBe(null)
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
            actions.setError({ commit, state }, 'Generic errormessage')
            expect(commit.args).toEqual([
                ['setError', 'Generic errormessage']
            ])
        })
        it('clears an error', () => {
            actions.clearError({ commit, state })
            expect(commit.args).toEqual([
                ['clearError']
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
                error: 'Generic errormessage'
            }
            const result = getters.error(state)
            expect(result).toBe('Generic errormessage')
        })
    })
})