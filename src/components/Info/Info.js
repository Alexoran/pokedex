import React from 'react';
import './Info.css'
import FullInfo from './FullInfo/FullInfo';

const Info = () => {
    return ( 
        <div className = "info">
            <div className="pokemonInfo">
            <img src = "https://i.pinimg.com/originals/88/51/79/885179a1f7a12356a6b5f74417313055.png"></img>

            <FullInfo />
            </div>
        </div>
     );
}
 
export default Info;
