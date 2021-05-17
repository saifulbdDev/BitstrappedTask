<template>
  <v-app-bar app color="white" flat>
    <v-avatar :color="$vuetify.breakpoint.smAndDown ? 'grey darken-1' : 'transparent'" size="32"></v-avatar>

    <v-btn v-for="link in links" :key="link" to="/" text>{{ link }}</v-btn>
    <v-spacer></v-spacer>
    <v-avatar class="hidden-sm-and-down" color="grey darken-1 shrink" size="32"></v-avatar>
  </v-app-bar>
</template>

<script>
export default {
  data: () => ({
    links: ["Dashboard", ],
  }),
};
</script>