import store from '@/store/user'
import Sinon from 'sinon'

const { mutations, actions, getters } = store

describe('store/user/auth', () => {

    let state
    let authMock
    let userMock

    beforeEach(() => {
        state = {
            user: null
        }
        authMock = {
            id: 'pscv0dQ4WsXqLpOrGeEfZ5Kr6Ui1',
            name: 'John Joe',
            email: 'j.joe@mail.com',
            photoUrl: 'https://www.pngitem.com/pimgs/m/30-307416_profile-icon-png-image-free-download-searchpng-employee.png'
        }
        userMock = {
            userId: '8IFXDZDiepjVPr43edxYZ4Jp1vd9',
            instruments: [
                { name: 'Hoorn', orchestras: ['Harmonieorkest', 'Pretband'], section: 'Koper' },
                { name: 'Klarinet', orchestras: ['Opleidingsorkest A'] }
            ],
            orchestras: ['Harmonieorkest', 'Pretband', 'Opleidingsorkest A']
        }
    })

    afterEach(() => {
        state = null
        userMock = null
        authMock = null
    })

    describe('mutations', () => {
        it('updates user state', () => {
            mutations.setUser(state, authMock)
            expect(state.user).toEqual(authMock)
        })
    })

    describe('actions', () => {
        // TODO: add test if setUser is also being called
        it('gets a user', async () => {
            const commit = Sinon.spy()

            actions.getUser({ commit, state }, userMock.id)
            expect(commit.args).toEqual([
                ['setLoading', true]
            ])
        })
    })
    describe('getters', () => {
        it('gets a user from state', () => {
            state = { user: authMock }
            const result = getters.user(state)
            expect(result).toBe(authMock)
        })
    })
})