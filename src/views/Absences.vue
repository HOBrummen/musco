<template>
  <v-app>
    <v-container>
      <validation-observer ref="observer" v-slot="{ invalid }">
        <form @submit.prevent="submit">
          <validation-provider v-slot="{ errors }" name="Name" rules="required">
            <v-text-field
              prepend-icon="fa-user"
              v-model="user.name"
              :error-messages="errors"
              label="Naam"
              required
              disabled
            ></v-text-field>
          </validation-provider>
          <validation-provider
            v-slot="{ errors }"
            name="orchestra"
            rules="required"
          >
            <v-radio-group v-model="selectedOrchestra" prepend-icon="fa-users">
              <v-radio
                v-for="orchestra in user.orchestras"
                :error-messages="errors"
                :key="orchestra"
                :label="orchestra"
                :value="orchestra"
              />
            </v-radio-group>
          </validation-provider>
          <validation-provider
            v-slot="{ errors }"
            name="Vanaf"
            rules="required"
          >
            <v-menu
              :close-on-content-click="false"
              :nudge-right="40"
              transition="scale-transition"
              offset-y
              min-width="auto"
            >
              <template v-slot:activator="{ on, attrs }">
                <v-text-field
                  label="Repetities afwezig"
                  prepend-icon="fa-calendar"
                  readonly
                  v-bind="attrs"
                  v-on="on"
                  :error-messages="errors"
                  v-model="dateRangeText"
                  :disabled="selectedOrchestra === ''"
                ></v-text-field>
              </template>
              <v-date-picker
                v-model="dates"
                :error-messages="errors"
                :min="today"
                range
                :allowed-dates="allowedDates"
                scrollable
              ></v-date-picker>
            </v-menu>
          </validation-provider>
          <validation-provider
            v-slot="{ errors }"
            name="Reden"
            rules="required"
          >
            <v-text-field
              prepend-icon="fa-question"
              v-model="reason"
              :error-messages="errors"
              label="Reden afmelding"
              required
            ></v-text-field>
          </validation-provider>

          <v-btn type="submit" :disabled="invalid">Afmelden</v-btn>
        </form>
      </validation-observer>
    </v-container>
  </v-app>
</template>

<script>
import { required } from 'vee-validate/dist/rules'
import {
  extend,
  ValidationObserver,
  ValidationProvider,
  setInteractionMode
} from 'vee-validate'
import { isMonday, isTuesday, isThursday, getDate, format } from 'date-fns'

import { nl } from 'date-fns/locale'

setInteractionMode('eager')

extend('required', {
  ...required,
  message: '{_field_} mag niet leeg zijn.'
})

export default {
  name: 'Absences',
  components: {
    ValidationProvider,
    ValidationObserver
  },
  data: () => ({
    // TODO: Put logged in user here.
    user: {
      name: 'John Joe',
      orchestras: [
        'Harmonie orkest',
        'Pretband',
        'Opleidingsorkest A',
        'Opleidingsorkest B'
      ]
    },
    orchestra: '',
    reason: '',
    dates: [],
    selectedOrchestra: ''
  }),

  methods: {
    submit() {
      this.$refs.observer.validate()
    },
    // TODO: Make this server side
    allowedDates(strDate) {
      const date = new Date(strDate)
      switch (this.selectedOrchestra) {
        case 'Harmonie orkest':
          return isMonday(date)
        case 'Pretband':
          return !isTuesday()
            ? false
            : !!(getDate(date) > 1 && getDate(date) < 10)
        case 'Opleidingsorkest A':
          return isThursday(date)
        case 'Opleidingsorkest B':
          return isThursday(date)
        default:
          return false
      }
    }
  },
  computed: {
    today: () => new Date().toISOString().substr(0, 10),
    dateRangeText: {
      get() {
        return this.dates
          .map((date) => format(new Date(date), 'd MMMM', { locale: nl }))
          .join(' t/m ')
      }
    }
  }
}
</script>
