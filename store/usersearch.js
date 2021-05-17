export const state = () => ({
  pokemons: []
});

export const mutations = {
  POKEMON_SEARCH(state, pokemons) {
    state.pokemons = pokemons;
  }
};

export const actions = {
  async UserSearch({ commit }, keyword) {
    let response = await this.$axios.get(
      `https://pokeapi.co/api/v2/pokemon/${keyword}`
    );

    let pokemons = [];
    pokemons.push(response.data);

    commit("POKEMON_SEARCH", pokemons);
  },
 
};

export const getters = {
  pokemons(state) {
    return state.pokemons;
  }
};
