import axios from 'axios'
import {
    GET_POKEMON_INFO,
    FAILD_POKEMON_INFO,
    GET_POKEMON_REQUEST,
    GET_POKEMON_SUCCESS,    
} from '../actions/types'

import { getPokemonSuccess } from '../actions/pokemon'
import { getPokemonInfoSuccess } from '../actions/pokemon'


import { call, put, takeEvery, all } from 'redux-saga/effects'

function apiGet() {
    return axios.get('http://pokeapi.co/api/v1/pokemon/?limit=12', {
            validateStatus: function (status) {
              return status < 500; // Reject only if the status code is greater than or equal to 500
            }
          })

    
}



function* fetchPokemon(action) {
    try {
        const res = yield call(apiGet)

        if (res.status === 200) {
            yield put(getPokemonSuccess(res.data))

            // yield put({ type: GET_POKEMON_INFO, payload: res });
        }
        

    } catch (e) {
        yield put({ type: "FAILD_POKEMON_INFO", payload: e.message });
    }
}

function apiGetInfo(url) {
    return axios.get(url)
}

function* fetchPokemonInfo(action) {
    try {
        const res = yield apiGetInfo(action.url)
        if (res.status === 200) {
            yield put(getPokemonInfoSuccess(res.data))
        }
    } catch (e) {
        yield put({ type: "FAILD_POKEMON_INFO", payload: e.message });
    }
}




export default function* pokemonSaga() {
    yield all([
        takeEvery(GET_POKEMON_REQUEST, fetchPokemon),
        takeEvery(GET_POKEMON_INFO, fetchPokemonInfo)
    ])
}