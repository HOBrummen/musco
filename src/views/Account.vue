<template>
  <v-layout column>
    <!-- TODO: Make a slider -->
    <v-img aspect-ratio="2.5" width="100%" :src="image" />
    <v-container>
      <v-row>
        <v-col cols="12" xs="12" md="6" order="1">
          <h3>Naam</h3>
          <!-- eslint-disable-next-line max-len -->
          <p>{{ user.name }}</p>
        </v-col>
        <v-col cols="12" xs="12" md="6" order="3">
          <h3>Instrument{{ user.instruments.length > 1 ? "en" : "" }}</h3>
          <ul v-for="(instrument, i) in user.instruments" :key="i">
            <li>{{ user.instruments[i] }}</li>
          </ul>
        </v-col>
      </v-row>
      <v-row>
        <v-col cols="12" xs="12" md="6" order="2">
          <h3>Email</h3>
          <p>{{ user.email }}</p>
        </v-col>
        <v-col cols="12" xs="12" md="6" order="4">
          <h3>Orkest{{ user.orchestras.length > 1 ? "en" : "" }}</h3>
          <ul v-for="(orchestra, i) in user.orchestras" :key="i">
            <li>{{ user.orchestras[i] }}</li>
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
  data: () => ({
    // eslint-disable-next-line global-require
    image: require('@/assets/accountBackground-min.jpg'),
    user: {
      name: 'John Joe',
      email: 'John.Joe@gmail.com',
      instruments: ['Hoorn'],
      orchestras: [
        'Harmonie orkest',
        'Pretband',
        'Opleidingsorkest A',
        'Opleidingsorkest B'
      ]
    }
  }),
  methods: {
    onLogout() {
      this.$store.dispatch('logout')
      this.$router.push('/login')
    }
  }
}
</script>
