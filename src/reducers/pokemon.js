import {
    GET_POKEMON,
    ERROR_POKEMON,
    GET_POKEMON_INFO,
    FAILD_POKEMON_INFO,
    GET_POKEMON_SUCCESS,
    GET_POKEMON_INFO_SUCCESS,
    GET_POKEMON_REQUEST,
    GET_POKEMON_INFO_REQUEST
} from '../actions/types'

const initialState = {
    pokemon: {
        next: null,
        previous: null,
        results: [],
        isLoaded: false
    },
    pokemonInfo: {
        sprites: {
            front_default: ""
        },
        isLoadeds: false
    },
}

export default function (state = initialState, action) {
    const { type, payload } = action

    switch (type) {
        case GET_POKEMON_SUCCESS:
            return {
                ...state,
                pokemon: { 
                    next: 'some value',
                    previous: 'piska',
                    results: [],
                    isLoaded: false
                 },
            }
        case GET_POKEMON_REQUEST:
            return initialState

        // case ERROR_POKEMON:
        //     return {
        //         ...state
        //     }
        // case GET_POKEMON_INFO:
        //     return {
        //         ...state,
        //         isLoaded: true
        //     }
        // case FAILD_POKEMON_INFO:
        //     return {
        //         ...state,
        //     }

        // case GET_POKEMON_INFO_SUCCESS:
        //     return {
        //         ...state,
        //         pokemonInfo: payload,
        //         pokemonList: [...state.pokemonList, payload],
        //         isLoadeds: true
        //     }

        // case GET_POKEMON_INFO_REQUEST:
        //     return {
        //         ...state,
        //         pokemonInfo: {
        //             isLoadeds: false
        //         }
        //     }
        default:
            return state
    }
} 