import { createSlice } from '@reduxjs/toolkit'
import { fetchPokemon } from './PokemonAction'
import type { RootState } from './store'

// Define a type for the slice state
interface pokemonState {
    data: {
        id: number,
        height: number,
        name: string
    },
    isLoading: boolean,
    errorMessage: string,
}

// Define the initial state using that type
const initialState: pokemonState = {
    data: {
        id: 0,
        height: 0,
        name: ""
    },
    isLoading: false,
    errorMessage: ""
}

export const pokemonSlice = createSlice({
    name: "pokemon",
    // `createSlice` will infer the state type from the `initialState` argument
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(fetchPokemon.pending, (state) => { state.isLoading = true })
        builder.addCase(fetchPokemon.fulfilled, (state, action) => {
            console.log("inside pokemon slice")
            state.data = { id: action.payload.id, height: action.payload.height, name: action.payload.name }
            state.isLoading = false;
        })
        builder.addCase(fetchPokemon.rejected, (state, action) => {
            state.errorMessage = action?.error?.message ?? "something went wrong";
            state.isLoading = false
        })
    }

})

export const { } = pokemonSlice.actions

// Other code such as selectors can use the imported `RootState` type
export const selectPokemon = (state: RootState) => state.pokemon

export default pokemonSlice.reducer
