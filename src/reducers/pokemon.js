import {
    GET_POKEMON_INFO,
    FAILD_POKEMON_INFO,
    GET_POKEMON_INFO_SUCCESS,
    GET_POKEMON_REQUEST,
    SELECT_POKEMON,
    NEXT_POKEMON,
} from '../actions/types'

const initialState = {
    info: null,
    next: 'http://pokeapi.co/api/v1/pokemon/?limit=12',
    pokemonList: {},
    error: null
}

export default function (state = initialState, action) {
    const { type, payload, error } = action

    switch (type) {
        case GET_POKEMON_REQUEST:
            return {
                ...state            
            }
        
        case GET_POKEMON_INFO:
            return {
                ...state,
                isLoaded: true
            }
        case FAILD_POKEMON_INFO:
            return {
                ...state,
                error: error,
            }
        case GET_POKEMON_INFO_SUCCESS:
            return {
                ...state,
                pokemonList: {
                    ...state.pokemonList,
                    [payload.data.id]: payload.data
                }
            }
        case NEXT_POKEMON:
            return {
                ...state,
                next: payload
            }        
        
        case SELECT_POKEMON:
            return {
                ...state,
                info: state.pokemonList[action.id]
            }
        default:
            return state
    }
} 