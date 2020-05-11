import React from 'react';
import './FullInfo.css'

const FullInfo = () => {
    return (
        <div className="full">

            <table className="table">
                <thead>
                    <tr>
                        <th scope="col">Type</th>
                        <th scope="col">Fire</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>Attack</td>
                        <td>23</td>
                    </tr>
                    <tr>
                        <td>Defense</td>
                        <td>25</td>
                    </tr>
                    
                    <tr>
                        <td>HP</td>
                        <td>Brown</td>
                    </tr>
                    <tr>
                        <td>SP Attack</td>
                        <td>Brown</td>
                    </tr>
                    <tr>
                        <td>SP Defense</td>
                        <td>Brown</td>
                    </tr>
                    <tr>
                        <td>Speed</td>
                        <td>Brown</td>
                    </tr>
                    <tr>
                        <td>Weight</td>
                        <td>Brown</td>
                    </tr>
                    <tr>
                        <td>Total moves</td>
                        <td>Brown</td>
                    </tr>
                </tbody>
            </table>
        </div>
    );
}

export default FullInfo;