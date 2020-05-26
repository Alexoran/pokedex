import React from 'react';
import './PokemonItem.css'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { selectPokemon } from '../../actions/pokemon';

const selectType = {
    normal: 'white',
    fighting: 'red',
    flying: 'lightblue',
    poison: 'green',
    ground: 'brown',
    rock: 'grey',
    bug: 'darkgreen',
    ghost: 'grey',
    steel: 'grey',
    fire: 'red',
    grass: 'green',
    electric: 'yellow',
    psychic: 'pink',
    ice: 'blue',
    dragon: 'orange',
    fairy: 'purple',
    dark: '#191970',
    water: 'blue'
}

const PokemonItem = ({ selectPokemon, pokemon, url }) => (
    <>
        <div onClick={() => selectPokemon(pokemon.id)} className="item">

            <img src={url}></img>

            <a className="name">{pokemon.name}</a>
            <div className='types'>
                {
                    pokemon.types.map(({ type }) => (
                        <div style={{ backgroundColor: selectType[type.name] }} className='itemType'>
                            <a>{type.name}</a>
                        </div>
                    ))
            }
            </div>
        </div>

    </>
);

PokemonItem.propTypes = {
    selectPokemon: PropTypes.func.isRequired,
    pokemon: PropTypes.object.isRequired,
    url: PropTypes.string.isRequired
}


const mapDispatchToProps = dispatch => ({
    selectPokemon: (id) => dispatch(selectPokemon(id))
})

export default connect(null, mapDispatchToProps)(PokemonItem)