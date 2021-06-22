import Vuetify from 'vuetify'

import Alert from '@/components/shared/Alert.vue'
import { createLocalVue, mount } from '@vue/test-utils'

const localVue = createLocalVue()

describe('Alert.vue', () => {
  let vuetify
  let VAlert

  beforeEach(() => {
    vuetify = new Vuetify()
    VAlert = mount(Alert, {
      localVue,
      vuetify,
      propsData: {
        txt: 'A new alert', severity: 'error', code: 'auth/credential-already-in-use' }
    })
  })

  afterEach(() => {
    vuetify = null
    VAlert = null
  })

  it('renders props when passed', () => {
    expect(VAlert.html()).toMatchSnapshot()
    expect(VAlert.html()).toMatch('A new alert')
    // TODO: test if severity and errorcode are given
  })

  it('emits an event on dismiss', () => {
    const event = jest.fn()
    const close = VAlert.find('button.v-alert__dismissible')

    VAlert.vm.$on('dismissed', event)
    expect(event).toHaveBeenCalledTimes(0)
    close.trigger('input')
    expect(event).toHaveBeenCalledTimes(1)
  })
})
