import store from '@/store/user'
import Sinon from 'sinon'

const { actions } = store

describe('store/user/auth', () => {

    let state
    let authMock

    beforeEach(() => {
        state = {
            user: null
        }
        authMock = {
            id: 'pscv0dQ4WsXqLpOrGeEfZ5Kr6Ui1',
            name: 'John Joe',
            email: 'j.joe@mail.com',
            photoUrl: 'https://www.pngitem.com/pimgs/m/30-307416_profile-icon-png-image-free-download-searchpng-employee.png',
            password: 'test123'
        }
    })

    afterEach(() => {
        state = null
        authMock = null
    })
    describe('actions', () => {
            it('sign up a user', async () => {
                const commit = Sinon.spy()

                actions.signUserUp({ commit, state }, authMock)
                expect(commit.args).toEqual([
                    ['clearError'],
                    ['setLoading', true]
                ])
            })
        it('sign in a user', async () => {
            const commit = Sinon.spy()

            actions.signUserIn({ commit, state }, authMock)
            expect(commit.args).toEqual([
                ['clearError'],
                ['setLoading', true]
            ])
        })
        it('automatically sign in user', async () => {
            const commit = Sinon.spy()

            actions.autoSignIn({ commit, state }, authMock)
            expect(commit.args).toEqual([
                ['clearError'],
                ['setLoading', true],
                ['setUser', {
                    email: 'j.joe@mail.com',
                    id: undefined,
                    name: undefined,
                    photoUrl: undefined
                }],
                ['setLoading', false]
            ])
        })
    })
    it('send password recovery email', async () => {
        const commit = Sinon.spy()

        actions.resetPasswordWithEmail({ commit, state }, authMock)
        expect(commit.args).toEqual([
            ['setLoading', true]
        ])
    })
    it('sign in a user', async () => {
        const commit = Sinon.spy()

        actions.logout({ commit, state }, authMock)
        expect(commit.args).toEqual([
            ['clearError'],
            ['setLoading', true]
        ])
    })
})