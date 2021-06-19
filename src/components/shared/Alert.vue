<template>
  <v-flex style="position: absolute" d-flex justify-center xs12 sm6 offset-sm3>
    <v-alert
      :type="severity"
      dismissible
      @input="onClose"
      elevation="5"
      transition="fade-transition"
      :value="alert"
    >
      {{ text }}
    </v-alert>
  </v-flex>
</template>

<script>
export default {
  props: ['text', 'severity'],
  data() {
    return {
      alert: true
    }
  },
  methods: {
    onClose() {
      this.$emit('dismissed')
    }
  }
}
</script>