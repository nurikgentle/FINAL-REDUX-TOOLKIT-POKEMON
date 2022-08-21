import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';


export const fetchPokemonSpecies = createAsyncThunk(
  'pokemonSpecies/pokemonSpeciesFetch',
  async function dataOne(id, { rejectWithValue }) {
    const getPokemon = (id) => `https://pokeapi.co/api/v2/pokemon/${id}`;
    const newPokemons = [];
    for (let i = 1; i <= 100; i++) {
      newPokemons.push(
        await fetch(getPokemon(i)).then((response) => {
          return response.json();

        }),
      );
    }
    console.log(newPokemons)
    return newPokemons;
  },
);


export const initialState = {
  data: [],
  isLoading: true,
  isError: false,
};

const pokemonSlice = createSlice({
  name: 'pokemonAdditionally',
  initialState,
  reducers: {
    setData(state, action) {
      state.data = action.payload;
    },
  },

  extraReducers: {
    [fetchPokemonSpecies.fulfilled.type]: (state, action) => {
      state.data = action.payload;
    },
    [fetchPokemonSpecies.pending.type]: (state) => {
      state.isLoading = false;
      state.isError = false;
    },
    [fetchPokemonSpecies.rejected.type]: (state) => {
      state.isLoading = true;
      state.isError = true;
    },
  },
});

export const { setData } = pokemonSlice.actions;
export default pokemonSlice.reducer;