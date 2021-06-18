<template>
  <v-layout v-if="notices.length > 0">
    <v-expansion-panels inset focusable>
      <v-expansion-panel v-for="notice in notices" :key="notice._id">
        <v-expansion-panel-header>
          {{ notice.title }}
        </v-expansion-panel-header>
        <v-expansion-panel-content>
          <div class="mt-2" v-html="notice.content" />
        </v-expansion-panel-content>
      </v-expansion-panel>
    </v-expansion-panels>
  </v-layout>
  <v-container v-else column align-center>
    <v-flex text-center>
      <v-icon color="warning">fa-exclamation-circle</v-icon>
      <h2>Er zijn geen meldingen!</h2>
    </v-flex>
  </v-container>
</template>

<script>
export default {
  name: "Notices",
  data: () => ({
    notices: [
      {
        _id: "ti38d0cikds",
        title: "test",
        content: "Dit is een test melding",
      },
      {
        _id: "ti38d0cikdsd",
        title: "test",
        content: "Dit is een test melding",
      },
    ],
  }),
}
</script>
