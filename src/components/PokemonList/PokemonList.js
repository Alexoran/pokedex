import React, { useEffect } from 'react';
import PropTypes from 'prop-types'
import './PokemonList.css'
import { connect } from 'react-redux'
import PokemonItem from '../PokemonItem/PokemonItem';
import { getPokemonRequest } from '../../actions/pokemon'


const PokemonList = React.memo(({ getPokemonRequest, next, pokemonList }) => {
    useEffect(() => {
        getPokemonRequest(next)
    }, [getPokemonRequest])

    return (
            <div className='main'>
                <div className="list">
                    {Object.values(pokemonList).map((pokemon) => (<PokemonItem key={pokemon.sprites.front_default} pokemon={pokemon} url={pokemon.sprites.front_default}/>))}
                </div>
                <div className="button" onClick={() => getPokemonRequest(next)}>
                    <button type="button"  className="btn btn-primary">Load more</button>
                </div>
            </div>
    );
});

PokemonList.propTypes = {
    getPokemonRequest: PropTypes.func.isRequired,
    pokemon: PropTypes.object.isRequired,
}

const mapStateToProps = state => ({
    next: state.pokemons.next,
    pokemonList: state.pokemons.pokemonList,
})

const mapDispatchToProps = dispatch => ({
    getPokemonRequest: (next) => dispatch(getPokemonRequest(next)),
})

export default connect(mapStateToProps, mapDispatchToProps)(PokemonList);