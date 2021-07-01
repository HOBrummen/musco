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
        message: 'A new alert', severity: 'error'
      }
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
})
