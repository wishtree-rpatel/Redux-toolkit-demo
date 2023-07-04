import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";


export const fetchPokemon = createAsyncThunk('counter/pokemon',async (name :string) => {
    try {
        const response = await axios.get("https://pokeapi.co/api/v2/pokemon/"+name)
        console.log("response",response)
        return response.data;
    } catch (error) {
        return error;
    }
    
})