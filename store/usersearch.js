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
  async delete({ commit }, video) {
    let response = await this.$axios.delete(`/videos/${video.id}`);
    if (response.status == 200 || response.status == 204) {
      commit("DELETE_VIDEO", video.id);
    }
  },
  async edit({ commit }, video) {
    let response = await this.$axios.put(`/videos/${video.id}`, video);
    let newVideo = response.data.data;
    deserializeVideos([newVideo]);
    commit("EDIT_VIDEO", newVideo.attributes);
    return newVideo.attributes;
  }
};

export const getters = {
  pokemons(state) {
    return state.pokemons;
  }
};
