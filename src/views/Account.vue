<template>
  <v-layout column>
    <!-- TODO: Make a slider -->
    <v-img
      aspect-ratio="2.5"
      width="100%"
      src="../assets/accountBackground-min.jpg"
    />
    <v-container>
      <v-row>
        <v-col cols="12" xs="12" md="6" order="1">
          <h3>Naam</h3>
          <p>{{ user.name || "test user" }}</p>
        </v-col>
        <v-col cols="12" xs="12" md="6" order="3">
          <!-- TODO: length is not found on first render -->
          <h3>Instrument{{ user.instruments.length > 1 ? "en" : "" }}</h3>
          <ul v-for="(instrument, i) in user.instruments" :key="i">
            <li>
              {{ instrument.section }}
            </li>
            <ul>
              <li>{{ instrument.name }}</li>
            </ul>
          </ul>
        </v-col>
      </v-row>
      <v-row>
        <v-col cols="12" xs="12" md="6" order="2">
          <h3>Email</h3>
          <p>{{ user.email }}</p>
        </v-col>
        <v-col cols="12" xs="12" md="6" order="4">
          <!-- TODO: length is not found on first render -->
          <h3>Orkest{{ user.orchestras.length > 1 ? "en" : "" }}</h3>
          <ul v-for="(orchestra, i) in user.orchestras" :key="i">
            <li>{{ orchestra }}</li>
          </ul>
        </v-col>
      </v-row>
      <v-row>
        <v-col>
          <v-btn block color="primary" @click.prevent="onLogout">log uit</v-btn>
        </v-col>
      </v-row>
    </v-container>
  </v-layout>
</template>

<script>
export default {
  name: 'Account',
  mounted() {
    this.$store.dispatch('getUser', this.$store.getters.user.id)
  },
  computed: {
    user() {
      return this.$store.getters.user
    }
  },
  methods: {
    onLogout() {
      this.$store.dispatch('logout')
      this.$router.push('/login')
    }
  }
}
</script>
