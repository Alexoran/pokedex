import React from 'react';
import { connect } from 'react-redux';
import './Info.css'
import FullInfo from './FullInfo/FullInfo';

const Info = ({pokemon}) => {
    return ( 
        <div className = "info">
            <div className="pokemonInfo">
            {
                pokemon && (
                    <>
                    <img src={pokemon.sprites.front_default}></img>
                    <FullInfo pokemon={pokemon}/>
                    </>
                )
            }

            
            </div>
        </div>
     );
}



const mapStateToProps = state => ({
    pokemon: state.pokemons.info
})
 
export default connect(mapStateToProps)(Info);
