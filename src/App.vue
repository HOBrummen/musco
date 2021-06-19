<template>
  <v-app @contextmenu="handler($event)">
    <v-main>
      <router-view />
      <v-bottom-navigation app v-model="value" v-if="$store.state.user.user">
        <v-tooltip top>
          <template v-slot:activator="{ on, attrs }">
            <router-link to="/absences">
              <v-btn
                @contextmenu="handler($event)"
                value="absences"
                height="100%"
                text
                v-bind="attrs"
                v-on="on"
              >
                <span v-if="$vuetify.breakpoint.width > 460">
                  Afmelden repetitie
                </span>
                <v-icon>fa-ban</v-icon>
              </v-btn>
            </router-link>
          </template>
          <span>Afmelden repetitie</span>
        </v-tooltip>
        <v-tooltip top>
          <template v-slot:activator="{ on, attrs }">
            <router-link to="/">
              <v-btn
                @contextmenu="handler($event)"
                value="notices"
                height="100%"
                text
                v-bind="attrs"
                v-on="on"
              >
                <span v-if="$vuetify.breakpoint.width > 460">Mededelingen</span>
                <!-- TODO: Add bagde if new notices are present -->
                <v-badge dot color="error">
                  <v-icon>fa-bell</v-icon>
                </v-badge>
              </v-btn>
            </router-link>
          </template>
          <span>Mededelingen</span>
        </v-tooltip>
        <v-tooltip top>
          <template v-slot:activator="{ on, attrs }">
            <router-link to="/account">
              <v-btn
                @contextmenu="handler($event)"
                value="account"
                height="100%"
                text
                v-bind="attrs"
                v-on="on"
              >
                <span v-if="$vuetify.breakpoint.width > 460">{{
                  username
                }}</span>
                <v-icon>fa-user</v-icon>
              </v-btn>
            </router-link>
          </template>
          <span>{{ username }}</span>
        </v-tooltip>
        <v-tooltip top>
          <template v-slot:activator="{ on, attrs }">
            <router-link v-if="admin" to="/admin">
              <v-btn
                @contextmenu="handler($event)"
                value="admin"
                height="100%"
                text
                v-bind="attrs"
                v-on="on"
              >
                <span v-if="$vuetify.breakpoint.width > 460">Admin</span>
                <v-icon>fa-tools</v-icon>
              </v-btn>
            </router-link>
          </template>
          <span>Admin</span>
        </v-tooltip>
      </v-bottom-navigation>
    </v-main>
  </v-app>
</template>

<script>
export default {
  data() {
    return {
      value: 'notices',
      // TODO: Add logged in username
      username: 'John Joe',
      // TODO: add authentication statement
      admin: true
    }
  },
  methods: {
    handler: (e) => {
      e.preventDefault()
    }
  },
  created() {
    this.$firebase.auth().onAuthStateChanged((user) => {
      if (user) {
        this.$store.dispatch('autoSignIn', user)
      }
    })
  }
}
</script>

<style scoped>
a {
  text-decoration: none;
}
</style>
