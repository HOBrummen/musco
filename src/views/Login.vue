<template>
  <v-container>
    <v-layout v-if="error">
      <app-alert
        @dismissed="onDismissed"
        :text="error.message"
        severity="error"
      ></app-alert>
    </v-layout>
    <v-layout>
      <v-flex xs12 sm6 offset-sm3>
        <v-card>
          <v-card-text>
            <v-container>
              <form @submit.prevent="onSignin">
                <v-layout row>
                  <v-flex xs12>
                    <v-text-field
                      name="email"
                      label="Email"
                      id="email"
                      v-model="email"
                      type="email"
                      required
                    ></v-text-field>
                  </v-flex>
                </v-layout>
                <v-layout row>
                  <v-flex xs12>
                    <v-text-field
                      name="password"
                      label="Password"
                      id="password"
                      v-model="password"
                      type="password"
                      required
                    ></v-text-field>
                  </v-flex>
                </v-layout>
                <v-layout row>
                  <v-flex xs12>
                    <div class="text-xs-center">
                      <v-btn
                        type="submit"
                        color="primary"
                        :disabled="loading"
                        :loading="loading"
                        class="mr-4"
                      >
                        Sign in
                        <fa-icon icon="lock-open" pull="right" />
                        <span slot="loader">
                          <fa-icon spin icon="spinner" />
                        </span>
                      </v-btn>
                      <v-btn
                        :disabled="loading"
                        :loading="loading"
                        @click.prevent="onResetPassword"
                        >Reset Password
                        <fa-icon icon="envelope" pull="right" />
                        <span slot="loader">
                          <fa-icon spin icon="spinner" />
                        </span>
                      </v-btn>
                    </div>
                  </v-flex>
                </v-layout>
              </form>
            </v-container>
          </v-card-text>
        </v-card>
      </v-flex>
    </v-layout>
  </v-container>
</template>
<script>
export default {
  data() {
    return {
      email: '',
      password: ''
    }
  },
  computed: {
    user() {
      return this.$store.getters.user
    },
    error() {
      return this.$store.getters.error
    },
    loading() {
      return this.$store.getters.loading
    }
  },
  watch: {
    user(value) {
      if (value !== null && value !== undefined) {
        this.$router.push('/')
      }
    }
  },
  methods: {
    onSignin() {
      this.$store.dispatch('signUserIn', {
        email: this.email,
        password: this.password
      })
    },
    onResetPassword() {
      if (this.email === '') {
        return this.$store.dispatch('setError', {
          message: 'Email can not be blank'
        })
      }
      this.$store.dispatch('resetPasswordWithEmail', { email: this.email })
    },
    onDismissed() {
      this.$store.dispatch('clearError')
    }
  }
}
</script>
<style>
.v-card {
  margin-top: 25rem;
}
</style>