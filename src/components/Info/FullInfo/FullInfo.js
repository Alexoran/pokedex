import React from 'react';
import './FullInfo.css'

const FullInfo = ({ pokemon }) => {
    return (
        <div className="full">

            <table className="table">
                <thead>
                    <tr>
                        <th scope="col">Info</th>
                        <th scope="col">Value</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>Type</td>
                        <td className='type'>{pokemon.types.map((element) => element.type.name + ' ')}</td>
                    </tr>
                    <tr>
                        <td>Attack</td>
                        <td>{pokemon.stats[4].base_stat}</td>
                    </tr>
                    <tr>
                        <td>Defense</td>
                        <td>{pokemon.stats[3].base_stat}</td>
                    </tr>

                    <tr>
                        <td>HP</td>
                        <td>{pokemon.stats[5].base_stat}</td>
                    </tr>
                    <tr>
                        <td>SP Attack</td>
                        <td>{pokemon.stats[2].base_stat}</td>
                    </tr>
                    <tr>
                        <td>SP Defense</td>
                        <td>{pokemon.stats[1].base_stat}</td>
                    </tr>
                    <tr>
                        <td>Speed</td>
                        <td>{pokemon.stats[0].base_stat}</td>
                    </tr>
                    <tr>
                        <td>Weight</td>
                        <td>{pokemon.weight}</td>
                    </tr>
                    <tr>
                        <td>Total moves</td>
                        <td>{pokemon.moves.length}</td>
                    </tr>
                </tbody>
            </table>
        </div>
    );
}

export default FullInfo;