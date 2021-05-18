<template>
  <v-main class="grey lighten-3 mt-5">
    <v-container>
      <v-row>
        <v-col cols="12" sm="8" class="mx-auto">
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
          <v-row class="mt-5">
            <v-col md="6" v-for="pokemon in pokemons" :key="pokemon.id" v-show="pokemon.name">
              <nuxt-link :to="{ name: 'pokemon-id', params: { id: pokemon.id } }">
                <v-card>
                  <v-img height="150" :src="pokemonimg(pokemon)"></v-img>

                  <v-card-text class="p-0">
                    <v-list-item>
                      <v-list-item-content>
                        <v-list-item-title>Name</v-list-item-title>
                        <v-list-item-subtitle>
                          {{
                          pokemon.name
                          }}
                        </v-list-item-subtitle>
                      </v-list-item-content>
                    </v-list-item>
                    <v-list-item>
                      <v-list-item-content>
                        <v-list-item-title>types</v-list-item-title>
                        <v-list-item-subtitle
                          v-for="(type, typekey) in  pokemon.types"
                          :key="typekey"
                        >
                          {{
                          type.type.name
                          }}
                        </v-list-item-subtitle>
                      </v-list-item-content>
                    </v-list-item>
                    <v-list-item one-line>
                      <v-list-item-content>
                        <v-list-item-title>Height</v-list-item-title>
                        <v-list-item-subtitle>
                          {{
                          Math.round(pokemon.height * 3.9)
                          }}
                        </v-list-item-subtitle>
                      </v-list-item-content>
                    </v-list-item>
                    <v-list-item two-line>
                      <v-list-item-content>
                        <v-list-item-title>Weight</v-list-item-title>
                        <v-list-item-subtitle>
                          {{
                          Math.round(pokemon.weight / 4.3)
                          }}
                          lbs
                        </v-list-item-subtitle>
                      </v-list-item-content>
                    </v-list-item>

                    <v-list-item three-line>
                      <v-list-item-content>
                        <v-list-item-title>Number of Battles</v-list-item-title>
                        <v-list-item-subtitle>
                          {{
                          battles_number(pokemon)
                          }}
                        </v-list-item-subtitle>
                      </v-list-item-content>
                    </v-list-item>
                  </v-card-text>

                  <v-card-actions>
                    <v-btn depressed color="primary" class="p-4">details</v-btn>
                  </v-card-actions>
                </v-card>
              </nuxt-link>
            </v-col>
          </v-row>
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
    pokemonimg(pokemon) {
      return pokemon?.sprites?.front_default;
    },
    battles_number(pokemon) {
      return pokemon?.game_indices?.length;
    },
    UserSearch(e) {
      let search = e.toLowerCase();

      this.$store.dispatch("usersearch/UserSearch", search);
    },
  },
};
</script>
