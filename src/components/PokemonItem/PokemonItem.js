import React, { useEffect } from 'react';
import './PokemonItem.css'
// import { getPokemonsInfo } from '../../actions/pokemon'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { getPokemon, getPokemonSuccess } from '../../actions/pokemon';


const PokemonItem = ({ pokemon, pokemonInfo, getPokemon }) => {

    useEffect(() => {
        // if (pokemonInfo.isLoadeds) {
        //     console.log(pokemonInfo.isLoaded)
        // } else {
        //     getPokemon(pokemon.url)
        // }

    }, [pokemon.url])



    return (
        <>
            <div className="item">

                <img src={pokemonInfo.sprites.front_default}></img>

                <a className="name">{pokemon.name}</a>
            </div>
        </>
    );
}

PokemonItem.propTypes = {

    pokemonInfo: PropTypes.object.isRequired
}

const mapStateToProps = state => ({
    pokemonInfo: state.pokemons.pokemonInfo,
})

const mapDispatchToProps = dispatch => ({
    getPokemon: (url) => dispatch(getPokemon(url))
})

export default connect(mapStateToProps, mapDispatchToProps)(PokemonItem)