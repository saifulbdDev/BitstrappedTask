<template>
  <v-main class="grey lighten-3 mt-5">
    <v-container>
      <v-row>
        <v-col cols="12" sm="12" class="mx-auto">
          <v-btn tile color="success" to="/" class="mb-5">
            <v-icon left>
              mdi-arrow-left
            </v-icon>
            Back Home
          </v-btn>

          <v-card
            v-for="pokemon in pokemons"
            :key="pokemon.id"
            v-show="pokemon.name"
            class="mt-5"
          >
          <v-row>
            <v-img height="150" :src="pokemonimg(pokemon)"></v-img>
            <v-img height="150" :src="pokemonimgback_default(pokemon)"></v-img>
          </v-row>
            <v-card-text class="p-0">
              <v-row>
                <v-col md="3">
                  <v-list-item>
                    <v-list-item-content>
                      <v-list-item-title>Name</v-list-item-title>
                      <v-list-item-subtitle>{{
                        pokemon.name
                      }}</v-list-item-subtitle>
                    </v-list-item-content>
                  </v-list-item>
                  <v-list-item>
                    <v-list-item-content>
                      <v-list-item-title>types</v-list-item-title>
                      <v-list-item-subtitle
                        v-for="(type, typekey) in pokemon.types"
                        :key="typekey"
                        >{{ type.type.name }}</v-list-item-subtitle
                      >
                    </v-list-item-content>
                  </v-list-item>
                  <v-list-item>
                    <v-list-item-content>
                      <v-list-item-title>abilities</v-list-item-title>
                      <v-list-item-subtitle
                        v-for="(ability, abilitykey) in pokemon.abilities"
                        :key="abilitykey" v-show="!ability.is_hidden"
                        >{{ ability.ability.name }}</v-list-item-subtitle
                      >
                    </v-list-item-content>
                  </v-list-item>

                  <v-list-item one-line>
                    <v-list-item-content>
                      <v-list-item-title>Height</v-list-item-title>
                      <v-list-item-subtitle>{{
                        Math.round(pokemon.height * 3.9)
                      }}</v-list-item-subtitle>
                    </v-list-item-content>
                  </v-list-item>
                  <v-list-item two-line>
                    <v-list-item-content>
                      <v-list-item-title>Weight</v-list-item-title>
                      <v-list-item-subtitle
                        >{{
                          Math.round(pokemon.weight / 4.3)
                        }}
                        lbs</v-list-item-subtitle
                      >
                    </v-list-item-content>
                  </v-list-item>

                  <v-list-item three-line>
                    <v-list-item-content>
                      <v-list-item-title>Number of Battles</v-list-item-title>
                      <v-list-item-subtitle>{{
                        battles_number(pokemon)
                      }}</v-list-item-subtitle>
                    </v-list-item-content>
                  </v-list-item>
                </v-col>
                <v-col md="9">
                    <h2 class="title">stats</h2>
                  <v-row>
                    <v-col
                    md="2"
                      class="text-center"
                      v-for="(stat, statid) in pokemon.stats"
                      :key="statid"
                    >
                      <v-progress-circular
                        :rotate="180"
                        :size="100"
                        :width="15"
                        :value="stat.base_stat"
                        :color="color(stat.stat.name)"
                      >
                        {{ stat.base_stat }}
                      </v-progress-circular>
                      <h4 class="stat-title">{{name(stat)}}</h4>
                    </v-col
                   >
                  </v-row>
                </v-col>
              </v-row>
            </v-card-text>
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
    search: null
  }),
  created() {
    this.UserSearch();
  },
  computed: {
    // mix the getters into computed with object spread operator
    ...mapGetters("usersearch", ["pokemons"])
  },
  methods: {
      color(name){
        let  color = '';
        if(name == 'special-attack'){
         color = 'specialattack'
        }else if(name == 'special-defense'){
             color = 'specialdefense'
        }else{
            color = name
        }
        return color
      },
      name(stat){
          let name = stat?.stat?.name.replace("-", " ");
          return name

      },
    pokemonimg(pokemon) {
      return pokemon?.sprites?.front_default;
    },
    pokemonimgback_default(pokemon) {
      return pokemon?.sprites?.back_default;
    },
    battles_number(pokemon) {
      return pokemon?.game_indices?.length;
    },
    UserSearch() {
      let search = this.$route.params.id;
      console.log(search);
      this.$store.dispatch("usersearch/UserSearch", search);
    }
  }
};
</script>
