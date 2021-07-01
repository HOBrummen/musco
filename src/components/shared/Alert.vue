<template>
  <v-flex xs12 md6 sm6 offset-sm3>
    <v-snackbar
      top
      :color="severity || 'info'"
      @input="$emit('dismissed')"
      elevation="5"
      transition="fade-transition"
      :value="true"
      app
    >
      {{ message }}
    </v-snackbar>
  </v-flex>
</template>

<script>
export default {
  props: {
    message: {
      type: String,
      required: true
    },
    severity: {
      type: String,
      required: false
    }
  }
}
</script>