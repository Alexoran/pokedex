import axios from 'axios'
import {
    GET_POKEMON_INFO,
    GET_POKEMON_REQUEST,
} from '../actions/types'

import { getPokemonInfoSuccess, nextPokemon} from '../actions/pokemon'


import { put, takeEvery, all } from 'redux-saga/effects'

function apiGet(next) {
    return axios.get(next,
        {
            validateStatus: function (status) {
                console.log(status)
                return status < 500; // Reject only if the status code is greater than or equal to 500
            }
        })
}


function* fetchPokemon(action) {
    try {
        const res = yield apiGet(action.next); 
        yield put(nextPokemon(res.data.next )) 
        yield all(res.data.results.map((element) => fetchPokemonInfo(element.url, element.name)));
    } catch (e) {
        yield put({ type: "FAILD_POKEMON_INFO", error: e });
    }
}

function apiGetInfo(url) {
    return axios.get(url)
}

function* fetchPokemonInfo(url, name) {
    try {
        const res = yield apiGetInfo(url)
        if (res.status === 200) {
            yield put(getPokemonInfoSuccess({ data: res.data, name: name }))
        }
    } catch (e) {
        yield put({ type: "FAILD_POKEMON_INFO", error: e });
    }
}




export default function* pokemonSaga() {
    yield all([
        takeEvery(GET_POKEMON_REQUEST, fetchPokemon),
        takeEvery(GET_POKEMON_INFO, fetchPokemonInfo)
    ])
}