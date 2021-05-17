<template>
  <v-main class="grey lighten-3 mt-5">
    <v-container>
      <v-row>
        <v-col cols="12" sm="8" class="mx-auto">
          <v-card class="mx-auto" max-width="800">
            <v-toolbar color="primary">
              <v-text-field
                placeholder="enter pokemon name"
                @change="UserSearch"
                v-model="search"
                hide-details
                solo
                single-line
              ></v-text-field>
            </v-toolbar>
            <v-row class v-for="pokemon in  pokemons" :key="pokemon.id">
              <v-col md="7">
                <v-list-item>
                  <v-list-item-content>
                    <v-list-item-title>Name</v-list-item-title>
                    <v-list-item-subtitle>{{pokemon.name}}</v-list-item-subtitle>
                  </v-list-item-content>
                </v-list-item>

                <v-list-item one-line>
                  <v-list-item-content>
                    <v-list-item-title>Height</v-list-item-title>
                    <v-list-item-subtitle>{{ Math.round(pokemon.height * 3.9)}}</v-list-item-subtitle>
                  </v-list-item-content>
                </v-list-item>
                <v-list-item two-line>
                  <v-list-item-content>
                    <v-list-item-title>Weight</v-list-item-title>
                    <v-list-item-subtitle>{{ Math.round(pokemon.weight / 4.3)}} lbs</v-list-item-subtitle>
                  </v-list-item-content>
                </v-list-item>

                <v-list-item three-line>
                  <v-list-item-content>
                    <v-list-item-title>Number of Battles</v-list-item-title>
                    <v-list-item-subtitle>{{pokemon.game_indices.length}}</v-list-item-subtitle>
                  </v-list-item-content>
                </v-list-item>
              </v-col>
              <v-col md="5">
                <img :src="pokemon.sprites.front_default" />
              </v-col>
            </v-row>
          </v-card>
        </v-col>
      </v-row>
    </v-container>
  </v-main>
</template>

<script>
import { mapGetters } from "vuex";
export default {
  data: () => ({
    search: null,
  }),
  computed: {
    // mix the getters into computed with object spread operator
    ...mapGetters("usersearch", ["pokemons"]),
  },
  methods: {
    UserSearch(e) {
      let search = e.toLowerCase();
      console.log(search);
      this.$store.dispatch("usersearch/UserSearch", search);
    },
  },
};
</script>