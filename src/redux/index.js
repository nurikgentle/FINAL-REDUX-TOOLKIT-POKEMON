import { configureStore } from "@reduxjs/toolkit";
import pokemon from './slices/pokemon';
import pokemonAdditionally from './slices/pokemonAdditionally';

export const store = configureStore({
    reducer: {
        pokemon,
        pokemonAdditionally,
    }
});