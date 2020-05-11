import axios from 'axios'

import {
    GET_POKEMON,
    ERROR_POKEMON,
    GET_POKEMON_INFO,
    FAILD_POKEMON_INFO,
    GET_POKEMON_REQUEST,
    GET_POKEMON_SUCCESS,
    GET_POKEMON_INFO_SUCCESS
} from './types'


// export const getPokemons = () => async dispatch => {
//     try {
//         const res = await axios.get('http://pokeapi.co/api/v1/pokemon/?limit=12')

//         dispatch({
//             type: GET_POKEMON,
//             payload: res.data
//         })
//     } catch (err) {
//         dispatch({
//             type: ERROR_POKEMON
//         })
//     }
// }

// export const getPokemonsInfo = (info) => async dispatch => {
//     try {
//         const res = await axios.get(info)

//         dispatch({
//             type: GET_POKEMON_INFO,
//             payload: res.data
//         })
//     } catch (err) {
//         dispatch({
//             type: FAILD_POKEMON_INFO
//         })
//     }
// }
export const getPokemonSuccess = (payload) => ({type: GET_POKEMON_SUCCESS, payload})

export const getPokemonInfoSuccess = (payload) => ({type: GET_POKEMON_INFO_SUCCESS, payload})

export const getPokemon = (url) => ({type: GET_POKEMON_INFO, url})


export const getPokemonRequest = () => ({type: GET_POKEMON_REQUEST})


