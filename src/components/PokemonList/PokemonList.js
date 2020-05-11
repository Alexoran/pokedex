import React, { useEffect } from 'react';
import PropTypes from 'prop-types'
import './PokemonList.css'
import { connect } from 'react-redux'
import PokemonItem from '../PokemonItem/PokemonItem';
import { getPokemonRequest } from '../../actions/pokemon'


const PokemonList = React.memo(({ getPokemonRequest, pokemon, pokemonList }) => {
    useEffect(() => {
        getPokemonRequest()
    }, [getPokemonRequest])
    console.log(pokemon)
    return (
        <>
            <div className='main'>
                <div className="list">
                    {/* {pokemon.results.map((pokemon) => (<PokemonItem key={pokemon.url} pokemon={pokemon} />))} */}
                </div>
                <div className="button">
                    <button type="button" className="btn btn-primary">Load more</button>
                </div>
            </div>
        </>
    );
});

PokemonList.propTypes = {
    getPokemons: PropTypes.func.isRequired,
    pokemon: PropTypes.object.isRequired,
}

const mapStateToProps = state => ({
    pokemonList: state.pokemons.pokemonList,
    pokemon: state.pokemons.pokemon
})

const mapDispatchToProps = dispatch => ({
    getPokemonRequest: () => dispatch(getPokemonRequest())
})

export default connect(mapStateToProps, mapDispatchToProps)(PokemonList);