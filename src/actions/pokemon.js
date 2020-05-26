
import {
    GET_POKEMON_INFO,
    GET_POKEMON_REQUEST,
    GET_POKEMON_INFO_SUCCESS,
    SELECT_POKEMON,
    NEXT_POKEMON,
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
export const getPokemonInfoSuccess = (payload) => ({ type: GET_POKEMON_INFO_SUCCESS, payload })

export const getPokemon = (url) => ({ type: GET_POKEMON_INFO, url })

export const getPokemonRequest = (next) => ({ type: GET_POKEMON_REQUEST, next })

export const selectPokemon = (id) => ({ type: SELECT_POKEMON, id })

export const nextPokemon = (payload) => ({ type: NEXT_POKEMON, payload })



